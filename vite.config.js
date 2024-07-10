import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { fileURLToPath } from "node:url";
import { viteRequire } from "vite-require";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), viteRequire()],
  resolve: {
    alias: [
      {
        find: "@",
        replacement: fileURLToPath(new URL("/src", import.meta.url)),
      },
    ],
  },
});
