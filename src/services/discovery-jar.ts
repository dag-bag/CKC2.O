import { strapi } from "@/libs/strapi";
import { DISCOVERY_JARS_QUESTION } from "@/strapi/constant";

const CreateQuestion = async (data: any) => {
  const res = await strapi.create(DISCOVERY_JARS_QUESTION, data);
  console.log(res);
  return res.data;
};

export { CreateQuestion };
