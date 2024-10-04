import Widget from "@/components/wall-of-fame-widgets/widget";
import prisma from "@/lib/db";
import React from "react";

const WallOfFame = async ({ params }: { params: { collectionId: string } }) => {
  const collectionId = params.collectionId || "";
  const testimonials = await prisma.testimonial.findMany({
    where: {
      projectId: collectionId,
      loved: true,
    },
  });
  return <Widget testimonials={testimonials} />;
};

export default WallOfFame;
