// https://astro.build/config
import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import icon from "astro-icon";
import rehypePluginImageNativeLazyLoading from "rehype-plugin-image-native-lazy-loading";

import { remarkReadingTime } from "./src/utils/all";

export default defineConfig({
  site: "https://stablo-astro.web3templates.com",
  markdown: {
    remarkPlugins: [remarkReadingTime],
    rehypePlugins: [rehypePluginImageNativeLazyLoading],
    extendDefaultPlugins: true,
  },
  integrations: [tailwind(), mdx(), sitemap(), icon()],
});