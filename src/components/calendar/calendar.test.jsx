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
});
