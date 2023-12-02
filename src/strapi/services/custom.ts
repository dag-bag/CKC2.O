import { strapi } from "@/libs/strapi";
import { getSession } from "./me";
import axios from "axios";

const getCoins = async () => {
  const res = await axios.get("/api/user/coins");
  return res.data;
};

export { getCoins };
