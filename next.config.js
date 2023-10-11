/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      domains: ["images.pexels.com","cdn.sanity.io", "www.pexels.com"]
    },
    eslint:{
      ignoreDuringBuilds:true,
    }
  };
  
  module.exports = nextConfig;