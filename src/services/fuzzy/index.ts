import { strapi } from "@/libs/strapi";

export const fuzzy = async (query: string) => {
  const res = await strapi.axios.get(
    `/api/fuzzy-search/search?query=${query}&populate[courses][thumbnail][populate][0]=city &populate[videos][thumbnail][populate][0]=city &populate[comics][thumbnail][populate][0]=city &populate[nacs][thumbnail][populate][0]=city &populate[lives][thumbnail][populate][0]=city`
  );
  return res.data;
};
