import prisma from "@/lib/db";
import React from "react";
import CollectionHeader from "@/components/CollectionHeader";
import TextTestimonialForm from "@/components/form/TextTestimonialForm";

const TextTestimonial = async ({
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
      <div className="flex flex-col gap-2 w-full p-2">
        <CollectionHeader
          name={collection?.name || ""}
          header={collection?.header || ""}
          customMessage={collection?.customMessage || ""}
          logoUrl={logoUrl}
          questions={collection?.questions}
        />
        <TextTestimonialForm
          collectionName={collectionId}
          collectionId={collection?.id || ""}
        />
      </div>
    </div>
  );
};

export default TextTestimonial;
