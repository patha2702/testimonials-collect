import { Heart } from "lucide-react";
import React from "react";

const TestimonialCard = () => {
  return (
    <div className="z-1 relative p-2 flex flex-col gap-1 rounded-lg border border-gray-300 bg-white/20 hover:shadow-xl transition-all">
      <Heart
        height={40}
        width={40}
        strokeWidth={0.2}
        className="absolute top-1 right-1 cursor-pointer hover:text-black/30 transition-all"
      />
      <span className="text-lg font-semibold">Rajendra</span>
      <p className="leading-tight text-sm">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam quod
        laboriosam pariatur id ab odit commodi beatae, quo assumenda recusandae
        sunt? Amet dolore quae possimus praesentium nostrum? Dignissimos,
        tempore neque?
      </p>
      <div className="flex justify-between items-center">
        <div className="flex justify-start items-center gap-2">
          <span className="font-medium">Rating: </span>
          <span className="font-bold">{4.5}</span>
        </div>
        <span className=" text-gray-700">2 Days ago</span>
      </div>
    </div>
  );
};

export default TestimonialCard;
