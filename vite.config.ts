/// <reference types="vitest/config" />
import { tanstackRouter } from "@tanstack/router-plugin/vite";
import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    tsconfigPaths(),
    tanstackRouter({
      target: "react",
      autoCodeSplitting: true,
      generatedRouteTree: "src/shared/presentation/router/routeTree.gen.ts",
      routesDirectory: "src/shared/presentation/routes",
    }),
    react(),
  ],
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: ["src/setupTests.ts"],
    include: ["./src/**/*.test.{ts,tsx}"],
  },
});
