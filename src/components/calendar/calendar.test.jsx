import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import Calendar from './calendar';
import { CalendarIcon, ExpandIcon } from '../icons';

describe('<Calendar />', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Calendar />);
  });

  it('should render <CalendarIcon />', () => {
    expect(wrapper.contains(<CalendarIcon />)).to.equal(true);
  });

  it('should render <ExpandIcon />', () => {
    expect(wrapper.contains(<ExpandIcon />)).to.equal(true);
  });

  it('should render an abbreviated version of the month', () => {
    expect(wrapper.find('.ui .mobile').text()).to.equal('Aug');
  });

  it('should render the day', () => {
    expect(wrapper.find('.ui .medium .header .day').text()).to.equal('Friday');
  });

  it('should render a span with the date', () => {
    expect(wrapper.find('span').text()).to.equal('26');
  });

  it('should render the complete date', () => {
    expect(wrapper.find('.ui .sub .header .tvn .regular').text()).to.equal('August 26, 2016');
  });
});
