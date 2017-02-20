import React, { PropTypes } from 'react';

const logo = require('./logo.svg');

const Logo = props => (
  <div className="tvn fade clipped brand">
    <img className="logo" src={logo} alt="Tarvena" />
    <h1 className="name ui large header">{props.organizationName}</h1>
  </div>
);

Logo.propTypes = {
  organizationName: PropTypes.string,
};

export default Logo;

