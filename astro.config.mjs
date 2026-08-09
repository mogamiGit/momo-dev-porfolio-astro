import { defineConfig } from 'astro/config';
import relativeLinks from "astro-relative-links";
import react from "@astrojs/react";
import vercel from "@astrojs/vercel";

// https://astro.build/config
export default defineConfig({
  site: 'https://mogamihub.xyz',
  base: './',
  integrations: [relativeLinks(), react()],
  output: "server",
  adapter: vercel()
});