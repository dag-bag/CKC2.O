import { SessionData, sessionOptions } from "@/libs/iron";
import { strapi } from "@/libs/strapi";
import { getIronSession } from "iron-session";
import { cookies } from "next/headers";
import { NextRequest } from "next/server";

export async function GET() {
  const session = await getIronSession<SessionData>(cookies(), sessionOptions);
  const res = await strapi.find("user-achievements", {
    filters: {
      user: session.user.id,
    },
  });
  return Response.json(res.data);
}
