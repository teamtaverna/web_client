import React from 'react';
import DayPicker from 'react-day-picker';
import 'react-day-picker/lib/style.css';

const CalendarDropdown = () => (
  <div className="ui dropdown menu">
    <div className="content">
      <DayPicker
        initialMonth={new Date(2017, 0)}
      />
    </div>
    <div className="footer">
      <button className="ui basic button">Show Today</button>
    </div>
  </div>
);

export default CalendarDropdown;
