import { NextRequest } from "next/server";
import { cookies } from "next/headers";
import { getIronSession } from "iron-session";
import { sessionOptions } from "@/libs/iron";
import { SessionData } from "@/libs/iron";
import { strapi } from "@/libs/strapi";

export async function PUT(request: NextRequest) {
  const session = await getIronSession<SessionData>(cookies(), sessionOptions);
  const data = (await request.json()) as any;
  console.log("🚀 ~ file: route.ts:11 ~ data ~ data:", data);
  const user = await updateUser(data, session.user.id);
  // if (data.avatar) {
  //   session.user.avatar = data.avatar;
  //   session.save();
  // }

  return Response.json(user);
}

const updateUser = async (data: any, id: number) => {
  const res = await strapi.axios.put(`/users/${id}`, data);
  return res.data;
};
