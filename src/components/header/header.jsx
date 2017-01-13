import React from 'react';
import Logo from '../logo/logo';
import Selector from '../selector/selector';
import './header.scss';

const Header = () => (
  <div className="ui top fixed menu grid">
    <Logo />
    <Selector />
  </div>
);

export default Header;
