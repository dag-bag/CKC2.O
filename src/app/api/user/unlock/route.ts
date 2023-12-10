import { cookies } from "next/headers";
import { strapi } from "@/libs/strapi";
import { NextRequest } from "next/server";
import { getIronSession } from "iron-session";
import { SessionData, sessionOptions } from "@/libs/iron";

export async function POST(req: NextRequest) {
  const session = await getIronSession<SessionData>(cookies(), sessionOptions);
  const data = await req.json();
  const res = await strapi.axios.post("/coins", {
    userId: session.user.id,
    coins: data.coins,
    content_id: data.content_id,
    label: data.label,
    type: data.type,
  });
  return Response.json(res.data);
}
