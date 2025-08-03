import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    turbo: false, // 👈 disables Turbopack and uses stable Webpack instead
  },
};

export default nextConfig;
