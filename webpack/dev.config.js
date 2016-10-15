/* eslint-disable */
const webpack = require('webpack');
var webpackMerge = require('webpack-merge');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var commonConfig = require('./common.config.js');
const IsomorphicPlugin = require('webpack-isomorphic-tools/plugin');
const path = require('path')
const webpackIsomorphicToolsPlugin = new IsomorphicPlugin(require('./isomorphic.config'));

module.exports = webpackMerge(commonConfig, {
  devtool: 'cheap-module-eval-source-map',
  output: {
    path: path.resolve('./build'),
    filename: '[name].js',
    chunkFilename: '[id].chunk.js'
  },

  plugins: [
    new ExtractTextPlugin('[name].css'),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery',
    }),
    webpackIsomorphicToolsPlugin.development()
  ],

  devServer: {
    historyApiFallback: true,
    stats: 'minimal',
    contentBase: './build'
  }
});
