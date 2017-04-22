import React from 'react';
import { ExpandIcon, VendorIcon } from '../icons';
import './vendor.scss';

const Vendor = () => (
  <div className="tab tvn themed positioning">
    <div className="icon section">
      <div className="icon header">
        <VendorIcon />
      </div>
      <div className="ui mobile only sub header">MPC</div>
    </div>

    <div className="mobile hidden info section tvn fade clipped">
      <h3 className="ui medium header">Mama Peace Catering Services</h3>
      <div className="ui sub header tvn regular weight">Vendor</div>
    </div>

    <div
      className={`dropdown toggle
        tablet or lower hidden
        tvn right middle positioned`}
    >
      <ExpandIcon />
    </div>
  </div>
);

export default Vendor;
