import { NextRequest } from "next/server";
import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3"
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import { getUserSession } from "@/lib/session";

const client = new S3Client({
  region: process.env.S3_REGION || "",
  credentials: {
    accessKeyId: process.env.S3_ACCESS_KEY || "",
    secretAccessKey: process.env.S3_SECRET_KEY || ""
  }
})

export async function GET(req: NextRequest) {
  const {id} = await getUserSession()
  const {searchParams} = req.nextUrl
  const file = searchParams.get("file")
  if (!file) {
    return Response.json({
      error: "File query parameter is required"
    }, {
      status :400
    })
  }
  const command = new PutObjectCommand({
    Bucket: process.env.S3_BUCKET_NAME,
    Key: `${id}/${file}`
  })
  const url = await getSignedUrl(client, command, {expiresIn: 180})
  return Response.json({
    presignedUrl: url
  })
}