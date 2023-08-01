/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "lh3.googleusercontent.com",
      "avatars.githubusercontent.com",
      "graph.facebook.com",
      "res.cloudinary.com",
    ],
  },
};

module.exports = nextConfig;
