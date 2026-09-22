import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  trailingSlash: false,
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.campos.africa" }],
        destination: "https://campos.africa/:path*",
        permanent: true,
      },
    ];
  },
  images: {
    qualities: [75, 95],
  },
};

export default nextConfig;
