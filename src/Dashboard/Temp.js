import React from 'react';
import ReactDOM from 'react-dom';
import './Temp.css';

import { Sidebar, Grid, Progress } from 'semantic-ui-react';
import $ from 'jquery';
import { findDOMNode } from 'react-dom';

export default class Dashboard extends React.Component {

  handleToggle = () => {
    const t = findDOMNode(this.refs.toggle);
    $('.ui.sidebar').sidebar('toggle');
  }

  render() {
    return (

      <div>
          <div class="ui grid container" id="grid">
            <div class="row">
              <div class="three wide column" id="sidebarCol">

                <div class="ui visible sidebar inverted vertical menu">
                  <a class="item" className="item">
                    Dashboard
                  </a>
                  <a class="item" className="item">
                    Interactive Tutorials
                  </a>
                  <a class="item" className="item">
                    Help
                  </a>
                </div>
              </div>

              <div class="twelve wide column" id="containerCol">
                <div class="row" id="row1">
                  <div class="column">
                    <h1 id="dashboardHeader">Dashboard</h1>
                  </div>
                </div>

                <div class="row" id="row2">
                  <div class="column">
                    <div className="currentTut">
                      <h3 id="currentTutHeader">My Current Tutorial:</h3>

                      <div className="currentTutProg">
                        <div class="ui progress">
                          <div class="bar">
                            <div class="progress">0%</div>
                          </div>
                        </div>

                        <p id="contTutLink"><a href="#">Continue tutorial</a></p>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="row" id="row3">
                  <div class="column">
                    <div className="availTut">
                      <h3 id="availTutHeader">Available Tutorials:</h3>

                      <div class="column">
                        <p id="availTutLink"><a href="#">Interactive Tutorial 1</a></p>
                        <p id="availTutLink"><a href="#">Interactive Tutorial 2</a></p>
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


// ========================================

ReactDOM.render(
<Dashboard />, document.getElementById('root')
);
