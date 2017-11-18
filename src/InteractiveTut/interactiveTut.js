import React from 'react';
import ReactDOM from 'react-dom';
import './interactiveTut.css';

import { Grid, Menu, Container } from 'semantic-ui-react';

export default class InteractiveTut extends React.Component {

  render() {
    return (

      <Grid>
        <Grid.Row>
          <Grid.Column width={3}>
            <div class="ui sidebar visible pointing inverted vertical menu" id="sidebar">
              <a class="item" id="tut1Header">Interactive Tutorial 1</a>

              <div class="item">
                <div class="menu">
                  <a class="item">Learning Objectives</a>
                  <a class="item">Component 1</a>
                  <a class="item">Component 2</a>
                  <a class="item">Component 3</a>
                </div>
              </div>
            </div>
          </Grid.Column>

          <Grid.Column width={12} className="col2">
            <p>Col2</p>

            <Grid>
              <Grid.Column width={8}>box left</Grid.Column>
              <Grid.Column width={8}>box right</Grid.Column>
            </Grid>
          </Grid.Column>

          <Grid.Column width={1}>
          </Grid.Column>

        </Grid.Row>
      </Grid>

    );
  }
}

// ========================================

ReactDOM.render(
<InteractiveTut />, document.getElementById('root')
);
