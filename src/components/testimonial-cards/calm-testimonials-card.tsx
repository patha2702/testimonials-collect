import React from "react";
import { ClassicStarReviewCardProps, Rating } from "./classic-star-review-card";

const CalmTestimonialCard = ({
  author,
  postedAt,
  rating,
  testimonial,
}: ClassicStarReviewCardProps) => {
  return (
    <div className="max-w-sm border border-blue-100 p-4 rounded-2xl flex flex-col items-center gap-4 text-black bg-white/50 backdrop-blur-sm">
      <Rating fill="gold" rating={4} />
      <p className="text-lg leading-relaxed text-center">
        &quot;{testimonial}&quot;
      </p>
      <div className="text-xl font-bold">{author}</div>
    </div>
  );
};

export default CalmTestimonialCard;
