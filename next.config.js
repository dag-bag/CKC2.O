/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { hostname: "cdn.marvel.com" },
      { hostname: "cosmickids.club" },
      { hostname: "ckc-two.vercel.app" },
    ],
  },
};
module.exports = nextConfig;
