#!/usr/bin/env node
/* eslint-disable */
require('../server.babel'); // babel registration (runtime transpilation for node)
const path = require('path');
const rootDir = path.resolve(__dirname, '..');
/**
 * Define isomorphic constants.
 */
global.__CLIENT__ = false;
global.__SERVER__ = true;
global.__DISABLE_SSR__ = false;  // <----- DISABLES SERVER SIDE RENDERING FOR ERROR DEBUGGING
global.__DEVELOPMENT__ = process.env.NODE_ENV !== 'production';

if (__DEVELOPMENT__) {
  if (!require('piping')({
    hook: true,
    ignore: /(\/\.|~$|\.json|\.scss$)/i,
  })) {

  }
}

// https://github.com/halt-hammerzeit/webpack-isomorphic-tools
const WebpackIsomorphicTools = require('webpack-isomorphic-tools');
<<<<<<< 56bc6ca0fa3ebf12ddbb36222bb5092b4d321173
global.webpackIsomorphicTools = new WebpackIsomorphicTools(require('../webpack/isomorphic-tools.config'))
=======
global.webpackIsomorphicTools = new WebpackIsomorphicTools(require('../webpack/webpack-isomorphic-tools'))
>>>>>>> set up eslint configuration
  .development(__DEVELOPMENT__)
  .server(rootDir, () => {
    require('../src/server');
  });
