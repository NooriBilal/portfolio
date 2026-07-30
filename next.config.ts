import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Root explizit auf dieses Projekt pinnen — sonst rät Next wegen eines
  // streunenden package-lock.json im Home-Verzeichnis den falschen Root.
  turbopack: {
    root: process.cwd(),
  },
};

export default nextConfig;
