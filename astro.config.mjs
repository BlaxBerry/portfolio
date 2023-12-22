import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  site: "https://blaxberry.github.io",
  base: "/portfolio",

  prefetch: true,
  integrations: [tailwind()],
});
