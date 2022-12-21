import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  envDir: "./config/env",
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        index: resolve(__dirname, "index.html"),
        config: resolve(__dirname, "config/config.ts"),
      },
      output: {
        entryFileNames: ({ name }) => {
          if (name === "config") {
            return "[name].js";
          }
          return "assets/[name]-[hash].js";
        },
        assetFileNames: "assets/[name]-[hash].[ext]",
      },
    },
  },
});
