import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import TimetableDropdown from './timetableDropdown';

describe('<TimetableDropdown />', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<TimetableDropdown />);
  });

  it('should render four items', () => {
    expect(wrapper.find('.item')).to.have.length(4);
  });

  it('should check the lengths of elements with `tvn` classNames', () => {
    // console.log(wrapper.find('.tvn.fade.clipped.item').children());
    expect(wrapper.find('.tvn')).to.have.length(4);
  });

  it('should check the lengths of elements with `ui medium header`', () => {
    expect(wrapper.find('.ui .medium .header')).to.have.length(4);
  });

  it('should check the length of elements with `description`', () => {
    expect(wrapper.find('.description')).to.have.length(4);
  });
});


