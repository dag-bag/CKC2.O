import { strapi } from "@/libs/strapi";
import { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  const id = req.nextUrl.searchParams.get("id");
  const type = req.nextUrl.searchParams.get("type");
  const res = await strapi.find("purchases", {
    filters: {
      user: id,
      type,
    },
  });
  return Response.json(res.data);
}
