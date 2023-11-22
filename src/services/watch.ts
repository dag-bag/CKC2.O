import { strapi } from "@/libs/strapi";

const updateWatchRecord = async (data: any, id: string) => {
  const res = await strapi.update("watcheds", id, data);
  return res.data;
};

const createWatchRecord = async (data: any) => {
  const res = await strapi.create("watcheds", data);
  return res.data;
};

export { createWatchRecord, updateWatchRecord };
