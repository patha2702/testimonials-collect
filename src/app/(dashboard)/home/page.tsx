import MetricsWithIcon from "@/components/dashboard/MetricsWithIcon";
import ProjectCard from "@/components/dashboard/ProjectCard";
import ProjectModal from "@/components/ProjectModal";
import prisma from "@/lib/db";
import { getUserSession } from "@/lib/session";
import { BookCheck, FolderOpenDot, FolderPlus, Gem } from "lucide-react";
import Link from "next/link";
import { redirect } from "next/navigation";
import React from "react";

const Home = async () => {
  const validUser = await getUserSession();
  if (!validUser) {
    redirect("/");
  }
  const user = await prisma.user.findFirst({
    where: {
      id: validUser.id,
    },
    include: {
      plan: true,
      projects: {
        include: {
          testimonials: true,
        },
      },
    },
  });
  let testimonialsCount = 0;
  user?.projects.forEach((project, index) => {
    project.testimonials.forEach((testimonial) => {
      testimonialsCount += 1;
    });
  });
  return (
    <main className="p-4 max-w-5xl mx-auto flex flex-col gap-4 sm:gap-6">
      <p className="text-2xl font-medium leading-tight">
        Welcome back, <span className="font-bold">{user?.name}!</span> 🎉 <br />
        Let&apos;s collect more <span className="font-bold">
          testimonials
        </span>{" "}
        and build lasting <span className="font-bold">trust</span>.
      </p>
      <section>
        <h1 className="text-4xl font-semibold">Overview</h1>
        <div className="py-2 flex justify-start items-center gap-4 sm:gap-6 flex-wrap">
          <MetricsWithIcon
            icon={
              <FolderOpenDot width={20} height={20} className="text-blue-600" />
            }
            label="Collections"
            value={user?.projects.length || 0}
          />
          <MetricsWithIcon
            icon={
              <BookCheck width={20} height={20} className="text-blue-600" />
            }
            label="Testimonials"
            value={testimonialsCount}
          />
          <MetricsWithIcon
            icon={<Gem width={20} height={20} className="text-blue-600" />}
            label="Plan"
            value={user?.plan.name || ""}
          />
        </div>
      </section>
      <section className="flex flex-col gap-2">
        <div className="flex justify-between items-center">
          <h1 className="text-4xl font-semibold">Collections</h1>
          <ProjectModal />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-2">
          {user?.projects.length! > 0 ? (
            user?.projects.map((project) => {
              const totalTestimonials = project.testimonials.length;
              let ratingSum = 0;
              project.testimonials.forEach((testimonial, index) => {
                ratingSum += testimonial.rating;
              });
              const avgRating =
                totalTestimonials > 0
                  ? ratingSum / totalTestimonials
                  : "No data";
              return (
                <Link href={`/collections/${project.id}`} key={project.id}>
                  <ProjectCard
                    name={project.name}
                    avgRating={avgRating || 0}
                    totalTestimonials={totalTestimonials || 0}
                  />
                </Link>
              );
            })
          ) : (
            <p className="text-2xl font-semibold">
              Ready to shine 🌟 Create your first Collection and build lasting
              trust!
            </p>
          )}
        </div>
      </section>
    </main>
  );
};

export default Home;
