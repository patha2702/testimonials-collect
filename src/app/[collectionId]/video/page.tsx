import prisma from "@/lib/db";
import React from "react";
import CollectionHeader from "@/components/CollectionHeader";
import VideoTestimonialForm from "@/components/form/VideoTestimonialForm";

const VideoTestimonial = async ({
  params,
}: {
  params: { collectionId: string };
}) => {
  const { collectionId } = params;
  const collection = await prisma.project.findFirst({
    where: {
      liveUrl: `/${collectionId}`,
    },
    include: {
      questions: true,
    },
  });
  const logoUrl = `${process.env.CDN_DOMAIN_NAME}/${collection?.logo}`;
  return (
    <div className="max-w-3xl mx-auto h-full rounded-md p-2 mt-2">
      <div className="flex flex-col w-full gap-2 p-2">
        <CollectionHeader
          name={collection?.name || ""}
          header={collection?.header || ""}
          customMessage={collection?.customMessage || ""}
          logoUrl={logoUrl}
          questions={collection?.questions}
        />
        <VideoTestimonialForm
          collectionName={collectionId}
          collectionId={collection?.id || ""}
        />
      </div>
    </div>
  );
};

export default VideoTestimonial;
