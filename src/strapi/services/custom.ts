import { strapi } from "@/libs/strapi";
import axios from "axios";
import { getSession } from "./me";

const getCoins = async () => {
  const res = await axios.get("/api/user/coins");
  return res.data;
  console.log(res.data)
};
const getCredits = async () => {
  const res = await axios.get("/api/user/credit");
  return res.data;
};

const createReward = async (data: any) => {
  try {
    const res = await strapi.create("achivements", data);
    return res.data;
  } catch (error) {
    console.error(error);
  }
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
const c_user_reward = async (id: number) => {
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
const getRecentWatched = async (id: number) => {
  try {
    const res = await strapi.axios.get("/recent-watched?id=" + id);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

const getLeaderBoardData = async () => {
  try {
    const res = await strapi.axios.get("/leaderboard");
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
const userSuscription = async (data: any) => {
  try {
    const res = await strapi.find("subscriptions", {
      filters: {
        user_id: data.id,
      },
      sort: "created_at",
    });
    return res.data;
  } catch (error) {
    console.error(error);
  }
};

const buyCredit = async (data: any) => {
  try {
    const res = await axios.post("/api/user/credit", { coins: data });
    return res.data;
  } catch (error) {
    console.error(error);
  }
};
const promoCode = async (promo: string) => {
  const res = await strapi.find("promocodes", {
    filters: {
      promocode: promo,
    },

    populate: {
      users: {
        select: ["id", "avatar"],
      },
    },
  });
  return res.data;
};
const virtualPurchase = async () => {
  try {
    const res = await axios.get("/api/user/assets");
    return res.data;
  } catch (error) {
    console.error(error);
  }
};
export {
  getCoins,
  getUserRewards,
  createReward,
  getRecentWatched,
  c_user_reward,
  getLeaderBoardData,
  userSuscription,
  buyCredit,
  getCredits,
  promoCode,
  virtualPurchase,
};
