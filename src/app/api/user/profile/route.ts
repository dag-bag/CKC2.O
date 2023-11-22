import { getProfile } from "@/strapi/services/me";
import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const data = await getProfile();
  console.log(data);

  return Response.json(data);
}
