import React from 'react';
import { expect } from 'chai';
import { render } from 'enzyme';
import Sample from './sample';

describe('Sample', () => {
  it('should have the content', () => {
    const sample = render(<Sample />);
    expect(sample.text()).to.contain('This is a sample Component Test Button ');
  });
});
