import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Campos Africa",
    short_name: "Campos",
    description:
      "The all-in-one academic and campus app for African university students.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#2B2F53",
    icons: [
      {
        src: "/icon.png",
        sizes: "512x512",
        type: "image/png",
      },
      {
        src: "/apple-icon.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
