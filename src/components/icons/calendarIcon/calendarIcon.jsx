import React from 'react';
import calendarIcon from './calendar.svg';

const CalendarIcon = () => (
  <svg
    className="tvn icon"
    {...calendarIcon.attributes}
    dangerouslySetInnerHTML={{ __html: calendarIcon.content }}
  />
);

export default CalendarIcon;
