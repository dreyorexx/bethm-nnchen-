import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './AdminPanel.css';

import { Grid, Menu, Button, Icon, Modal, Dimmer, Input } from 'semantic-ui-react';
import $ from 'jquery';
import * as jquery from 'jquery';
import { findDOMNode } from 'react-dom';

import '../AdminPanelLogin/AdminPanelLogin';

export default class AdminPanel extends React.Component {

  componentDidMount=()=>{
    $('#composeBtn').click(function(){
      $('#composeModal').show();
    });

    $('#closeComposeModal').click(function(){
      $('#composeModal').hide();
    })
  }

  render() {
    return (
      <Grid>
        <Grid.Row>
          <Grid.Column width={3}>
            <div class="ui sidebar inverted visible vertical menu" id="adminSidebar">
              <div>
                <a class="item" className="item" href="/AdminPanel"><h4>Administrator</h4></a>
              </div>

              <div>
                <button class="ui button" id="composeBtn">Compose</button>
              </div>

              <div>
                <a class="item" className="item" href="/Inbox">Inbox</a>
              </div>

              <div>
                <a class="item" className="item" href="/SentMail">Sent Mail</a>
              </div>

              <div>
                <a class="item" className="item" href="/Trash">Trash</a>
              </div>
            </div>
          </Grid.Column>

          <Grid.Column width={13}>
            <Grid>
              <Grid.Row>
                <Grid.Column width={11}>
                  <h1 id="adminPanelHeader">Unread Messages</h1>
                </Grid.Column>

                <Grid.Column width={3} id="searchGrid">
                  <div class="ui left icon input search" id="search">
                    <input class="prompt" type="text" placeholder="Search..." />
                    <i class="search icon"></i>

                    <div class="results">

                    </div>
                  </div>
                </Grid.Column>
              </Grid.Row>
            </Grid>

            <div class="ui modal" id="composeModal">
              <div class="header"><i class="write icon"></i>Compose
                <i class="remove icon" id="closeComposeModal"></i>
              </div>

              <div class="content" id="modalContent">
                <Grid>
                  <Grid.Row>
                    <Grid.Column width={16}>
                      <input type="text" name="recipient" placeholder="To" id="recipient"/>
                    </Grid.Column>
                  </Grid.Row>
                </Grid>

                <Grid>
                  <Grid.Row>
                    <Grid.Column width={16}>
                      <input type="text" name="subject" placeholder="Subject" id="subject"/>
                    </Grid.Column>
                  </Grid.Row>
                </Grid>

                <Grid>
                  <Grid.Row>
                    <Grid.Column width={16}>
                      <textarea rows="10" placeholder="Message" id="msg"></textarea>
                    </Grid.Column>
                  </Grid.Row>
                </Grid>

                <Grid>
                  <Grid.Row>
                    <Grid.Column width={5}>
                    </Grid.Column>

                    <Grid.Column width={6}>
                      <Grid>
                        <Grid.Row>
                          <Grid.Column width={8}>
                            <button class="ui button" type="cancel" id="cancelBtn">Cancel</button>
                          </Grid.Column>

                          <Grid.Column width={8}>
                            <button class="ui button" type="submit" id="sendBtn">Send</button>
                          </Grid.Column>
                        </Grid.Row>
                      </Grid>
                    </Grid.Column>

                    <Grid.Column width={5}>
                    </Grid.Column>

                  </Grid.Row>
                </Grid>
              </div>
            </div>

            <Grid>
              <Grid.Row>
                <Grid.Column width={15}>
                  <table class="ui celled table">
                    <thead>
                      <tr>
                        <th>Date</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Subject</th>
                        <th>Message</th>
                      </tr>
                    </thead>

                    <tbody>
                      <tr>
                        <td width={4}>23/11/2017</td>
                        <td id="senderName">Oreo Fluffy</td>
                        <td id="senderEmail"><a href="#">oreo@gmail.com</a></td>
                        <td id="emailSubject">Enquiry on tutorial</td>
                        <td id="senderMsg"><a href="#">Click here to view</a></td>
                      </tr>
                    </tbody>
                  </table>

                </Grid.Column>
              </Grid.Row>
            </Grid>

          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

ReactDOM.render(
<AdminPanel />, document.getElementById('root')
);
