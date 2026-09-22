import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/", "/_next/"],
    },
    host: "campos.africa",
    sitemap: "https://campos.africa/sitemap.xml",
  };
}
