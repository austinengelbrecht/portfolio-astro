import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";
import vue from "@astrojs/vue";
import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), vue(), mdx()],
  svg: new URL("./src/assets/svg", import.meta.url).toString(),
});
