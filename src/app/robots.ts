import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/account/", "/api/"], // Prevent indexing of private routes
    },
    sitemap: "https://campos.africa/sitemap.xml",
  };
}
