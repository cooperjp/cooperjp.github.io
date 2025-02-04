import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://cooperjp.github.io',
  base: '/',
  outDir: './dist',
  build: {
    assets: 'assets'
  }
});