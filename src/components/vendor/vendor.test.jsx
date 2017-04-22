import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import Vendor from './vendor';
import { VendorIcon, ExpandIcon } from '../icons';

describe('<Vendor />', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Vendor />);
  });

  it('should render <VendorIcon />', () => {
    expect(wrapper.contains(<VendorIcon />)).to.equal(true);
  });

  it('should render the shortened name of the vendor for mobile', () => {
    expect(wrapper.find('.ui .mobile .only .sub .header').text()).to.equal('MPC');
  });

  it('should show full name of the vendor', () => {
    expect(wrapper.find('.ui .medium .header').text()).to.equal('Mama Peace Catering Services');
  });

  it('should show the name of the selector', () => {
    expect(wrapper.find('.ui .sub .header .tvn .regular .weight').text()).to.equal('Vendor');
  });

  it('should render <ExpandIcon />', () => {
    expect(wrapper.contains(<ExpandIcon />)).to.equal(true);
  });
});
