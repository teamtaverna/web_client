import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import Html from './helpers/Html';

const mountNode = document.getElementById('content');
render(Html, mountNode);
