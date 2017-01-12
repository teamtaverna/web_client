/* eslint-disable */
import React from 'react';
import ReactDOM from 'react-dom/server';
import Html from './helpers/Html'
import {App} from './containers'

const express = require('express');
const app = express();
const development = (process.env.NODE_ENV || 'development') === 'development';
if(!development) {
  console.log(__dirname)
  app.use('/assets', express.static(__dirname + '/assets'));
}

app.get('*', (req, res) => {
  const sampleComponent = (<App />);
  res.status(200).send('<!doctype html>\n' +
  ReactDOM.renderToString(<Html assets={webpackIsomorphicTools.assets()} component={sampleComponent}/>)); 
});
app.listen(process.env.PORT || 5000, (err) => {
  if (err) {
    console.error(err, 'this is the error', process.env.PORT);
  }
  console.info(`==> ✅  Tarvana App Now running on  http://localhost:${process.env.PORT || 5000}`);
});
