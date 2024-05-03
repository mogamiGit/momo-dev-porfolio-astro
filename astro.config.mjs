import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

import relativeLinks from "astro-relative-links";

// https://astro.build/config
export default defineConfig({
  site: 'https://mogamihub.xyz',
  base: './',
  integrations: [tailwind(), relativeLinks()]
});
