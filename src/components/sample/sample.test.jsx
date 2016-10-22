import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import Sample from './sample';

describe('Sample', () => {
  it('should have the content', () => {
    const sample = shallow(<Sample />);
    expect(sample.text()).to.equal('This is a sample Component Test Button ');
  });
});
