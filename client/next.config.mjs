/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["localhost", "cdn.cosmicjs.com"],
    remotePatterns: [{ hostname: '"cdn.cosmicjs.com' }],
  },
};

export default nextConfig;
