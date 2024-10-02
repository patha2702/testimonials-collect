import { NextRequest } from "next/server";
import prisma from "@/lib/db";

export async function POST(req: NextRequest) {
  const {data} = await req.json()
  try {
    await prisma.testimonial.update({
      where: {
        id: data.testimonialId
      }, data: {
        loved: data.loved
      }
    })
    return Response.json({
      message: "Testimonial updated successfully"
    }, {
      status: 200
    })
  } catch (err: any) {
    return Response.json({
      message: "Failed, to update, please try again"
    }, {
      status: 500
    })
  }
}