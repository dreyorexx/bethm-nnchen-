import React, {Component} from 'react';
import { Grid } from 'semantic-ui-react'

import './test.css';

export default class Test extends Component {
  render() {
    return (
      <div class="ui two column middle aligned very relaxed stackable grid">
        <div class="column">
          <div class="ui form">
            <div class="field">
              <label>Username</label>

              <div class="ui left icon input">
                <input type="text" placeholder="Username"/>
                <i class="user icon"></i>
              </div>
            </div>
            <div class="field">
              <label>Password</label>
              <div class="ui left icon input">
                <input type="password"/>
                <i class="lock icon"></i>
              </div>
            </div>

            <div class="ui blue submit button">Login</div>
          </div>
        </div>

        <div class="ui vertical divider">
          Or
        </div>

        <div class="center aligned column">
          <div class="ui big green labeled icon button">
            <i class="signup icon"></i>
            Sign Up
          </div>
        </div>
    </div>
  );
  }
}
