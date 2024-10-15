import prisma from "@/lib/db";
import { NextRequest } from "next/server";


export async function PUT(req: NextRequest) {
  const {id, time} = await req.json()
  try {
    prisma.project.update({
      where: {
        id: id
      },
      data: {
        watchTime: {
          increment: time
        }
      }
    })
    return Response.json({
      message: "Successfully updated watch time"
    })
  } catch (err: any) {
    return Response.json({
      message: "Unable to update watch time"
    })
  }
}