module.exports = {
  stories: ['../src/**/*.stories.@(ts|js|mdx)'],
  logLevel: 'debug',
  addons: [
    '@storybook/addon-docs',
    '@storybook/addon-controls',
    '@storybook/addon-storysource',
    '@storybook/preset-scss',
  ],
  core: {
    builder: 'webpack4',
    disableTelemetry: true,
  },
  features: {
    buildStoriesJson: true,
    breakingChangesV7: true,
  },
  framework: '@storybook/vue-webpack4',
};
