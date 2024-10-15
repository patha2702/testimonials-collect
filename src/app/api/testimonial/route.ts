import prisma from "@/lib/db";
import { NextApiResponse } from "next";
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

export async function GET(req: NextRequest, res: NextApiResponse) {
  // res.setHeader('Access-Control-Allow-Origin', '*');
  // res.setHeader('Access-Control-Allow-Methods', 'GET');
  const collectionId = req.nextUrl.searchParams.get("collection-id")
  const loved = req.nextUrl.searchParams.get("loved")
  console.log(loved)
  const isLoved = loved === "true"
  if (!collectionId) {
    return Response.json({
      message: "Collection ID needed to fetch testimonials"
    })
  }
  try {
    const tesimonials = await prisma.testimonial.findMany({
      where: {
        projectId: collectionId,
        loved: isLoved
      }
    })
    return Response.json({
      testimonials: tesimonials
    })
  } catch (err: any) {
    return Response.json({
      message: "Failed to fetch testimonials"
    }, {
      status: 500
    })
  }
}


export async function DELETE(req: NextRequest) {
  const { id } = await req.json()
  try {
    await prisma.testimonial.delete({
      where: {
        id: id
      }
    })
    return Response.json({
      message: "Testimonial deleted successfully "
    })
  } catch (err: any) {
    console.error(err)
    return Response.json({
      message: "Failed to delete testimonial. Please try again"
    }, {
     status: 500
    })
  }
}