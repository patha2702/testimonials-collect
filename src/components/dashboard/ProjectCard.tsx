import React from "react";

interface ProjectCardProps {
  name: string;
  totalTestimonials: number;
  avgRating: number | string;
}
const ProjectCard = ({
  name,
  totalTestimonials,
  avgRating,
}: ProjectCardProps) => {
  return (
    <div className="p-2 border border-gray-300 rounded-lg hover:shadow-xl transition-all cursor-pointer">
      <h2 className="text-lg font-bold">{name}</h2>
      <div className="flex justify-start items-center gap-1">
        <span className="font-medium">Testimonials:</span>
        <span className="font-bold">{totalTestimonials}</span>
      </div>
      <div className="flex justify-start items-center gap-1">
        <span className="font-medium">Average Rating: </span>
        <span className="font-bold">{avgRating}</span>
      </div>
    </div>
  );
};

export default ProjectCard;
