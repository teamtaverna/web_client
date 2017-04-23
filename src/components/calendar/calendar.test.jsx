import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import Calendar from './calendar';
import GenericMenuBarSelector from '../menu_bar_selector/genericMenuBarSelector';

describe('<Calendar />', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Calendar
      mobileSubHeader="LOS-A"
      mediumHeader="Lagos General"
      regularHeader="Timetable"
    />);
  });

  it('should render the <GenericMenuBarSelector />', () => {
    expect(wrapper.find(<GenericMenuBarSelector />).dive().find('.ui .mobile .only .sub .header').text('LOS-A'))
      .to.have.length(2);
  });
});
