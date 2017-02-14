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
});
