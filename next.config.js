/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { hostname: "cdn.marvel.com" },
      { hostname: "cosmickids.club" },
      { hostname: "ckc-two.vercel.app" },
      { hostname: "cdn.dribbble.com" },
      { hostname: "ckc-strapi-production-33d2.up.railway.app" },
    ],
  },
};
module.exports = nextConfig;
