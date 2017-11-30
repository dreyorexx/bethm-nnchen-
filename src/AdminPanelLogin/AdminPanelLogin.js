import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './AdminPanelLogin.css';

import $ from 'jquery';
import { Grid, Form, Button, Icon, Input } from 'semantic-ui-react';

export default class AdminPanelLogin extends React.Component {

  componentDidMount=()=>{
    $('#forgetPw').click(function(){
      $('#forgetPwModal').show();
    });

    $('#removeIcon').click(function(){
      $('#forgetPwModal').hide();
    });

    $('#passwordInput').hover(function functionName(){
        $('#password').attr('type','text');
      }, function(){
        $('#password').attr('type', 'password');
      }
    );
  }

  render() {
    return (
      <Grid id="adminLoginGrid">
        <Grid.Row>
          <Grid.Column width={5}>
          </Grid.Column>

          <Grid.Column width={6}>
            <form class="ui inverted form">
              <div>
                <h1 id="adminHeader"><hr/>ADMIN PANEL LOGIN<hr/></h1>
              </div>

              <div class="field">
                <div class="ui left icon input">
                  <input type="text" name="username" placeholder="Username" id="username"/>
                  <i class="user icon"></i>
                </div>
              </div>

              <div class="field" id="passwordInput">
                <div class="ui left icon input">
                  <input type="text" name="password" placeholder="Password" id="password"/>
                  <i class="key icon"></i>
                </div>
              </div>

              <button class="ui button" type="submit" id="loginBtn">Login</button>

              <div class="forgotPW">
                <p><a href="#" id="forgetPw">Forgot Password?</a></p>
              </div>
            </form>
          </Grid.Column>

          <div class="ui modal" id="forgetPwModal">
            <div class="header">Forget Password?
              <i class="remove icon" id="removeIcon"></i>
            </div>

            <div class="content" id="forgetPwModalContent">
              <Grid>
                <Grid.Row>
                  <Grid.Column>
                    <p id="forgetPwSubHeader">If you have forgotten your password, you can reset it here.</p>
                    <input type="text" name="email" placeholder="Email" id="email"/>
                  </Grid.Column>
                </Grid.Row>

                <Grid.Row>
                  <Grid.Column>
                    <button class="ui button" type="submit" id="forgetPwBtn">Send Verification Link</button>
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            </div>
          </div>

          <Grid.Column width={5}>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

ReactDOM.render(
<AdminPanelLogin />, document.getElementById('root')
);
