/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  experimental: {
    images: {
      unoptimized: true,
    },
  },
};

module.exports = nextConfig;
