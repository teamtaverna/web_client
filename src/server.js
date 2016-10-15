/* eslint-disable */
import React from 'react';
import ReactDOM from 'react-dom/server';
import HTML from './helpers/HTML'

const express = require('express');
const app = express();

app.get('*', (req, res) => {
  console.log(webpackIsomorphicTools.assets(), 'gives us what we want');
  res.status(200).send('<!doctype html>\n' +
  ReactDOM.renderToString(<HTML assets={webpackIsomorphicTools.assets()}/>)); }
);
app.listen(5000, (err) => {
  if (err) {
    console.error(err);
  }
  console.log('I am connected!');
});
