import MetricsWithIcon from "@/components/dashboard/MetricsWithIcon";
import Sidebar from "@/components/dashboard/Sidebar";
import TestimonialCard from "@/components/dashboard/TestimonialCard";
import prisma from "@/lib/db";
import {
  BookCheck,
  Copy,
  CopyCheck,
  Eye,
  Star,
  Type,
  Video,
} from "lucide-react";
import React from "react";
import Image from "next/image";
import CopyText from "@/components/CopyText";

const ProjectPage = async ({
  params,
}: {
  params: { collectionId: string };
}) => {
  const { collectionId } = params;
  const collection = await prisma.project.findFirst({
    where: {
      id: collectionId,
    },
    include: {
      testimonials: true,
    },
  });
  const collectionLogoUrl = `${process.env.CDN_DOMAIN_NAME}/${collection?.logo}`;
  const collectionUrl = `${process.env.DOMAIN_NAME}${collection?.liveUrl}`;
  let ratingSum = 0;
  collection?.testimonials.map((testimonial) => {
    ratingSum += testimonial.rating;
  });
  const avgRating = parseFloat(
    (ratingSum / collection?.testimonials.length!).toFixed(1)
  );
  return (
    <main className="p-4 max-w-5xl mx-auto flex flex-col gap-4">
      <div className="flex flex-col items-center">
        <div className="p-2 flex justify-center items-center gap-2">
          <Image
            src={collectionLogoUrl}
            alt={collection?.name || ""}
            width={50}
            height={50}
            className="rounded-lg"
          />
          <h1 className="text-4xl leading-none font-semibold">
            {collection?.name}
          </h1>
        </div>
        <div className="flex flex-col">
          <span>Share this URL for collecting testimonials: </span>
          <CopyText text={collectionUrl} />
        </div>
      </div>
      <div className="flex justify-center items-center gap-4 sm:gap-6 flex-wrap">
        <MetricsWithIcon
          icon={<BookCheck width={20} height={20} className="text-blue-600" />}
          label="Testimonials"
          value={collection?.testimonials.length || 0}
        />
        {/* <MetricsWithIcon
          icon={<Type width={20} height={20} className="text-blue-600" />}
          label="Text"
          value={5}
        />
        <MetricsWithIcon
          icon={<Video width={20} height={20} className="text-blue-600" />}
          label="Video"
          value={5}
        /> */}
        <MetricsWithIcon
          icon={<Star width={20} height={20} className="text-blue-600" />}
          label="Avg Rating"
          value={avgRating || "No data"}
        />
        <MetricsWithIcon
          icon={<Eye width={20} height={20} className="text-blue-600" />}
          label="Watch Time"
          value={collection?.watchTime || "No data"}
        />
      </div>
      <section className="grid sm:grid-cols-[30%_70%] py-2 sm:py-4">
        <section className="p-2">
          <Sidebar collectionId={collectionId} />
        </section>
        <section className="p-2 flex flex-col gap-2">
          {collection?.testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              email={testimonial.email}
              name={testimonial.name}
              text={testimonial.text}
              rating={testimonial.rating}
              video={testimonial.videoUrl}
              loved={testimonial.loved}
              testimonialId={testimonial.id}
              postedAt={testimonial.createAt}
            />
          ))}
        </section>
      </section>
    </main>
  );
};

export default ProjectPage;
