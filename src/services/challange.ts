"use server";
import { strapi } from "@/libs/strapi";
import { CHALLANGE_REQ_ENTITY } from "@/strapi/constant";
import { getSession } from "@/strapi/services/me";

export const RequestChallange = async (data: any) => {
  const res = await strapi.create(CHALLANGE_REQ_ENTITY, {
    mediaUrl: data.file,
    user: data.id,
    status: "pending",
    challenge_id: data.challenge_id,
  });
  return res.data;
};
