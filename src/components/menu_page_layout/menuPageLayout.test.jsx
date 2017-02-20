import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import MenuPageLayout from './menuPageLayout';
import Logo from '../logo/logo';

describe('<MenuPageLayout />', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<MenuPageLayout />);
  });
  it('should render the top menu bar', () => {
    // console.log(wrapper.find('.ui .top .menu .grid'));
    expect(wrapper.find('.ui .top .menu .grid')).to.have.length(1);
  });

  it('should render <Logo /> component', () => {
    expect(wrapper.contains(<Logo organizationName="Taverna Inc." />)).to.equal(true);
  });

  it('should have a one element with selectors class', () => {
    expect(wrapper.find('.selectors')).to.have.length(1);
  });

  it('should render the sidebar menu div element', () => {
    expect(wrapper.find('.ui .very .wide .vertical .right .sidebar')).to.have.length(1);
  });

  it('should render the footer', () => {
    expect(wrapper.find('.ui .footer .container')).to.have.length(1);
  });

  it('should render the powered by the taverna project text', () => {
    expect(wrapper.find('.powered').text()).to.equal('Powered by the Taverna Project');
  });
});
