import React from 'react';
import './calendar.svg';

const calendarTag = '<use xlink:href="#icon-calendar" />';
const expandIcon = '<use xlink:href="#icon-expand" />';

const Calendar = () => (
  <div className="tab tvn themed positioning">
    <div className="icon section">
      <div className="tvn positioning calendar icon header">
        <svg className="tvn icon" dangerouslySetInnerHTML={{ __html: calendarTag }} />
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
      <svg className="tvn icon" dangerouslySetInnerHTML={{ __html: expandIcon }} />
    </div>
  </div>
);

export default Calendar;

