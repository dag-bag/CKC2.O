import { strapi } from "@/libs/strapi";
const getUser = async (accessToken: string) => {
  try {
    const { user, jwt } = await strapi.authenticateProvider(
      "google",
      accessToken
    );
    return { user, jwt };
  } catch (error) {
    console.log(error);
    return {};
  }
};

const updateUser = async (data: any) => {
  const res = await strapi.update("users", 1, data);
  return res.data;
};
const daleteUser = async (id: number) => {
  const res = await strapi.delete("users", id);
  return res.data;
};
export { getUser, updateUser, daleteUser };
