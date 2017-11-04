import React, {Component} from 'react';
import { Icon } from 'semantic-ui-react';

import './test.css';

export default class Test extends React.Component {
  render() {
    return (
        <div className="container">
          <div class="ui four column grid">

              <div class="two column row">
                <div class="three wide column">

                    <div className="sidebar">
                      <div class="ui visible sidebar inverted vertical menu">
                        <a class="item">
                          Dashboard
                        </a>
                        <a class="item">
                          Interactive Tutorials
                        </a>
                        <a class="item">
                          Help
                        </a>
                      </div>
                    </div>
                </div>

                <div class="twelve wide column">

                    <div className="dashboardContainer">
                      <div className="dashboardHeader">
                        <h1 id="headerDash">Dashboard</h1>
                      </div>

                      <div className="currentProgressContainer">
                        <div class="ui grid container" id="gridContainer">
                          <div class="one column row">
                              <div class="column" id="box1">
                                <h4 id="currentTutHeader">My Current Tutorial:</h4>

                                <div class="ui progress"  id="currentProgress">
                                  <div class="bar">
                                    <div class="progress">0%</div>
                                  </div>
                                </div>

                                <div id="contLink">
                                  <p><a href="#" id="contTut">Continue tutorial</a></p>
                                </div>

                              </div>
                          </div>

                          <div class="one column row">
                              <div class="column" id="box2">
                                <p>nfkjadnwkbdq,mnsqkwd md </p>
                              </div>
                          </div>

                        </div>
                      </div>

                    </div>

                    </div>
                  </div>

          </div>
        </div>
    );
  }
}
