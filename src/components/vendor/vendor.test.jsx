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

  it('should render <ExpandIcon />', () => {
    expect(wrapper.contains(<ExpandIcon />)).to.equal(true);
  });
});
