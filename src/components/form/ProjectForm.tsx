import React from "react";
import ImageUpload from "./ImageUpload";
import Image from "next/image";
import Label from "./Label";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { projectFormSchema, ProjectFormValues } from "@/schemas";
import prisma from "@/lib/db";
import { convertProjectNameToUrlEndpoint } from "@/lib/helper";
import { getUserSession } from "@/lib/session";
import TestimonialsCollectionCard from "../TestimonialsCollectionCard";
import { LoaderCircle } from "lucide-react";
import { useRouter } from "next/navigation";

const ProjectForm = () => {
  const router = useRouter();
  const { register, handleSubmit, control, formState, watch } =
    useForm<ProjectFormValues>({
      resolver: zodResolver(projectFormSchema),
    });

  const watchedFields = watch();

  const handleProjectForm = async (data: ProjectFormValues) => {
    try {
      const filename = data.logo.name;

      // Fetch the presigned URL for file upload
      const res = await fetch(`/api/presigned-url?file=${filename}`);

      if (!res.ok) {
        throw new Error(
          `Failed to get presigned URL: ${res.status} ${res.statusText}`
        );
      }

      const { presignedUrl } = (await res.json()) as { presignedUrl: string };

      // Upload the file to the presigned URL
      const fileUpload = await fetch(presignedUrl, {
        method: "PUT",
        body: data.logo,
      });

      if (!fileUpload.ok) {
        throw new Error(
          `Failed to upload the file: ${fileUpload.status} ${fileUpload.statusText}`
        );
      }

      // If the file upload is successful and `id` exists, proceed to post data to `/api/project`
      if (fileUpload.ok) {
        const projectRes = await fetch("/api/collection", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            data: {
              name: data.name,
              header: data.header,
              customMessage: data.customMessage,
              logo: filename,
              questions: data.questions,
            },
          }),
        });

        if (!projectRes.ok) {
          throw new Error(
            `Failed to create project: ${projectRes.status} ${projectRes.statusText}`
          );
        }

        const projectData = await projectRes.json();
        router.push(`/collections/${projectData.id}`);
      }
    } catch (err: any) {
      console.error(
        "Error while uploading logo or creating project:",
        err.message
      );
    }
  };
  return (
    <div className="py-4 w-full h-screen overflow-y-scroll scrollbar-hide grid sm:grid-cols-[60%_40%]">
      <form className="px-6" onSubmit={handleSubmit(handleProjectForm)}>
        <div className="flex flex-col items-center">
          <h2 className="text-3xl font-semibold">Create a Collection</h2>
          <p className="text-sm text-slate-500 text-center">
            After the Collection is created, it will generate a dedicated page
            for collecting testimonials
          </p>
        </div>
        <div className="py-2 flex flex-col gap-2">
          <fieldset className="flex flex-col">
            <Label label={"Collection Name"} required={true} />
            <input
              type={"text"}
              placeholder={"Testimonials-collect"}
              {...register("name")}
              className="p-2 rounded-lg border border-blue-600 focus:ring-blue-600 focus:ring-2 focus:outline-none"
            />
          </fieldset>

          <fieldset className="flex flex-col">
            <label className="text-xl font-medium">
              Collection Logo <span className="text-red-500">*</span>
            </label>
            <div className="flex justify-start items-center gap-2">
              <Controller
                name="logo"
                control={control}
                render={({ field }) => (
                  <ImageUpload onFileSelect={(file) => field.onChange(file)} />
                )}
              />
            </div>
          </fieldset>
          <fieldset className="flex flex-col">
            <Label label={"Header"} required={true} />
            <input
              type={"text"}
              placeholder={"Hey, can you review Testimonials-collect"}
              {...register("header")}
              className="p-2 rounded-lg border border-blue-600 focus:ring-blue-600 focus:ring-2 focus:outline-none"
            />
          </fieldset>

          <fieldset className="flex flex-col">
            <Label label={"Custom Message"} required={true} />
            <input
              type={"text"}
              placeholder={"Custom message for your audience"}
              {...register("customMessage")}
              className="p-2 rounded-lg border border-blue-600 focus:ring-blue-600 focus:ring-2 focus:outline-none"
            />
          </fieldset>
          <fieldset className="flex flex-col">
            <Label label="Questions" required={false} />
            <div className="flex flex-col gap-2">
              <input
                type="text"
                {...register("questions.q1")}
                placeholder="Question 1"
                className="p-2 rounded-lg border border-blue-600 focus:ring-blue-600 focus:ring-2 focus:outline-none"
              />
              <input
                type="text"
                {...register("questions.q2")}
                placeholder="Question 2"
                className="p-2 rounded-lg border border-blue-600 focus:ring-blue-600 focus:ring-2 focus:outline-none"
              />
              <input
                type="text"
                {...register("questions.q3")}
                placeholder="Question 3"
                className="p-2 rounded-lg border border-blue-600 focus:ring-blue-600 focus:ring-2 focus:outline-none"
              />
            </div>
          </fieldset>
        </div>
        <button
          className="rounded-xl sm:mt-4 w-full py-2 bg-blue-600 hover:bg-blue-700 text-xl text-white font-semibold"
          type="submit"
        >
          {formState.isSubmitting ? (
            <LoaderCircle className="animate-spin mx-auto" />
          ) : (
            "Create Collection"
          )}
        </button>
      </form>
      <div className="max-sm:hidden">
        <TestimonialsCollectionCard
          customMessage={
            watchedFields.customMessage || "Custom message for your audience"
          }
          questions={watchedFields.questions}
          header={watchedFields.header || "Hey can you review my site"}
          name={watchedFields.name || "Testimonials collect"}
          logo={{ url: "/assets/images/logo.png", height: 60, width: 60 }}
        />
      </div>
    </div>
  );
};

export default ProjectForm;
