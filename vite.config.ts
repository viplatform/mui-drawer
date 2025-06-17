import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import dts from "vite-plugin-dts";
import cssInjectedByJsPlugin from "vite-plugin-css-injected-by-js";
import { fileURLToPath } from "url";
import { dirname, resolve } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({
      jsxRuntime: "automatic",
      jsxImportSource: "react",
    }),
    peerDepsExternal(),
    dts({
      rollupTypes: false,
      exclude: ["/**/*.stories.tsx", "/**/*.test.tsx"],
      insertTypesEntry: true,
      outDir: "dist",
      include: ["src/**/*.ts", "src/**/*.tsx"],
      staticImport: true,
    }),
    cssInjectedByJsPlugin(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@assets": resolve(__dirname, "./src/assets"),
      "@shared": resolve(__dirname, "./src/shared"),
      "@components": resolve(__dirname, "./src/components"),
      "@": resolve(__dirname, "./src"),
    },
  },
  build: {
    target: "esnext",
    minify: "terser",
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
    lib: {
      formats: ["es"],
      entry: resolve(__dirname, "src/muiDrawer/index.tsx"),
      name: "MuiDrawer",
      fileName: (format) => {
        return `mui-drawer.${format}.js`;
      },
    },
    rollupOptions: {
      output: {
        sourcemapExcludeSources: true,
        assetFileNames: (assetInfo) => {
          if (assetInfo.name === "style.css") return "mui-drawer.css";
          return assetInfo.name;
        },
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
          "@mui/material": "MaterialUI",
        },
      },
    },
  },
});
