import { cookies } from "next/headers";
import { strapi } from "@/libs/strapi";
import { NextRequest } from "next/server";
import { getIronSession } from "iron-session";
import { SessionData, sessionOptions } from "@/libs/iron";

export async function GET() {
  try {
    const session = await getIronSession<SessionData>(
      cookies(),
      sessionOptions
    );
    const res = await strapi.axios.get(
      "/virtual-purchase?id=" + session.user.id
    );
    console.log(res.data);
    return Response.json(res.data);
  } catch (error) {
    console.log(error);
  }
}
