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
      }
    ],
  },
};

module.exports = nextConfig;


