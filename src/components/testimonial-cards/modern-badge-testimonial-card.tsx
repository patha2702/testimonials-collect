import React from "react";
import { ClassicStarReviewCardProps, Rating } from "./classic-star-review-card";

const ModernBadgeTestimonialCard = ({
  author,
  rating,
  postedAt,
  testimonial,
}: ClassicStarReviewCardProps) => {
  return (
    <div className="w-96 rounded-3xl border-2 border-l-4 border-l-blue-700 shadow-lg p-4 bg-slate-50">
      <div className="flex flex-col justify-start gap-4 px-4 py-2">
        <Rating fill="gold" rating={rating} />
        <p className="pr-4 font-medium leading-tight">{testimonial}</p>
      </div>
      <p className="text-xl font-semibold text-right">{author}</p>
    </div>
  );
};

export default ModernBadgeTestimonialCard;
