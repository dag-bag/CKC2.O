"use server";
import { strapi } from "@/libs/strapi";
import { CHALLANGE_REQ_ENTITY } from "@/strapi/constant";
import { getSession } from "@/strapi/services/me";

export const RequestChallange = async (f: FormData) => {
  const file = f.get("file") as File | null;
  if (file) {
    const session = await getSession();
    const res = await strapi.create(CHALLANGE_REQ_ENTITY, {
      mediaUrl: file.name,
      user_id: session.user.id,
      status: "pending",
    });
    console.log(res);
    return res.data;
  }

  return {};
};
