import React, { PropTypes } from 'react';
import 'react-day-picker/lib/style.css';
import DayPicker, { NavbarPropTypes } from 'react-day-picker';
import GenericMenuBarSelector from '../menu_bar_selector/genericMenuBarSelector';
import { ExpandIcon, TimetableIcon } from '../icons';

const DayPickerNavbar = ({ onPreviousClick, onNextClick, className }) => (
  <div className={className} style={{ fontSize: '.75em' }}>
    <span // eslint-disable-line
      className="DayPicker-NavButton DayPicker-NavButtons--prev"
      style={{ float: 'left', cursor: 'pointer' }} onClick={() => onPreviousClick()}
    >
      <ExpandIcon />
    </span>
    <span // eslint-disable-line
      className="DayPicker-NavButton DayPicker-NavButtons--next"
      style={{ float: 'right', cursor: 'pointer' }} onClick={() => onNextClick()}
    >
      <ExpandIcon />
    </span>
  </div>
);

DayPickerNavbar.propTypes = NavbarPropTypes;

const Calendar = ({ mobileSubHeader, regularHeader, mediumHeader }) => (
  <GenericMenuBarSelector
    mobileSubHeader={mobileSubHeader}
    mediumHeader={mediumHeader}
    regularHeader={regularHeader}
    selectorIcon={<TimetableIcon />}
  >
    <div className="content">
      <DayPicker
        initialMonth={new Date(2017, 0)}
        navbarElement={<DayPickerNavbar />}
      />
    </div>
    <div className="footer">
      <button className="ui basic button">Show Today</button>
    </div>
  </GenericMenuBarSelector>
);

Calendar.propTypes = {
  mobileSubHeader: PropTypes.string,
  regularHeader: PropTypes.string,
  mediumHeader: PropTypes.string,
};

export default Calendar;

