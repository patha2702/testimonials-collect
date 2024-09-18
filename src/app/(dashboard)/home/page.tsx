import MetricsWithIcon from "@/components/dashboard/MetricsWithIcon";
import ProjectCard from "@/components/dashboard/ProjectCard";
import ProjectModal from "@/components/ProjectModal";
import { getUserSession } from "@/lib/session";
import { BookCheck, FolderOpenDot, FolderPlus, Gem } from "lucide-react";
import { redirect } from "next/navigation";
import React from "react";

const Home = async () => {
  const user = await getUserSession();
  if (!user) {
    redirect("/");
  }
  return (
    <main className="p-4 max-w-5xl mx-auto flex flex-col gap-4 sm:gap-6">
      <p className="text-2xl font-medium leading-tight">
        Welcome back, <span className="font-bold">Rajendra!</span> 🎉 <br />
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
            label="Projects"
            value={10}
          />
          <MetricsWithIcon
            icon={
              <BookCheck width={20} height={20} className="text-blue-600" />
            }
            label="Testimonials"
            value={10}
          />
          <MetricsWithIcon
            icon={<Gem width={20} height={20} className="text-blue-600" />}
            label="Plan"
            value={"Free"}
          />
        </div>
      </section>
      <section className="flex flex-col gap-2">
        <div className="flex justify-between items-center">
          <h1 className="text-4xl font-semibold">My Projects</h1>
          <ProjectModal />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-2">
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
        </div>
      </section>
    </main>
  );
};

export default Home;
