import { SessionData, sessionOptions } from "@/libs/iron";
import { strapi } from "@/libs/strapi";
import { Purchase } from "@/types/Content";
import { getIronSession } from "iron-session";
import { cookies } from "next/headers";

async function getSession() {
  const session = await getIronSession<SessionData>(cookies(), sessionOptions);

  const currentTime = Math.floor(Date.now() / 1000);
  const premiumStatus =
    session.user?.premium === null
      ? "inactive"
      : session.user?.premium > currentTime
        ? "active"
        : "expired";
  return {
    ...session,
    user: {
      ...session.user,
      premiumStatus,
    },
  };
}

export { getSession };

const getProfile = async () => {
  const session = await getSession();
  const res = await strapi.findOne("users", session.user.id);
  return res;
};

const getTransactions = async (type: string) => {
  const session = await getSession();
  // console.log(session);
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_URL}/api/user/tran?id=${session.user.id}&type=${type}`
    );
    const data = await res.json();
    // const res = await strapi.find("purchases", {
    //   filters: {
    //     user: 3,
    //   },
    // });

    // return res.data as Purchase[];
    return data as Purchase[];
  } catch (error) {
    console.log(error);
  }
};

// globalSession.js
const getMyPurchases = async () => {
  const session = await getSession();
  const res = await strapi.axios.get(`/mypurchase/${session.user.id}`);
  return res.data;
};

export { getProfile, getTransactions, getMyPurchases };
