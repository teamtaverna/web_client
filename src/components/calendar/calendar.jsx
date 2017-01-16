import React from 'react';
import { ExpandIcon, CalendarIcon } from '../icons';

import './calendar.scss';


const Calendar = () => (
  <div className="tab tvn themed positioning">
    <div className="icon section">
      <div className="tvn positioning calendar icon header">
        <CalendarIcon />
        <span
          className={`ui medium header
          number tvn center bottom 
          positioned`}
        >
          26
        </span>
      </div>
      <div className="ui mobile only sub header">Aug</div>
    </div>

    <div className="mobile hidden info section tvn fade clipped">
      <h3 className="ui medium header">Friday</h3>
      <div className="ui sub header tvn regular weight">
        August 26, 2016
      </div>
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

export default Calendar;

