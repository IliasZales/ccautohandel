// @ts-check
import { defineConfig, passthroughImageService } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://cc-autozentrum.de',
  prefetch: true,
  vite: {
    plugins: [tailwindcss()]
  },
  image: {
    service: passthroughImageService()
  },

  integrations: [mdx(), sitemap()]
});
