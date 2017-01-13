import React from 'react';
import calendarIcon from './calendar.svg';
import expandIcon from './expand.svg';

import './calendar.scss';


const Calendar = () => (
  <div className="tab tvn themed positioning calendar-icon">
    <div className="icon section">
      <div className="tvn positioning calendar icon header">
        <svg
          className="tvn icon"
          {...calendarIcon.attributes}
          dangerouslySetInnerHTML={{ __html: calendarIcon.content }}
        />
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
      <svg
        className="tvn icon"
        {...expandIcon.attributes}
        dangerouslySetInnerHTML={{ __html: expandIcon.content }}
      />
    </div>
  </div>
);

export default Calendar;

