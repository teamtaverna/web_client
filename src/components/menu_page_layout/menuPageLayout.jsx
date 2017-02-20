import React from 'react';
import Logo from '../logo/logo';

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
        <div className="selectors" />
      </div>

    </div>

    <div className="pushable content">

      <div className="ui very wide vertical right sidebar" />

      <div className="pusher">
        <div className="main">

          <div className="ui footer container">
            <div className="signature">
              {/* <svg class="tvn icon"><use xlink:href="#icon-taverna"></use></svg>*/}
              <div>Powered by the <a href="https://github.com/teamtaverna/taverna/" target="_blank" rel="noopener noreferrer" className="tvn link weight bold" >Taverna Project</a></div>
            </div>
          </div>

        </div>
      </div>

    </div>
  </div>
);

export default MenuPageLayout;
