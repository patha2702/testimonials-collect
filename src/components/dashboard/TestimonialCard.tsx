"use client";
import { Heart } from "lucide-react";
import React, { useState, useEffect } from "react";

interface TestimonialCardProps {
  name: string;
  email: string;
  text: string | null;
  video: string | null;
  rating: number;
  loved: boolean;
  testimonialId: number;
}
const TestimonialCard = ({
  name,
  email,
  text,
  video,
  rating,
  loved,
  testimonialId,
}: TestimonialCardProps) => {
  const [isLoved, setIsLoved] = useState(loved);

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
    <div className="z-1 relative cursor-pointer p-2 flex flex-col gap-1 rounded-lg border border-gray-300 bg-white/20 hover:shadow-xl transition-all">
      <Heart
        height={40}
        width={40}
        fill={isLoved ? "pink" : "white"}
        strokeWidth={0.2}
        className="absolute top-1 right-1 cursor-pointer hover:text-black/30 transition-all"
        onClick={() => {
          setIsLoved((prev) => {
            return !prev;
          });
        }}
      />
      <span className="text-lg font-semibold">{name}</span>
      <p className="leading-tight text-sm">{text}</p>
      <div className="flex justify-between items-center">
        <span className=" text-gray-700">{email}</span>
        <div className="flex justify-start items-center gap-2">
          <span className="font-medium">Rating: </span>
          <span className="font-bold">{rating}</span>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
