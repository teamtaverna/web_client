import React, { Component } from 'react';

require('./sample.scss');
const afang = require('./afang.jpg');

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
        <p className="home">This is a sample Component</p>
        <img src={afang} role="presentation" />
        <button onClick={this.checkTest}> Test Button </button>
        <button onClick={this.checkTest}> Test Button </button>
        <button onClick={this.checkTest}> Test Button </button>
      </div>
    );
  }
}
