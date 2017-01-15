import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import Header from './header';
import { Logo, Selector } from '../';

describe('<Header />', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Header />);
  });

  it('should render the <Logo />', () => {
    expect(wrapper.contains(<Logo />)).equal(true);
  });

  it('should render the <Selector />', () => {
    expect(wrapper.contains(<Selector />)).equal(true);
  });
});
