import React from "react";

const ProjectCard = () => {
  return (
    <div className="p-2 border border-gray-300 rounded-lg hover:shadow-xl transition-all cursor-pointer">
      <h2 className="text-lg font-bold">Testimonials Collect</h2>
      <div className="flex justify-start items-center gap-1">
        <span className="font-medium">Testimonials:</span>
        <span className="font-bold">3</span>
      </div>
      <div className="flex justify-start items-center gap-1">
        <span className="font-medium">Average Rating: </span>
        <span className="font-bold">5.0</span>
      </div>
      <span className="flex justify-start items-center gap-1">
        <span className="font-medium">Created on: </span>
        <span className="font-bold">12/12/2002</span>
      </span>
    </div>
  );
};

export default ProjectCard;
