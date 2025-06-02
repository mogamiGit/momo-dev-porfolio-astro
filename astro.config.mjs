import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import relativeLinks from "astro-relative-links";
import cloudflare from "@astrojs/cloudflare";
import react from "@astrojs/react";

import vercel from "@astrojs/vercel";

// https://astro.build/config
export default defineConfig({
  site: 'https://mogamihub.xyz',
  base: './',
  integrations: [tailwind(), relativeLinks(), react()],
  output: "server",
  adapter: vercel()
});