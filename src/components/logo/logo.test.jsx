import React from 'react';
import { expect } from 'chai';
import { shallow, mount } from 'enzyme';
import Logo from './logo';

describe('<Logo />', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Logo organizationName="Taverna Inc." />);
  });

  it('should accept the organization name as props', () => {
    const logo = mount(<Logo organizationName="Taverna Inc." />);
    expect(logo.prop('organizationName')).to.equal('Taverna Inc.');
  });

  it('should render the organization name', () => {
    expect(wrapper.find('.name .ui .large .header').text()).to.equal('Taverna Inc.');
  });
});
