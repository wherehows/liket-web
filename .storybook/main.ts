import type { StorybookConfig } from "@storybook/nextjs";
import path from "path";

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-onboarding",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/nextjs",
    options: {},
  },
  staticDirs: ["../public"],
  webpackFinal: async (config) => {
    const imageRule = config.module?.rules?.find((rule) => {
      const test = (rule as { test: RegExp }).test;

      if (!test) {
        return false;
      }

      return test.test(".svg");
    }) as { [key: string]: any };

    imageRule.exclude = /\.svg$/;

    config.module?.rules?.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    if (config.resolve) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        os: require.resolve("os-browserify/browser"),
      };

      config.resolve.alias = {
        ...config.resolve.alias,
        "@/utils": path.resolve(__dirname, "../src/utils"),
        "@/components": path.resolve(__dirname, "../src/components"),
        "@/icons": path.resolve(__dirname, "../public/icons"),
      };
    }

    return config;
  },
  docs: {
    autodocs: "tag",
  },
};
export default config;
