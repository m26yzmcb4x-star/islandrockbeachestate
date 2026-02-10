import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // output: 'export', // Disabled to allow API routes on Vercel
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
