import { strapi } from "@/libs/strapi";
import { DISCOVERY_JARS_QUESTION_ENTITY } from "@/strapi/constant";
import { getSession } from "@/strapi/services/me";

const CreateQuestion = async (data: any) => {
  const res = await strapi.create(DISCOVERY_JARS_QUESTION_ENTITY, data);
  return res.data;
};

export { CreateQuestion };
