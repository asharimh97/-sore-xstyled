/// <reference types="vitest" />

import { defineConfig } from "vite";
import dts from "vite-plugin-dts";
import { peerDependencies, name } from "./package.json";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, "./src/index.ts"), // Specifies the entry point for building the library.
      name, // Sets the name of the generated library.
      fileName: (format) => `index.${format}.js`, // Generates the output file name based on the format.
      formats: ["umd", "cjs", "es"], // Specifies the output formats (CommonJS and ES modules).
    },
    rollupOptions: {
      external: [...Object.keys(peerDependencies)], // Defines external dependencies for Rollup bundling.
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
        interop: "compat",
      },
    },
    sourcemap: true, // Generates source maps for debugging.
    emptyOutDir: true, // Clears the output directory before building.
  },
  plugins: [
    react(),
    dts({
      exclude: [
        "**/*.test.*",
        "**/*.stories.*",
        "**/stories/*",
        "vite.*.ts",
        "vitest.*.ts",
        "test.setup.ts",
      ],
    }),
  ], // Uses the 'vite-plugin-dts' plugin for generating TypeScript declaration files (d.ts).
  base: "./",
  resolve: {
    alias: {
      "@/src": path.resolve(__dirname, "/src"),
      "@/commons": path.resolve(__dirname, "/src/commons"),
      "@/configs": path.resolve(__dirname, "/src/configs"),
      "@/lib": path.resolve(__dirname, "/src/lib"),
      "@/styles": path.resolve(__dirname, "/src/_styles"),
      "@/props": path.resolve(__dirname, "/src/props"),
      "@/utils": path.resolve(__dirname, "/src/utils"),
    },
  },
  test: {
    globals: true,
    setupFiles: "test.setup.ts",
    css: true,
    environment: "jsdom",
  },
});
