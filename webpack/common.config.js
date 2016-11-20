/* eslint-disable */
const webpack = require('webpack');
const path = require('path')
const IsomorphicPlugin = require('webpack-isomorphic-tools/plugin');
const webpackIsomorphicToolsPlugin = new IsomorphicPlugin(require('./isomorphic.config'));

const development = (process.env.NODE_ENV || 'development') === 'development';

const ExtractTextPlugin = require('extract-text-webpack-plugin');
const cssNames = development ? '[name].css' : '[name].[hash].css';
const extractCSS = new ExtractTextPlugin(cssNames);
const autoprefixer = require('autoprefixer');

const isDev = process.env.NODE_ENV === 'development';
module.exports = {
  entry: {
    app: "./src/client",
  },
  resolve : {
    extensions: ['', '.js', '.jsx']
  },
  output: {
    publicPath: isDev ? `http://localhost:${+process.env.PORT + 1}/assets/`: '',
    path: path.resolve(__dirname, '../dist/assets'),
    filename: isDev ? '[name].js': '[name].[hash].js',
    chunkFilename: isDev ? '[id].js': '[id].[hash].js'
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
        {
      test: /\.scss$/,
      loader: 'style!css!sass'
    },
    // SASS
      //{test: /\.scss$/i, loader: extractCSS.extract(['style', 'css', 'postcss-loader', 'sass'])
    //},

    { test: webpackIsomorphicToolsPlugin.regular_expression('images'), loader: 'url-loader?limit=10240' }
      ,
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
  postcss: [],
  plungis: [
    extractCSS,
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
    }),

  ],
  devtool: 'source-map',
  keepalive: true,
  debug: true,
  cache: true,
};