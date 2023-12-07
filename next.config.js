/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { hostname: "cdn.marvel.com" },
      { hostname: "cosmickids.club" },
    ],
  },
};
module.exports = nextConfig;
