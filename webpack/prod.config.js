/* eslint-disable */
var webpack = require('webpack');
var webpackMerge = require('webpack-merge');
var commonConfig = require('./common.config.js');
const IsomorphicPlugin = require('webpack-isomorphic-tools/plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const webpackIsomorphicToolsPlugin = new IsomorphicPlugin(require('./isomorphic.config'));

const cssNames = '[name].[hash].css';
const extractCSS = new ExtractTextPlugin(cssNames);

module.exports = webpackMerge(commonConfig, {
  devtool: 'cheap-source-map',
  module: {
    loaders: [
      { test: /\.scss$/i, loader: extractCSS.extract(['css', 'postcss-loader', 'sass']) },

    ]
  },
  plugins: [
    extractCSS,
    new webpack.NoErrorsPlugin(),
    new webpack.optimize.DedupePlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      },
      minimize: true,
    }),
    webpackIsomorphicToolsPlugin,

  ]
});
