import { Heart } from "lucide-react";
import React from "react";

interface TestimonialCardProps {
  name: string;
  email: string;
  text: string | null;
  video: string | null;
  rating: number;
  loved: boolean;
}
const TestimonialCard = ({
  name,
  email,
  text,
  video,
  rating,
  loved,
}: TestimonialCardProps) => {
  return (
    <div className="z-1 relative cursor-pointer p-2 flex flex-col gap-1 rounded-lg border border-gray-300 bg-white/20 hover:shadow-xl transition-all">
      <Heart
        height={40}
        width={40}
        strokeWidth={0.2}
        className="absolute top-1 right-1 cursor-pointer hover:text-black/30 transition-all"
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
