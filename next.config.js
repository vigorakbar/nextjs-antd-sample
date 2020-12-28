/* eslint-disable */
const withLess = require('@zeit/next-less');
const withCSS = require('@zeit/next-css');
const withPlugins = require('next-compose-plugins');
const AntdDayjsWebpackPlugin = require('antd-dayjs-webpack-plugin');
// const withSourceMaps = require('@zeit/next-source-maps');
// const SentryWebpackPlugin = require('@sentry/webpack-plugin');
// const pkg = require('./package.json');

module.exports = withPlugins(
  [
    [withLess, { lessLoaderOptions: { javascriptEnabled: true } }],
    [withCSS]
  ],
  {
    webpack: (config) => {
      config.plugins = [
        ...config.plugins,
        new AntdDayjsWebpackPlugin(),
      ]
      return config
    }
  }
)
