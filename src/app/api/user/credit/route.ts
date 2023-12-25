import { cookies } from "next/headers";
import { NextRequest } from "next/server";
import { getIronSession } from "iron-session";
import { SessionData, sessionOptions } from "@/libs/iron";
import { strapi } from "@/libs/strapi";

export async function POST(req: NextRequest) {
  try {
    const session = await getIronSession<SessionData>(
      cookies(),
      sessionOptions
    );
    const data = await req.json();
    const res = await strapi.axios.post("/credit", {
      userId: session.user.id,
      coins: parseInt(data.coins),
      label: "Credit Purchased",
      type: "credits",
    });
    console.log(res.data);
    return Response.json(res.data);
  } catch (error) {
    console.log(error);
  }
}

export async function GET() {
  const session = await getIronSession<SessionData>(cookies(), sessionOptions);
  const res = await strapi.axios.get("/credit?id=" + session.user.id);
  return Response.json(res.data);
}
