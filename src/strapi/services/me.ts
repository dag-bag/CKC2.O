import { SessionData, sessionOptions } from "@/libs/iron";
import { strapi } from "@/libs/strapi";
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

export { getProfile };
