import { SessionData, sessionOptions } from "@/libs/iron";
import { strapi } from "@/libs/strapi";
import { getProfile } from "@/strapi/services/me";
import { getIronSession } from "iron-session";
import { cookies } from "next/headers";
import { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  const session = await getIronSession<SessionData>(cookies(), sessionOptions);
  const data = await req.json();
  const res = await strapi.axios.post("/coins", {
    userId: session.user.id,
    coins: data.coins,
    content_id: data.content_id,
    label: data.label,
  });
  return Response.json(res.data);
}
