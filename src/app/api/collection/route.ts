import prisma from "@/lib/db";
import { convertProjectNameToUrlEndpoint } from "@/lib/helper";
import { NextRequest } from "next/server";
import { getUserSession } from "@/lib/session";
import {  QuestionType } from "@/schemas";

export async function POST(req: NextRequest, res: Response) {
  try {
    const {id} = await getUserSession()
  const {data} = await req.json()
  const questions: QuestionType = data.questions
  const urlEndpoint = convertProjectNameToUrlEndpoint(data.name);
  const liveUrl = `/${urlEndpoint}`
  const logoUrl = `${id}/${data.logo}`
  const project = await prisma.project.create({
    data: {
      name: data.name,
      header: data.header,
      customMessage: data.customMessage,
      liveUrl: liveUrl,
      logo: logoUrl,
      questions: {
        create: Object.entries(questions).map(([key, value]) => ({
          question: value
        }))
      },
      user: {
        connect: {
          id: id
        }
      },
    },
    include: {
      questions: true,
    }
  })
  return new Response(JSON.stringify(project), {
    status: 201,
    headers: {"Content-Type": "application/json"}
  })
  }catch (error) {
    console.error('Error creating project:', error);
    return new Response(JSON.stringify({ error: 'Failed to create project' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
  
}

export async function DELETE(req: NextRequest) {
  const { id } = await req.json()
  console.log(id)
  try {
    await prisma.project.delete({
      where: {
        id: id
      },
      include: {
        questions: true,
        testimonials: true
      }
    })
    return Response.json({
      message: "Collection deleted successfully "
    })
  } catch (err: any) {
    console.error(err)
    return Response.json({
      message: "Failed to delete collection. Please try again"
    }, {
     status: 500
    })
  }
}

