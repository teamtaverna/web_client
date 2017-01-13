import React from 'react';
import timetableIcon from './timetable.svg';
import expandIcon from './expand.svg';
import './timetable.scss';

const Timetable = () => (
  <div className="tab tvn themed positioning timetable-icon">
    <div className="icon section">
      <div className="icon header">
        <svg
          className="tvn icon"
          {...timetableIcon.attributes}
          dangerouslySetInnerHTML={{ __html: timetableIcon.content }}
        />
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
      <svg
        className="tvn icon"
        {...timetableIcon.atrributes}
        dangerouslySetInnerHTML={{ __html: expandIcon.content }}
      />
    </div>
  </div>
);

export default Timetable;
