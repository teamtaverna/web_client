import React, { Component } from 'react';

import "./app.scss";

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
        <button onClick={this.checkTest}> Test Button </button>
      </div>
    );
  }
}
