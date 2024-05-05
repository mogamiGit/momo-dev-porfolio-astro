import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import relativeLinks from "astro-relative-links";

import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
  site: 'https://mogamihub.xyz',
  base: './',
  integrations: [tailwind(), relativeLinks()],
  output: "server",
  adapter: cloudflare()
});