import React from 'react';
import { expect } from 'chai';
import { mount } from 'enzyme';
import GenericMenuBarSelector from './genericMenuBarSelector';
import { TimetableIcon, ExpandIcon } from '../icons';

describe('<GenericMenuBarSelector />', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(
      <GenericMenuBarSelector
        mobileSubHeader="LOS-A"
        mediumHeader="Lagos General"
        regularHeader="Timetable"
      >
        <div className="content list">
          <div className="tvn fade clipped item">
            <h3 className="ui medium header">Lagos General</h3>
            <div className="description">Lagos General Staff. LOS-A.</div>
          </div>
          <div className="tvn fade clipped item">
            <h3 className="ui medium header">Lagos LT</h3>
            <div className="description">Akpos & Sons Lagos Leadership Team. LOS-B</div>
          </div>
        </div>
      </GenericMenuBarSelector>
    );
  });

  it('should render the mobileSubHeader prop', () => {
    expect(wrapper.props().mobileSubHeader).to.equal('LOS-A');
  });

  it('should render the mediumHeader prop', () => {
    expect(wrapper.props().mediumHeader).to.equal('Lagos General');
  });

  it('should render the regularHeader prop', () => {
    expect(wrapper.props().regularHeader).to.equal('Timetable');
  });

  it('should make sure the parent element for the expandIcon is a div', () => {
    expect(wrapper.find(ExpandIcon).parent().is('div'))
      .to.equal(true);
  });

  it('should render the dropdown menu', () => {
    expect(wrapper.find('.ui .dropdown .menu')).to.have.length(1);
  });

  it('should render the children', () => {
    expect(wrapper.find('.ui .dropdown .menu').children()).to.have.length(1);
  });

  it('should render two item on the dropdown list', () => {
    expect(wrapper.find('.tvn .fade .clipped .item')).to.have.length(2);
  });
});
