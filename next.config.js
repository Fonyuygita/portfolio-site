/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      domains: ["images.pexels.com","cdn.sanity.io"]
    },
    eslint:{
      ignoreDuringBuilds:true,
    }
  };
  
  module.exports = nextConfig;