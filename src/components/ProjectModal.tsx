"use client";
import { FolderPlus, X } from "lucide-react";
import React, { useState } from "react";
import TestimonialsCollectionCard, {
  TestimonialsCollectionCardProps,
} from "./TestimonialsCollectionCard";
import ProjectForm from "./form/ProjectForm";

const ProjectModal = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  return (
    <div>
      <button
        className="px-4 py-2 flex justify-center items-center gap-2 font-semibold bg-blue-600 rounded-lg text-white hover:bg-blue-700"
        onClick={() => setIsModalOpen(true)}
      >
        <FolderPlus />
        <span className="whitespace-nowrap">Collect</span>
      </button>

      {isModalOpen && (
        <div className="z-20 fixed h-dvh inset-0 bg-black bg-opacity-50">
          <div className="bg-white rounded-xl border border-black p-4 max-w-5xl h-full mx-auto">
            <div className="relative">
              <button
                className="absolute top-0 right-0"
                onClick={() => setIsModalOpen(false)}
              >
                <X />
              </button>
              <div>
                <div className="w-full h-full">
                  <ProjectForm />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectModal;
