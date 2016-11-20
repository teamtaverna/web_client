#!/usr/bin/env node
/* eslint-disable */
require('../server.babel');
const path = require('path');
/**
 * Define isomorphic constants.
 */
global.__CLIENT__ = false;
global.__SERVER__ = true;
global.__DISABLE_SSR__ = false;  // <----- DISABLES SERVER SIDE RENDERING FOR ERROR DEBUGGING
global.__DEVELOPMENT__ = process.env.NODE_ENV === 'development';

if (__DEVELOPMENT__) {
  if (!require('piping')({
    hook: true,
    ignore: /(\/\.|~$|\.json|\.scss$)/i,
  })) {

  }
}

// https://github.com/halt-hammerzeit/webpack-isomorphic-tools
const WebpackIsomorphicTools = require('webpack-isomorphic-tools');
global.webpackIsomorphicTools = new WebpackIsomorphicTools(require('../webpack/isomorphic.config'))
  .server('./', () => {
   if (__DEVELOPMENT__) {
      require('../src/server');
    }
    else {
      require('../dist/server');
    }
  });
