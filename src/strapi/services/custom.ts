import { strapi } from "@/libs/strapi";
import axios from "axios";

const getCoins = async () => {
  const res = await axios.get("/api/user/coins");
  return res.data;
};

const createReward = async (data: any) => {
  const res = await strapi.create("user-achievements", data);
  return res.data;
};
const getUserRewards = async () => {
  try {
    const res = await axios.get("/api/user/reward");
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export { getCoins, getUserRewards, createReward };
