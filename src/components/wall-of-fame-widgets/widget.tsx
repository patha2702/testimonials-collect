"use client";
import { useState, useEffect } from "react";
import { Rating } from "../testimonial-cards/classic-star-review-card";
import YouTube, { YouTubeProps } from "react-youtube";
import { getYouTubeVideoId } from "@/lib/helper";

export interface TestimonialCardProps {
  id: number;
  name: string;
  email: string;
  text: string | null;
  videoUrl: string | null;
  rating: number;
  loved: boolean;
  projectId: string;
  createAt: Date;
}

interface WidgetProps {
  testimonials: TestimonialCardProps[];
  type: string;
}

export default function Widget({ testimonials, type }: WidgetProps) {
  const [enterTime, setEnterTime] = useState(0);
  const [totalTimeSpent, setTotalTimeSpent] = useState(0);

  useEffect(() => {
    const testimonialSection = document.getElementById("testimonials-section");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setEnterTime(Date.now());
          } else {
            if (enterTime !== 0) {
              const timeSpent = Date.now() - enterTime;
              setTotalTimeSpent((prevTime) => prevTime + timeSpent);
              setEnterTime(0);
              window.parent.postMessage(
                {
                  type: "TESTIMONIAL_TIME_SPENT",
                  timeSpent,
                },
                "*"
              );
            }
          }
        });
      },
      {
        threshold: 0.5,
      }
    );
    if (testimonialSection) {
      observer.observe(testimonialSection);
    }
    const resizeIFrame = () => {
      const height = document.documentElement.scrollHeight;
      window.parent.postMessage(
        {
          type: "RESIZE_IFRAME",
          height,
        },
        "*"
      );
    };
    window.addEventListener("load", resizeIFrame);
    window.addEventListener("resize", resizeIFrame);

    return () => {
      if (testimonialSection) {
        observer.unobserve(testimonialSection);
      }
    };
  }, [enterTime]);

  return (
    <div
      id="testimonials-section"
      className="w-full bg-gray-50 dark:bg-gray-900"
    >
      {type === "wall-of-fame" ? (
        <div className="container px-6 md:px-16">
          <div className="columns-1 sm:columns-2 md:columns-3 gap-3 space-y-3">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} testimonial={testimonial} />
            ))}
          </div>
        </div>
      ) : (
        <div className="w-screen flex gap-4 overflow-x-auto">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} />
          ))}
        </div>
      )}
    </div>
  );
}

const TestimonialCard = ({
  testimonial,
}: {
  testimonial: TestimonialCardProps;
}) => {
  const videoCode = getYouTubeVideoId(testimonial.videoUrl || "");

  const opts: YouTubeProps["opts"] = {
    width: "250",
    height: "200",
    playerVars: {
      autoplay: 0,
    },
  };

  return (
    <div className="max-w-80 p-4 break-inside-avoid rounded-lg border shadow-lg border-gray-200 bg-gray-50 dark:border-gray-700 dark:bg-gray-800">
      <div className="flex items-center gap-2 mb-2">
        <div className="rounded-full w-8 h-8 bg-gray-300 text-gray-700 dark:text-gray-700 dark:bg-gray-700 flex justify-center items-center">
          {testimonial.name
            .split(" ")
            .map((word) => word.charAt(0).toUpperCase())
            .join("")}
        </div>
        <h3 className="text-lg font-semibold text-gray-700 dark:text-white">
          {testimonial.name}
        </h3>
      </div>
      <div className="mb-2 flex items-center gap-2">
        <span className="text-lg text-black/80">Rating</span>{" "}
        <Rating fill="gold" rating={testimonial.rating} />
      </div>
      {testimonial.videoUrl ? (
        <YouTube videoId={videoCode} opts={opts} />
      ) : (
        <p className="text-gray-600 dark:text-gray-300">{testimonial.text}</p>
      )}

      <div className="text-sm text-gray-600 dark:text-gray-400 py-2">
        <span>Moment of Truth: </span>
        <span>{new Date(testimonial.createAt.toString()).toDateString()}</span>
      </div>
    </div>
  );
};
