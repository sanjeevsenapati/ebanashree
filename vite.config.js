import { resolve } from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  base: './', // Relative base for subpath GitHub Pages deployment
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
      },
    },
  },
});
