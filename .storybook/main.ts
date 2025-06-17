import type { StorybookConfig } from "@storybook/react-vite";
import { mergeConfig } from "vite";
import { resolve } from "path";

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-onboarding",
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@chromatic-com/storybook",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  async viteFinal(config, { configType }) {
    const assetBaseUrl =
      configType === "DEVELOPMENT"
        ? "http://127.0.0.1:8080"
        : process.env.ASSET_BASE_URL;

    return mergeConfig(config, {
      define: {
        "process.env.REACT_APP_ASSET_BASE_URL": JSON.stringify(assetBaseUrl),
      },
      resolve: {
        alias: {
          "@": resolve(__dirname, "../src"),
        },
      },
      build: {
        rollupOptions: {
          external: [],
          output: {
            format: "es",
            entryFileNames: "[name].js",
            chunkFileNames: "[name].js",
            assetFileNames: "[name].[ext]",
          },
        },
      },
      optimizeDeps: {
        include: ["react", "react-dom"],
        exclude: [],
      },
      base: configType === "DEVELOPMENT" ? "/" : "/mui-drawer/",
    });
  },
};

export default config;
