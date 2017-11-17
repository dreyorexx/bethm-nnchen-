import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { Icon, Grid } from 'semantic-ui-react';

import './test.css';

export default class Test extends React.Component {
  render() {
    return (

          <Grid>
            <Grid.Row>
              <Grid.Column width={3}>
                <div class="ui sidebar visible pointing inverted vertical menu">
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


ReactDOM.render(
<Test />, document.getElementById('root')
);
