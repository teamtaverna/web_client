import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import VendorDropdown from './vendorDropdown';

describe('<VendorDropdown />', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<VendorDropdown />);
  });

  it('should render two item', () => {
    expect(wrapper.find('.item')).to.have.length(2);
  });

  it('should show the two vendors', () => {
    expect(wrapper.find('.ui .medium .header')).to.have.length(2);
  });

  it('should show the type of service the vendor\'s render', () => {
    expect(wrapper.find('.description').text()).to.have.length(2);
  });
});
