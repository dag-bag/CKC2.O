import { strapi } from "@/libs/strapi";
import axios from "axios";
import { getSession } from "./me";

const getCoins = async () => {
  const res = await axios.get("/api/user/coins");
  return res.data;
};

const createReward = async (data: any) => {
  const res = await strapi.create("achivements", data);
  return res.data;
};
const getUserRewards = async (id: number) => {
  try {
    const res = await strapi.find("achivements", {
      filters: {
        user: id,
      },
    });
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export { getCoins, getUserRewards, createReward };
