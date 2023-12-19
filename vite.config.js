import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "node:path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@components": path.resolve(__dirname, "./src/components"),
      "@styles": path.resolve(__dirname, "./src/styles"),
      "@icons": path.resolve(__dirname, "./src/assets/images/svg"),
    },
  },
  css: {
    modules: {
      generateScopedName: `[folder]_[local]__[hash:base64:5]`,
    },
  },
});
