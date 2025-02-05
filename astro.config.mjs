import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import relativeLinks from "astro-relative-links";
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: 'https://mogamihub.xyz',
  base: '/',
  integrations: [tailwind(), relativeLinks(), react()],
  output: "static",
});