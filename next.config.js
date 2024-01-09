/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { hostname: "cdn.marvel.com" },
      { hostname: "cosmickids.club" },
      { hostname: "cdn.dribbble.com" },
      { hostname: "ckc-two.vercel.app" },
      { hostname: "s3.us-east-1.amazonaws.com" },
      { hostname: "ckc-strapi-production-33d2.up.railway.app" },
    ],
  },
};
module.exports = nextConfig;
