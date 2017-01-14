import React, { Component } from 'react';

const s = require('./sample.scss');
const afang = require('./afang.jpg');
const logo = require('./logo.svg');

export default class Sample extends Component {
  constructor() {
    super();
    this.checkTest = this.checkTest.bind(this);
  }
  checkTest() {
    console.log('sample test button', this.props);
  }
  render() {
    return (
      <div>
        <p className={s.home}>This is a sample Component</p>
        <img src={logo} role="presentation" />
        <img src={afang} role="presentation" />
        <button onClick={this.checkTest}> Test Button </button>
        <button onClick={this.checkTest}> Test Button </button>
        <button onClick={this.checkTest}> Test Button </button>
      </div>
    );
  }
}
