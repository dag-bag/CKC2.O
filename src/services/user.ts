import { strapi } from "@/libs/strapi";
import { SessionData } from "@/libs/iron";
import axios from "axios";
interface UserSession {
  user: SessionData["user"];
  jwt: string;
}

const getUser = async (
  accessToken: string
): Promise<UserSession | undefined> => {
  try {
    const data = await strapi.authenticateProvider("google", accessToken);
    return data as UserSession;
  } catch (error) {
    console.log(error);
  }
};

const updateUser = async (data: any) => {
  const res = await axios.put(`/api/user`, data);
  console.log(res.data);
  return res.data;
};
const daleteUser = async (id: number) => {
  const res = await strapi.delete("users", id);
  return res.data;
};
export { getUser, updateUser, daleteUser };
