import { strapi } from "@/libs/strapi";

export const fuzzy = async (query: string) => {
  const res = await strapi.axios.get(`/fuzzy-search/${query}`);
  return res.data;
};
