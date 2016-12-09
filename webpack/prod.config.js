/* eslint-disable */
var webpack = require('webpack');
var webpackMerge = require('webpack-merge');
var commonConfig = require('./common.config.js');
const IsomorphicPlugin = require('webpack-isomorphic-tools/plugin');

const webpackIsomorphicToolsPlugin = new IsomorphicPlugin(require('./isomorphic.config'));

const ENV = process.env.NODE_ENV;

module.exports = webpackMerge(commonConfig, {
  devtool: 'cheap-source-map',
  plugins: [
    new webpack.NoErrorsPlugin(),
    new webpack.optimize.DedupePlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        'ENV': JSON.stringify(ENV)
      }
    }),
    new webpack.optimize.CommonsChunkPlugin({
        children: true,
        // (use all children of the chunk)
        async: true,
        // (create an async commons chunk)
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