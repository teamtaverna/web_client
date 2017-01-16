import React from 'react';

const TimetableDropdown = () => (
  <div className="ui dropdown menu">
    <div className="content list">
      <div className="tvn fade clipped item">
        <h3 className="ui medium header">Lagos General</h3>
        <div className="description">Lagos General Staff. LOS-A.</div>
      </div>
      <div className="tvn fade clipped item">
        <h3 className="ui medium header">Lagos LT</h3>
        <div className="description">Akpos & Sons Lagos Leadership Team. LOS-B</div>
      </div>
      <div className="tvn fade clipped item">
        <h3 className="ui medium header">Nairobi Dojo</h3>
        <div className="description">Akpos & Sons Kenya Dojo Menu. NRB-1</div>
      </div>
      <div className="tvn fade clipped item">
        <h3 className="ui medium header">Nairobi LT</h3>
        <div className="description">Akpos & Sons Kenya Dojo Menu. NRB-2</div>
      </div>
    </div>
  </div>
);

export default TimetableDropdown;
