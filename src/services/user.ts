import { strapi } from "@/libs/strapi";
const getUser = async (accessToken: string) => {
  try {
    const { user, jwt } = await strapi.authenticateProvider(
      "google",
      accessToken
    );
    console.log(accessToken);
    return { user, jwt };
  } catch (error) {
    throw new Error("Something Went wrong");
  }
};

export { getUser };
