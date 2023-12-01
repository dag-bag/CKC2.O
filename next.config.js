/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["cdn.marvel.com", "cosmickids.club"],
  },
  experimental: {
    serverActions: true,
  },
};
module.exports = nextConfig;
