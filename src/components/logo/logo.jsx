import React from 'react';

const logo = require('./logo.png');

const Logo = () => (
  <div
    className={`eight wide mobile
        four wide tablet
        six wide computer
        left floated column
        tvn no padding`}
  >

    <div className="tvn fade clipped brand">
      <img className="logo" src={logo} alt="Tarvena" />
      <h1 className="name ui large header">Taverna Inc.</h1>
    </div>

  </div>
  );

export default Logo;

