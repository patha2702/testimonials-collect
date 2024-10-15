import React from "react";
import Image from "next/image";
import { Rating } from "../testimonial-cards/classic-star-review-card";
import Delete from "./Delete";
import Link from "next/link";

interface ProjectCardProps {
  id: string;
  name: string;
  totalTestimonials: number;
  avgRating: number | string;
  projectLogo: string;
}
const ProjectCard = ({
  id,
  name,
  totalTestimonials,
  avgRating,
  projectLogo,
}: ProjectCardProps) => {
  const collectionLogoUrl = `${process.env.CDN_DOMAIN_NAME}/${projectLogo}`;
  const averageRating = Math.floor(parseInt(`${avgRating}`));
  return (
    <div className="relative p-1 border border-gray-300 rounded-lg hover:shadow-xl transition-all">
      <Link
        href={`/collections/${id}`}
        className="cursor-pointer flex justify-start items-center gap-4"
      >
        <div>
          <Image
            src={collectionLogoUrl}
            alt={name}
            width={100}
            height={100}
            className="rounded-lg border border-black/40"
          />
        </div>
        <div>
          <h2 className="text-lg font-bold">{name}</h2>
          <div className="flex justify-start items-center gap-1 max-sm:text-sm">
            <span className="font-medium">Testimonials:</span>
            <span className="font-bold">{totalTestimonials}</span>
          </div>
          <div className="flex justify-start items-center gap-1 max-sm:text-sm">
            <span className="font-medium">Average Rating: </span>
            {averageRating > 0 ? (
              <Rating fill="gold" rating={averageRating} />
            ) : (
              <span className="font-bold">No Data</span>
            )}
          </div>
        </div>
      </Link>

      <Delete id={id} type="collection" name={name} />
    </div>
  );
};

export default ProjectCard;
