/* eslint-disable */
const webpack = require('webpack');
var webpackMerge = require('webpack-merge');
var commonConfig = require('./common.config.js');
const IsomorphicPlugin = require('webpack-isomorphic-tools/plugin');
const path = require('path')
const webpackIsomorphicToolsPlugin = new IsomorphicPlugin(require('./isomorphic.config'));

module.exports = webpackMerge(commonConfig, {
  devtool: 'source-map',
  entry: {
    app: ['webpack-dev-server/client?http://localhost:4001/', 'webpack/hot/dev-server']
  },
  module: {
    loaders: [
      { test: /\.scss$/i, loaders: ['style', 'css', 'postcss-loader', 'sass'] },
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    webpackIsomorphicToolsPlugin.development()
  ],
  debug: true,
  devServer: {
    historyApiFallback: true,
    stats: 'minimal',
    contentBase: './build'
  }
});
