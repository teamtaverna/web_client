/* eslint-disable */
import React from 'react';

import ReactDOM from 'react-dom/server';
const express = require('express');
import { HelloWorld } from './client';
const app = express();

app.get('*', (req, res, next) => {
  res.status(200).send(`<!doctype html>\n${ReactDOM.renderToString(<HelloWorld />)}`);
});
app.listen(5000, (err) => {
  if (err) {
    console.error(err);
  }
  console.log('I am connected!');
});
