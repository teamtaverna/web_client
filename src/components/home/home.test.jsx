import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import Home from './home';

describe('Home', () => {
  it('should have the content', () => {
    const home = shallow(<Home />);
    expect(home.text()).to.equal('Abiodun is a troubleshooter!');
  });
});
