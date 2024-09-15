import MetricsWithIcon from "@/components/dashboard/MetricsWithIcon";
import Sidebar from "@/components/dashboard/Sidebar";
import TestimonialCard from "@/components/dashboard/TestimonialCard";
import { BookCheck, Star, Type, Video } from "lucide-react";
import React from "react";

const ProjectPage = () => {
  return (
    <main className="p-4 max-w-5xl mx-auto flex flex-col gap-4">
      <h1 className="text-4xl font-semibold text-center">
        Testimonials Collect
      </h1>
      <div className="flex justify-center items-center gap-4 sm:gap-6 flex-wrap">
        <MetricsWithIcon
          icon={<BookCheck width={20} height={20} className="text-blue-600" />}
          label="Testimonials"
          value={5}
        />
        <MetricsWithIcon
          icon={<Type width={20} height={20} className="text-blue-600" />}
          label="Text"
          value={5}
        />
        <MetricsWithIcon
          icon={<Video width={20} height={20} className="text-blue-600" />}
          label="Video"
          value={5}
        />
        <MetricsWithIcon
          icon={<Star width={20} height={20} className="text-blue-600" />}
          label="Avg Rating"
          value={4.5}
        />
      </div>
      <section className="grid sm:grid-cols-[30%_70%] py-2 sm:py-4">
        <section className="p-2">
          <Sidebar />
        </section>
        <section className="p-2 flex flex-col gap-2">
          <TestimonialCard />
          <TestimonialCard />
          <TestimonialCard />
          <TestimonialCard />
          <TestimonialCard />
        </section>
      </section>
    </main>
  );
};

export default ProjectPage;
