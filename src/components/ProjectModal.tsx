"use client";
import { FolderPlus, X } from "lucide-react";
import React, { useState } from "react";
import Image from "next/image";
import ImageUpload from "./form/ImageUpload";
import InputWithLabel from "./form/InputWithLabel";
import CustomQuestion from "./form/CustomQuestions";
import TestimonialsCollectionCard from "./TestimonialsCollectionCard";

const ProjectModal = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  return (
    <div>
      <button
        className="px-4 py-2 flex justify-center items-center gap-2 font-semibold bg-blue-600 rounded-lg text-white hover:bg-blue-700"
        onClick={() => setIsModalOpen(true)}
      >
        <FolderPlus />
        <span className="whitespace-nowrap">New Project</span>
      </button>

      {isModalOpen && (
        <div className="z-20 fixed h-full overflow-y-scroll inset-0 bg-black bg-opacity-50">
          <div className="bg-white rounded-xl border border-black p-4 max-w-5xl h-full mx-auto">
            <div className="relative">
              <button
                className="absolute top-0 right-0"
                onClick={() => setIsModalOpen(false)}
              >
                <X />
              </button>
              <div className="py-4 w-full h-full grid sm:grid-cols-[40%_60%]">
                <div className="max-sm:hidden">
                  <TestimonialsCollectionCard />
                </div>
                <div className="w-full h-full">
                  <form className="px-6">
                    <div className="flex flex-col items-center">
                      <h2 className="text-3xl font-semibold">
                        Create a Project
                      </h2>
                      <p className="text-sm text-slate-500 text-center">
                        After the Project is created, it will generate a
                        dedicated page for collecting testimonials
                      </p>
                    </div>
                    <div className="py-2 flex flex-col gap-2">
                      <InputWithLabel
                        label="Project Name"
                        name="projectName"
                        type="text"
                        placeholder="Testimonials Collect"
                        required={true}
                      />

                      <fieldset className="flex flex-col">
                        <label className="text-xl font-medium">
                          Project Logo <span className="text-red-500">*</span>
                        </label>
                        <div className="flex justify-start items-center gap-2">
                          <div>
                            <div className="w-[60px] h-[60px] rounded-full border bg-gray-400"></div>
                            <Image
                              src={"/assets/images/user.jpg"}
                              width={60}
                              height={60}
                              alt="project logo"
                              className="rounded-full hidden"
                            />
                          </div>
                          <ImageUpload />
                        </div>
                      </fieldset>
                      <InputWithLabel
                        label="Title"
                        name="title"
                        placeholder="Hey what do you think of our product/ service"
                        required={true}
                        type="text"
                      />
                      <InputWithLabel
                        label="Custom Message"
                        name="customMessage"
                        placeholder="Your opinion matters! Please take a moment to share your experience with us."
                        required={true}
                        type="textarea"
                      />
                      <CustomQuestion />
                    </div>
                    <button className="rounded-xl sm:mt-4 w-full py-2 bg-blue-600 hover:bg-blue-700 text-xl text-white font-semibold">
                      Create Project
                    </button>
                  </form>
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
