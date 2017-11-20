import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './dashboard.css';

import { Sidebar, Grid, Progress, Icon } from 'semantic-ui-react';
import $ from 'jquery';
import { findDOMNode } from 'react-dom';

export default class Dashboard extends React.Component {

  constructor(props){
    super(props)
    this.state={store:''}
  }

  componentDidMount=()=>{
    $(".toggleBtn").click(function(){
      $("#Sidebar").toggle();
    });
  }

  render() {
    return (

      <Grid>
        <Grid.Row>
          <Grid.Column width={3}>
            <div class="ui sidebar inverted vertical menu" id="Sidebar">
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
          </Grid.Column>

          <Grid.Column width={13} id="t">
            <h1 id="dashboardHeader">Dashboard</h1>
            <button class="toggleBtn" onClick="this.handleToggle">sidebar</button>

            <Grid>
              <Grid.Row>
                <Grid.Column width={14} id="c2r1">
                  <h3>My Overall Score
                    <i class="caret down icon" id="caretDownIcon"></i>
                  </h3>

                  <Grid.Column width={13}>
                    <div class="ui progress">
                      <div class="bar">
                        <div class="progress">0%</div>
                      </div>
                    </div>
                  </Grid.Column>

                  <Grid.Column width={13}>

                  </Grid.Column>

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
