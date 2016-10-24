import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Sample } from './components';

const mountNode = document.getElementById('content');
render(<Sample />, mountNode, () => {
    console.log('client side now active');
});
