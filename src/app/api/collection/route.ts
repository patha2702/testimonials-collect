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
      metric: {
        create: {
          totalTestimonials: 0,
          avgRating: 0,
          engagementTime: 0
        }
      }
    },
    include: {
      questions: true,
      metric: true
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