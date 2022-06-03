import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          "connect-ui": ["@stacks/connect-ui/dist/components/connect-modal"],
        },
      },
    },
  },
});
