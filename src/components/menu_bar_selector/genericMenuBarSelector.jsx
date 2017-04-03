import React, { PropTypes } from 'react';
import { ExpandIcon } from '../icons';


const GenericMenuBarSelector = props => (
  <div className="fitted item selector ui simple dropdown">
    <div
      className={`tab
                tvn themed
                positioning timetable-icon `}
    >
      <div className="icon section">
        <div className="icon header">
          {props.selectorIcon}
        </div>
        <div className="ui mobile only sub header">{props.mobileSubHeader}</div>
      </div>

      <div className="mobile hidden info section tvn fade clipped">
        <h3 className="ui medium header">{props.mediumHeader}</h3>
        <div className="ui sub header tvn regular weight">{props.regularHeader}</div>
      </div>
      <div className="dropdown toggle tablet or lower hidden tvn right middle positioned">
        <ExpandIcon />
      </div>
    </div>

    <div className="ui dropdown menu">
      {props.children}
    </div>
  </div>
);

GenericMenuBarSelector.propTypes = {
  mobileSubHeader: PropTypes.string,
  mediumHeader: PropTypes.string,
  selectorIcon: PropTypes.node,
  regularHeader: PropTypes.string,
  children: PropTypes.node,
};

export default GenericMenuBarSelector;
