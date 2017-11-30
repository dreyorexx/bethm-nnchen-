import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './Dashboard.css';

import { Sidebar, Grid, Progress, Icon } from 'semantic-ui-react';
import $ from 'jquery';
import { findDOMNode } from 'react-dom';

export default class Dashboard extends React.Component {

  componentDidMount=()=>{
    $('#caretDownIcon').click(function(){
      $('#indProgGrid').toggle('toggle');
    });
  }

  render() {
    return (

      <Grid>
        <Grid.Row>
          <Grid.Column width={3}>
            <div class="ui sidebar inverted visible vertical menu" id="Sidebar">
              <a class="item" className="item" href="/Dashboard"><h4>Dashboard</h4></a>
              <a class="item" className="item" href="/InteractiveTut">Interactive Tutorials</a>
            </div>
          </Grid.Column>

          <Grid.Column width={13} id="dashboardContents">
            <h1 id="dashboardHeader">Dashboard</h1>

            <Grid>
              <Grid.Row>
                <Grid.Column width={12} id="overallProgGrid">
                  <h3>My Overall Progress</h3>

                  <div class="ui progress">
                    <div class="bar">
                      <div class="progress">0%</div>
                    </div>
                  </div>
                </Grid.Column>

                <Grid.Column width={4} id="overallScoreGrid">
                  <div>
                    <h3>Overall Score
                      <i class="caret down icon" id="caretDownIcon"></i>
                    </h3>
                  </div>

                  <div id="overallScoreHeader">
                    <p id="overallScore">-/10</p>
                  </div>

                </Grid.Column>

              </Grid.Row>
            </Grid>

            <Grid id="indProgGrid">
              <Grid.Row>
                  <Grid.Column width={12}>
                    <div id="tutProgHeader">
                      <h4><a href="#">Tutorial 1.1</a></h4>
                    </div>

                    <div class="ui progress">
                      <div class="bar">
                        <div class="progress">0%</div>
                      </div>
                    </div>
                  </Grid.Column>

                  <Grid.Column width={4}>
                    <div id="tutScoreHeader">
                      <h4>Score</h4>
                    </div>

                    <div id="tutScore">
                      <p id="score">-/10</p>
                    </div>
                  </Grid.Column>
              </Grid.Row>
            </Grid>

            <Grid id="currentTutGrid">
              <Grid.Row>
                <Grid.Column width={8}>
                  <h3>Current Tutorial</h3>

                  <Grid>
                    <Grid.Row>
                      <Grid.Column width={16}>
                        <p><a href="#">Tutorial 1.1</a></p>
                      </Grid.Column>
                    </Grid.Row>
                  </Grid>
                </Grid.Column>

                <Grid.Column width={8}>
                  <h3>Graph</h3>

                  <Grid>
                    <Grid.Row>
                      <Grid.Column>
                        <p>Graph here</p>
                      </Grid.Column>
                    </Grid.Row>
                  </Grid>
                </Grid.Column>

              </Grid.Row>
            </Grid>

            <Grid>
              <Grid.Row>
                <Grid.Column width={16}>
                  <h3>Available Tutorials</h3>

                  <Grid>
                    <Grid.Row>
                      <Grid.Column>
                        <p id="availTut1"><a href="#">Tutorial 1.2</a></p>
                        <p><a href="#">Tutorial 1.3</a></p>
                      </Grid.Column>
                    </Grid.Row>
                  </Grid>
                </Grid.Column>
              </Grid.Row>
            </Grid>

          </Grid.Column>

        </Grid.Row>
      </Grid>
    );
  }
}


// ========================================

ReactDOM.render(
<Dashboard />, document.getElementById('root')
);
