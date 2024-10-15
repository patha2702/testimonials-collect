import React from "react";
import { Quote, Star } from "lucide-react";

export interface ClassicStarReviewCardProps {
  testimonial: string;
  rating: number;
  author: string;
  postedAt: Date;
}

const ClassicStarReviewCard = ({
  testimonial,
  rating,
  author,
  postedAt,
}: ClassicStarReviewCardProps) => {
  return (
    <div className="w-48 flex flex-col gap-2 p-2 border items-center border-black/30 rounded-lg">
      <Rating fill="gray" rating={rating} />
      <div>
        <Quote size={20} fill="teal" strokeWidth={0} className="rotate-180" />
        <p className="text-md font-medium px-2 leading-tight">{testimonial}</p>
        <Quote className="ml-auto" fill="teal" size={20} strokeWidth={0} />
      </div>
      <div className="flex flex-col ">
        <span className="text-xl font-semibold text-gray-700">{author}</span>
        <span className="text-sm">{postedAt.toDateString()}</span>
      </div>
    </div>
  );
};

export default ClassicStarReviewCard;

interface RatingProps {
  rating: number;
  fill: string;
}

export function Rating({ rating, fill }: RatingProps) {
  return (
    <div className="flex justify-start items-center">
      {[...Array(5)].map((star, index) => {
        return (
          <label key={index}>
            <input type="radio" className="hidden" value={index + 1} />
            <Star
              key={index}
              size={30}
              strokeWidth={0}
              fill={index + 1 <= rating ? fill : "transparent"}
            />
          </label>
        );
      })}
    </div>
  );
}
