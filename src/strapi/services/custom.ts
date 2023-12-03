import { strapi } from "@/libs/strapi";
import { getSession } from "./me";
import axios from "axios";

const getCoins = async () => {
  const res = await axios.get("/api/user/coins");
  return res.data;
};

const createReward = async () => {
  // const res = await strapi.
};

export { getCoins };
