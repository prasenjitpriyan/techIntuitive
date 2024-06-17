/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "thumbor.forbes.com/",
        pathname: "**",
      },
    ],
  },
};

export default nextConfig;
