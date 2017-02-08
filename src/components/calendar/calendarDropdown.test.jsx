import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import DayPicker from 'react-day-picker';
import CalendarDropdown from './calendarDropdown';

describe('<CalendarDropdown />', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<CalendarDropdown />);
  });
  it('should render only one dropdown', () => {
    expect(wrapper.find('.ui .dropdown .menu')).to.have.length(1);
  });

  it('should render the `show today` button', () => {
    expect(wrapper.find('.ui .basic .button').text()).to.equal('Show Today');
  });

  it('should render the main contenet', () => {
    expect(wrapper.find('.content')).to.have.length(1);
  });

  it('should render the day picker component with an initialMonth', () => {
    expect(wrapper.contains(<DayPicker initialMonth={new Date(2017, 0)} />)).to.equal(true);
  });
});
