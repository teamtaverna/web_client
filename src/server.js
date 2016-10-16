/* eslint-disable */
import React from 'react';
import ReactDOM from 'react-dom/server';
import Html from './helpers/Html'
import {Sample} from './components'

const express = require('express');
const app = express();

app.get('*', (req, res) => {
  console.log(webpackIsomorphicTools.assets(), 'gives us what we want');
  const sampleComponent = (<Sample />);
  res.status(200).send('<!doctype html>\n' +
  ReactDOM.renderToString(<Html assets={webpackIsomorphicTools.assets()} component={sampleComponent}/>)); }
);
app.listen(5000, (err) => {
  if (err) {
    console.error(err);
  }
  console.info('==> ✅  Tarvana App Now running on  http://localhost:5000');
});
