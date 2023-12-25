import Strapi from "strapi-sdk-js";

const strapi = new Strapi({
  url: "https://ckc-strapi-production-33d2.up.railway.app",
  prefix: "/api",
  store: {
    key: "strapi_jwt",
    useLocalStorage: false,
    cookieOptions: { path: "/" },
  },

  axiosOptions: {},
});

strapi.axios.defaults.headers.common["Authorization"] =
  process.env.NEXT_PUBLIC_STRAPI_TOKEN || "";
export { strapi };
