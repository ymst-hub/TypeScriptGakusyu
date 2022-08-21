const TsconfigPathPlugin = require('tsconfig-paths-webpack-plagin')
const path = require('path')
const { config } = require('process')


module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions"
  ],
  "staticDirs":['public'],
  babel: async options => ({
    ...options,
    Plugins: [
      '@babel/plugin-proposal-class-properties',
      '@babel/plugin-proposal-private-methods',
      '@babel/plugin-proposal-private-property-in-object',
    ],
  }),
  webpackFinal: async(config) => {
    config.resolve.plugins = [
      new TsconfigPathPlugin({
        configFile: path.resolve(__dirname,'../tsconfig.json')
      }),
    ];
    return config
  },
 

}