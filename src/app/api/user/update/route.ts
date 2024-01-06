import { cookies } from "next/headers";
import { NextRequest } from "next/server";
import { getIronSession } from "iron-session";
import { SessionData, sessionOptions } from "@/libs/iron";
import { strapi } from "@/libs/strapi";

export async function POST(req: NextRequest) {
  const session = await getIronSession<SessionData>(cookies(), sessionOptions);
  const data = await req.json();
  const res = await strapi.axios.post("/buypremium", {
    plan: data.plan,
    userId: session.user.id,
    title: data.title,
    days: parseInt(data.days),
    type: data.type,
    credits: data.credits,
  });
  session.user.premium = res.data.end_stamp;
  session.user.type = data.type;
  await session.save();
  // update session there session.user.premium = res.data.end_stamp
  console.log(res.data);
  return Response.json(res.data);
}
