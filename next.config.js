/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
      },
      {
        protocol: 'https',
        hostname: 'media.dev.to',
      },
      {
        protocol: 'https',
        hostname: 'i.ibb.co', // <-- this is what you were missing
      }
    ],
  },
};

module.exports = nextConfig;
