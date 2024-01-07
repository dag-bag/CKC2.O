import { NextRequest } from "next/server";
import { cookies } from "next/headers";
import { getIronSession } from "iron-session";
import { sessionOptions } from "@/libs/iron";
import { SessionData } from "@/libs/iron";
import { strapi } from "@/libs/strapi";
import { testMail } from "@/libs/aws-ses";

export async function POST(request: NextRequest) {
  const data = await testMail("lWQpE@example.com");
  return Response.json(data);
}
