import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://cooperjp.github.io',  // Replace with your GitHub username
  base: '/cooperjp.github.io',  // Replace with your repository name
  outDir: './dist',
  build: {
    assets: 'assets'
  }
});