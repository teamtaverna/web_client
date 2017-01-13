import React from 'react';
import timetableIcon from './timetable.svg';

const TimetableIcon = () => (
  <svg
    className="tvn icon"
    {...timetableIcon.attributes}
    dangerouslySetInnerHTML={{ __html: timetableIcon.content }}
  />
);

export default TimetableIcon;
