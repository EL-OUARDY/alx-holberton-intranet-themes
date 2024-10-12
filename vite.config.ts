import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    rollupOptions: {
      input: {
        main: "index.html",
      },
      output: {
        entryFileNames: "popup/[name].js",
        chunkFileNames: "popup/[name].js",
        assetFileNames: "popup/[name].[ext]",
      },
    },
  },
});
