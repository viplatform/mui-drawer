import type { StorybookConfig } from "@storybook/react-vite";

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
  viteFinal: async (config) => {
    return {
      ...config,
      resolve: {
        ...config.resolve,
        alias: {
          ...config.resolve?.alias,
        },
      },
      optimizeDeps: {
        ...config.optimizeDeps,
        include: [...(config.optimizeDeps?.include ?? [])],
        esbuildOptions: {
          jsx: "automatic",
        },
      },
      build: {
        ...config.build,
        commonjsOptions: {
          include: [/node_modules/],
          transformMixedEsModules: true,
        },
      },
      esbuild: {
        ...config.esbuild,
        jsx: "automatic",
      },
    };
  },
};

export default config;
