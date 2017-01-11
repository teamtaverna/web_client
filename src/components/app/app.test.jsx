import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import App from './app';

describe('App', () => {
  it('should have the content', () => {
    const app = shallow(<App />);
    expect(app.text()).to.equal('This is a sample Component Test Button ');
  });
});
