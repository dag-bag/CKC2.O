import { strapi } from "@/libs/strapi";
import { getSession } from "./me";
import axios from "axios";
const getCoins = async () => {
  const session = await getSession();
  const res = await strapi.axios.get("/coins?id=" + session.user.id);
  return res.data;
};

export { getCoins };
