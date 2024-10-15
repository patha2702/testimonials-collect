import CalmTestimonialCard from "@/components/testimonial-cards/calm-testimonials-card";
import ClassicStarReviewCard, {
  Rating,
} from "@/components/testimonial-cards/classic-star-review-card";
import ModernBadgeTestimonialCard from "@/components/testimonial-cards/modern-badge-testimonial-card";
import React from "react";
import { date } from "zod";

const Card = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      {/* <ClassicStarReviewCard
        author="Rajendra Patha"
        postedAt={new Date()}
        rating={5}
        testimonial="Very good product. I loved it and would like to contribute towards its growth."
      /> */}
      <CalmTestimonialCard
        author="Rajendra Patha"
        postedAt={new Date()}
        rating={5}
        testimonial="Very good product. I loved it and would like to contribute towards its growth."
      />
    </div>
  );
};

export default Card;
