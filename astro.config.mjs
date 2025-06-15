// @ts-check
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  site: "https://veronikadev.netlify.app/",
  compressHTML: true,
  build: {
    assets: "assets",
    inlineStylesheets: "auto",
  },
  vite: {
    build: {
      rollupOptions: {
        output: {
          assetFileNames: "assets/[name].[hash][extname]",
          chunkFileNames: "assets/[name].[hash].js",
          entryFileNames: "assets/[name].[hash].js",
        },
      },
    },
  },
});
