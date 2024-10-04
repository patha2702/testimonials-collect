import prisma from "@/lib/db";
import { NextRequest } from "next/server";

export async function POST(req: NextRequest ) {
  const {data} = await req.json()
  const type = data.type
  if (type === "text") {
    try {
      await prisma.testimonial.create({
        data:{
          name: data.name,
          email: data.email,
          rating: data.rating,
          text: data.text,
          project:{
            connect:{
              id: data.collectionId
            }
          }
        },
      })
      return Response.json({
        message: "Testimonial created successfully"
      }, {
        status: 201
      })
    } catch (err: any) {
      return Response.json({
        message: "Failed to create testimonial"
      }, {
        status: 500
      })
    }
  } else {
    try {
      await prisma.testimonial.create({
        data:{
          name: data.name,
          email: data.email,
          rating: data.rating,
          videoUrl: data.video,
          project:{
            connect:{
              id: data.collectionId
            }
          }
        },
      })
      return Response.json({
        message: "Testimonial created successfully"
      }, {
        status: 201
      })
    } catch (err: any) {
      return Response.json({
        message: "Failed to create testimonial"
      }, {
        status: 500
      })
    }
  }
}
