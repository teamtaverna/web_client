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
});


