import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://dantesportsacademy.com/',
  output: 'static',
  integrations: [
    sitemap({
      filter: (page) => !['/404', '/404/'].includes(new URL(page).pathname),
    }),
  ],
  vite: { plugins: [tailwindcss()] },
});
