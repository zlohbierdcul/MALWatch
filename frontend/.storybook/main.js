/** @type { import('@storybook/react-vite').StorybookConfig } */
const path = require('path');

const config = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-onboarding",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
  features: {
    emotionAlias: false,
  },
  webpackFinal: async (conf) => {
    conf.resolve.alias = {
      ...conf.resolve.alias,
      '@Components': path.resolve(__dirname, "../../src/components"),
      '@Utils': path.resolve(__dirname, "../../src/utils"),
      '@Views': path.resolve(__dirname, "../../src/views"),
    };

    return conf;
  }
};
export default config;
