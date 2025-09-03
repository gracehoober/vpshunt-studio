import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./src/setupTests.js",
    // Mock CSS imports
    alias: {
      "^.+\\.(css|scss)$": "./__mocks__/styleMock.js",
    },
  },
} as import("vitest/config").ViteUserConfig);
