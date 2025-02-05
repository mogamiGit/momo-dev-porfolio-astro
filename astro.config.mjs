import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import relativeLinks from "astro-relative-links";
import cloudflare from "@astrojs/cloudflare";
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: 'https://mogamihub.xyz',
  base: './',
  integrations: [tailwind(), relativeLinks(), react()],
  output: "server",
  adapter: cloudflare()
});