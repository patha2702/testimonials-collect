import Image from "next/image";
import prisma from "@/lib/db";
import { Pencil, Video } from "lucide-react";
import React from "react";
import Link from "next/link";
import CollectionHeader from "@/components/CollectionHeader";

const CollectionPage = async ({
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
      <div className="flex flex-col w-full p-2">
        <CollectionHeader
          name={collection?.name || ""}
          header={collection?.header || ""}
          customMessage={collection?.customMessage || ""}
          logoUrl={logoUrl}
          questions={collection?.questions}
        />
      </div>
      <div className="flex justify-center items-center max-sm:flex-col gap-4">
        <Link
          href={`/${collectionId}/video`}
          className="px-4 py-2 w-full rounded-lg  bg-blue-600 hover:bg-blue-700 flex justify-center items-center gap-2"
        >
          <Video className="text-white" />
          <span className="text-white text-xl font-medium">Send a Video</span>
        </Link>
        <Link
          href={`/${collectionId}/text`}
          className="px-4 py-2 w-full rounded-lg  bg-slate-800 hover:bg-slate-800 flex justify-center items-center gap-2"
        >
          <Pencil className="text-white" />
          <span className="text-white text-xl font-medium">Send in Text</span>
        </Link>
      </div>
    </div>
  );
};

export default CollectionPage;
