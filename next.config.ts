import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // The remotePatterns is used to whitelist the domains we trust and we need to fetch resources from like the cdn from sanity io
    // So that the images are optimized and we do not exhaust our app with untrustworthy sources of info like the images
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
      },
    ],
  },
};

export default nextConfig;
