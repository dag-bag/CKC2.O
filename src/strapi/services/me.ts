import { SessionData, sessionOptions } from "@/libs/iron";
import { strapi } from "@/libs/strapi";
import { Purchase } from "@/types/Content";
import { getIronSession } from "iron-session";
import { cookies } from "next/headers";

async function getSession() {
  const session = await getIronSession<SessionData>(cookies(), sessionOptions);
  return session;
}

export { getSession };

const getProfile = async () => {
  const session = await getSession();
  const res = await strapi.findOne("users", session.user.id);
  return res;
};

const getTransactions = async () => {
  // const session = await getSession();
  // console.log(session);
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/user/tran`);
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
export { getProfile, getTransactions };
