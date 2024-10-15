"use client";
import { getYouTubeVideoId } from "@/lib/helper";
import { Heart } from "lucide-react";
import React, { useState, useEffect } from "react";
import Delete from "./Delete";
import { Rating } from "../testimonial-cards/classic-star-review-card";
import YouTube, { YouTubeProps } from "react-youtube";

interface TestimonialCardProps {
  name: string;
  email: string;
  text: string | null;
  video: string | null;
  rating: number;
  loved: boolean;
  testimonialId: number;
  postedAt?: Date;
}
const TestimonialCard = ({
  name,
  email,
  text,
  video,
  rating,
  loved,
  testimonialId,
  postedAt,
}: TestimonialCardProps) => {
  const [isLoved, setIsLoved] = useState(loved);
  const videoCode = getYouTubeVideoId(video || "");
  
  const opts: YouTubeProps["opts"] = {
    width: "300",
    height: "200",
    playerVars: {
      autoplay: 0,
    },
  };
  const handleLovedTestimonials = async () => {
    try {
      const res = await fetch("/api/lovedtestimonials", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          data: {
            testimonialId: testimonialId,
            loved: isLoved,
          },
        }),
      });
    } catch (err: any) {
      console.error("Error please try again", err.message);
    }
  };
  useEffect(() => {
    handleLovedTestimonials();
  }, [isLoved]);

  return (
    <div className="z-1 relative cursor-pointer p-2 flex flex-col gap-2 rounded-lg border border-gray-300 bg-white/20 hover:shadow-xl transition-all">
      <Delete type="testimonial" id={testimonialId} name={name} />
      <Heart
        size={35}
        fill={isLoved ? "pink" : "white"}
        strokeWidth={0.2}
        className="absolute top-2 right-10 cursor-pointer hover:text-black/30 transition-all"
        onClick={() => {
          setIsLoved((prev) => {
            return !prev;
          });
        }}
      />

      <div className="flex items-center gap-2">
        <div className="rounded-full w-8 h-8 bg-gray-300 text-gray-700 dark:text-gray-700 dark:bg-gray-700 flex justify-center items-center">
          {name
            .split(" ")
            .map((word) => word.charAt(0).toUpperCase())
            .join("")}
        </div>
        <h3 className="text-lg font-semibold text-gray-700 dark:text-white">
          {name}
        </h3>
      </div>
      {text ? (
        <p className="leading-tight">{text}</p>
      ) : (
        <YouTube videoId={videoCode} opts={opts} />
      )}
      <div className="flex justify-start items-center gap-2">
        <span className="font-medium">Rating: </span>
        <Rating fill="gold" rating={rating} />
      </div>
      <div className="flex justify-between items-center">
        <span className=" text-gray-700">{email}</span>
        <span>{postedAt?.toDateString()}</span>
      </div>
    </div>
  );
};

export default TestimonialCard;
