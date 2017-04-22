import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import Timetable from './timetable';
import { TimetableIcon, ExpandIcon } from '../icons';

describe('<Timetable />', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Timetable />);
  });

  it('should render <TimetableIcon />', () => {
    expect(wrapper.contains(<TimetableIcon />)).to.equal(true);
  });

  it('should have text "Timetable"', () => {
    expect(wrapper.find('.ui .sub .header .tvn .regular .weight').text()).to.equal('Timetable');
  });

  it('should have mobile-only shortened timetable location', () => {
    expect(wrapper.find('.ui .mobile .only .sub .header').text()).to.contain('LOS-A');
  });

  it('should render the current country\'s timetable name', () => {
    expect(wrapper.find('.ui .medium .header').text()).to.equal('Lagos General');
  });

  it('should render the an expand icon', () => {
    expect(wrapper.contains(<ExpandIcon />)).to.equal(true);
  });
});
