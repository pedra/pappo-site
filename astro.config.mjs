import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import netlify from "@astrojs/netlify/functions";
import compress from "astro-compress";

import sw from "astro-sw";

// https://astro.build/config
export default defineConfig({
  site: 'https://example.com',
  integrations: [mdx(), sitemap(), compress(), sw()],
//   output: "server",
//   adapter: netlify()
});