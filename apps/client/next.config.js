/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  distDir: "dist",
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "theunitedstates.io",
        port: "",
      },
    ],
  },
};
