import React from 'react';
import Calendar from '../calendar/calendar';
import Timetable from '../timetable/timetable';
import TimetableDropdown from '../timetable/timetableDropdown';

const Selector = () => (
  <div
    className={`eight wide mobile
     twelve wide tablet 
     ten wide computer
     right floated column
     tvn no padding`}
  >
    <div className="selectors">
      <div className="fitted item selector ui simple dropdown">
        <Calendar />
      </div>
      <div className="fitted item selector ui simple dropdown">
        <Timetable />
        <TimetableDropdown />
      </div>
    </div>
  </div>
);

export default Selector;
