import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import Logo from './logo';

describe('<Logo />', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Logo />);
  });

  it('should contain the company name', () => {
    expect(wrapper.text()).to.contain('Taverna Inc.');
  });
});
