import React, { Component } from 'react';
// const sampleStyles = require('./sample.scss')
export default class Sample extends Component {
    constructor() {
        super();
        this.checkTest = this.checkTest.bind(this);
    }
    checkTest() {
        console.log('we are here?');
    }
    render() {
        return (
            <div>This is a sample Component
            <button onClick={this.checkTest}> Test Button </button>
            </div>
        )
    }
}
