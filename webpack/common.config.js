/* eslint-disable */
const webpack = require('webpack');
const path = require('path')
const IsomorphicPlugin = require('webpack-isomorphic-tools/plugin');
const webpackIsomorphicToolsPlugin = new IsomorphicPlugin(require('./isomorphic.config'));

module.exports = {
  entry: {
    app: "./src/client",
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      loader: 'babel-loader',
      exclude: /(node_modules|bower_components|libs)/,
      query: {
        presets: ['es2015', 'react', 'stage-0']
      }

    },
    {
      test: /\.css$/, // Only .css files
      loader: 'style!css' // Run both loaders
    },
    // LESS
    {
      test: /\.less$/,
      loader: 'style!css!less'
    },

    // SASS
    {
      test: /\.scss$/,
      loader: 'style!css!sass'
    }, {
      test: /\.(png|jpg)$/,
      loader: 'url?limit=25000'
    },

    // Needed for the css-loader if you're using bootstrap-webpack(https://github.com/bline/bootstrap-webpack)
    // loads bootstrap's css.
    {test: /\.woff(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/font-woff"},
    {test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/font-woff"},
    {test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/octet-stream"},
    {test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: "file" },
    {test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: "svg-loader"},
    {
     test: webpackIsomorphicToolsPlugin.regular_expression('images'),
        loader: 'url-loader?name=images/[name].[ext]&limit=10240'
    },
  ]
  },
  devtool: 'source-map',
  keepalive: true,
  debug: true,
  cache: true,
};