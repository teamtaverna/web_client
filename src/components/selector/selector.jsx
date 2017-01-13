import React from 'react';
import Calendar from '../calendar/calendar';
import CalendarDropdown from '../calendar/calendarDropdown';
import Timetable from '../timetable/timetable';
import TimetableDropdown from '../timetable/timetableDropdown';
import Vendor from '../vendor/vendor';
import VendorDropdown from '../vendor/vendorDropdown';

const Selector = () => (
  <div
    className={`eight wide mobile
     twelve wide tablet 
     ten wide computer
     right floated column
     tvn no padding`}
  >
    <div className="selectors">
      <div className="fitted item selector ui simple dropdown calendar-icon">
        <Calendar />
        <CalendarDropdown />
      </div>
      <div className="fitted item selector ui simple dropdown timetable">
        <Timetable />
        <TimetableDropdown />
      </div>
      <div className="fitted item selector ui simple dropdown vendor">
        <Vendor />
        <VendorDropdown />
      </div>
    </div>
  </div>
);

export default Selector;
