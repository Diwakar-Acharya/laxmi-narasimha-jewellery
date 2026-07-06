import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // Base site URL for deployment
  site: 'https://diwakar-acharya.github.io',
  // Path prefix for GitHub Pages repository-based URL
  base: '/laxmi-narasimha-jewellery',
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
