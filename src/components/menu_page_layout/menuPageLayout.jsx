import React from 'react';
import DayPicker from 'react-day-picker';
import 'react-day-picker/lib/style.css';
import Logo from '../logo/logo';
import GenericMenuBarSelector from '../menu_bar_selector/genericMenuBarSelector';

const MenuPageLayout = () => (
  <div id="home page" className="tvn page">

    <div className="ui top fixed menu grid">

      <div
        className={`eight wide mobile
                        four wide tablet
                        six wide computer
                        left floated column
                        tvn no padding`}
      >
        <Logo organizationName="Taverna Inc." />
      </div>

      <div
        className={`eight wide mobile
                        twelve wide tablet
                        ten wide computer
                        right floated column
                        tvn no padding`}
      >
        <div className="selectors">
          <GenericMenuBarSelector
            mobileSubHeader="LOS-A"
            mediumHeader="Lagos General"
            regularHeader="Timetable"
          >
            <div className="content">
              <DayPicker
                initialMonth={new Date(2017, 0)}
              />
            </div>
            <div className="footer">
              <button className="ui basic button">Show Today</button>
            </div>
          </GenericMenuBarSelector>
        </div>
      </div>

    </div>

    <div className="pushable content">

      <div className="ui very wide vertical right sidebar" />

      <div className="pusher">
        <div className="main">

          <div className="ui footer container">
            <div className="signature">
              <div className="powered">Powered by the <a href="https://github.com/teamtaverna/taverna/" target="_blank" rel="noopener noreferrer" className="tvn link weight bold" >Taverna Project</a></div>
            </div>
          </div>

        </div>
      </div>

    </div>
  </div>
);

export default MenuPageLayout;
