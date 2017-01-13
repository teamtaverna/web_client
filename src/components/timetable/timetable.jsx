import React from 'react';
import TimetableDropdown from './timetableDropdown';

const timetableIcon = '<use xlink:href="#icon-timetable" />';
const expandIcon = '<use xlink:href="#icon-expand" />';

const Timetable = () => (
  <div className="tab tvn themed positioning">
    <div className="icon section">
      <div className="icon header">
        <svg className="tvn icon" dangerouslySetInnerHTML={{ __html: timetableIcon }} />
      </div>
      <div className="ui mobile only sub header">LOS-A</div>
    </div>

    <div className="mobile hidden info section tvn fade clipped">
      <h3 className="ui medium header">Lagos General</h3>
      <div className="ui sub header tvn regular weight">Timetable</div>
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

export default Timetable;
