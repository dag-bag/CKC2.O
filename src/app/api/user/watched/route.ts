import { cookies } from "next/headers";
import { strapi } from "@/libs/strapi";
import { NextRequest } from "next/server";
import { getIronSession } from "iron-session";
import { SessionData, sessionOptions } from "@/libs/iron";
import { FcDeleteDatabase } from "react-icons/fc";

export async function PUT(req: NextRequest) {
  try {
    const data = (await req.json()) as any;
    const res = await strapi.update("watcheds", data.id, {
      watch_progress: data.watch_progress,
    });
    console.log(res);
    return Response.json(res);
  } catch (error) {
    console.log(error);
    return Error("Something went wrong");
  }
}
export async function POST(req: NextRequest) {
  const data = (await req.json()) as any;
  const res = await strapi.create("watcheds", {
    user_id: "3",
    content_id: data.contentId,
    watched_date: new Date().toISOString(),
    type: data.contentType,
    watch_progress: 0,
  });
  return Response.json(res.data);
}
