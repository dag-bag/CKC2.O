import { strapi } from "@/libs/strapi";
const getUser = async (accessToken: string) => {
  try {
    const { user, jwt } = await strapi.authenticateProvider(
      "google",
      "ya29.a0AfB_byAZi6nMmNzysqMJgm8t8UCoNsdVbhiGTYo1I-2P1ASe8gH9XLQigEkPe8a958_4HtcViNIBCQxBjpIMxh535mW606wkmTlCYbsEqsyEvqeN4bs8eJzDe79q8h_I_q_e70dsyn-e3Wc5i11j8sKPww0yi3pfIEYaCgYKAU4SARESFQHGX2Mi4CkTiGddJXKx6AYfqa747w0170"
    );
    return { user, jwt };
  } catch (error) {
    console.log(error);
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
