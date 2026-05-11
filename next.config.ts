import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "fotogenicofscotland.co.uk",
      },
    ],
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
