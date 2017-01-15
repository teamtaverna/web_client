import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import Selector from './selector';
import { TimetableDropdown, Vendor, Calendar,
    Timetable, VendorDropdwon, CalendarDropdown } from '../';

describe('<Selector />', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Selector />);
  });

  it('should render three selectors', () => {
    expect(wrapper.find('.selector')).to.have.length(3);
  });

  it('should render <Timetable />', () => {
    expect(wrapper.contains(<Timetable />)).to.equal(true);
  });

  it('should render <TimetableDropdown />', () => {
    expect(wrapper.contains(<TimetableDropdown />)).to.equal(true);
  });

  it('should render <Vendor />', () => {
    expect(wrapper.contains(<Vendor />)).to.equal(true);
  });

  it('should render <VendorDropdwon />', () => {
    expect(wrapper.contains(<VendorDropdwon />)).to.equal(true);
  });

  it('should render <Calendar />', () => {
    expect(wrapper.contains(<Calendar />)).to.equal(true);
  });

  it('should render <CalendarDropdown />', () => {
    expect(wrapper.contains(<CalendarDropdown />)).to.equal(true);
  });
});

