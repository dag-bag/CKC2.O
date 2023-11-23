import { strapi } from "@/libs/strapi";
import { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  const id = req.nextUrl.searchParams.get("id");
  const res = await strapi.find("purchases", {
    filters: {
      user: id,
    },
  });
  return Response.json(res.data);
}
