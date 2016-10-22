import React, { Component } from 'react';

require('./sample.scss');

export default class Sample extends Component {
  constructor() {
    super();
    this.checkTest = this.checkTest.bind(this);
  }
  checkTest() {
    console.log(this)
    console.log('just a test event listener');
  }
  render() {
    return (
      <div>
        <p className="home">This is a sample Component</p>
        <button onClick={this.checkTest}> Test Button </button>
      </div>
    );
  }
}
