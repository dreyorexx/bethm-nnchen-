import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './Inbox.css';

import { Grid, Menu, Button, Icon, Modal, Dimmer, Input, Checkbox, Item } from 'semantic-ui-react';
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
    });

    $('#msgLink').click(function(){
      $('#msgModal').show();
    });

    $('#replyMailIcon').click(function(){
      $('#replyMailModal').show();
      $('#msgModal').hide();
    });

    $('#closeMsgIcon').click(function(){
        $('#msgModal').hide();
    });

    $('#closeReplyMsgIcon').click(function(){
        $('#replyMailModal').hide();
    })
  }

  render() {
    return (
      <Grid>
        <Grid.Row>
          <Grid.Column width={3}>
            <div class="ui sidebar inverted visible vertical menu" id="adminSidebar">
              <div>
                <a class="item" className="item" href="/AdminPanel">Administrator</a>
              </div>

              <div>
                <button class="ui button" id="composeBtn">Compose</button>
              </div>

              <div>
                <a class="item" className="item" href="/Inbox"><h4>Inbox</h4></a>
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
                  <h1 id="inboxHeader">Inbox</h1>
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
                        <th width={3}>
                          <div class="ui fitted checkbox">
                            <input type="checkbox"/>
                            <label></label>
                          </div>
                        </th>
                        <th>Date</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Subject</th>
                        <th>Status</th>
                      </tr>
                    </thead>

                    <tbody>
                      <tr>
                        <td>
                          <div class="ui checkbox">
                            <input type="checkbox" />
                            <label></label>
                          </div>
                        </td>
                        <td width={4}>23/11/2017</td>
                        <td>Oreo Fluffy</td>
                        <td><a href="#">oreo@gmail.com</a></td>
                        <td>Enquiry on tutorial</td>
                        <td><a href="#" id="msgLink">Reply</a></td>
                      </tr>
                    </tbody>
                  </table>

                </Grid.Column>
              </Grid.Row>
            </Grid>

            <div class="ui modal" id="msgModal">
              <div class="header" id="msgHeader">

                <i class="remove icon" id="closeMsgIcon"></i>
                <i class="reply icon" id="replyMailIcon"></i>

                <p id="timeDateTag"><span id="emailDate">06-Dec-17</span> <span id="emailTime">10.50pm</span></p>

                <div id="senderEmailCon">
                  <text id="senderEmailHeader">To: <a href="#" id="senderEmail">fluffyOreo@gmail.com</a></text>
                </div>

                <div id="adminEmailCon">
                  <text id="adminEmailHeader">From: <a href="#" id="adminEmail">admin@strat.com</a></text>
                </div>

                <text class="emailSub">Enquiry on Tutorial</text>
              </div>

              <div class="content" id="msgModalContent">
                <Grid>
                  <Grid.Row>
                    <Grid.Column width={16}>
                      <p>Hi, I would like to know if there will be more topics covered for Tutorial 1?
                        <br/> Would love to hear from you soon.
                        <br/> P.s. The tutorials are very informative :)
                      </p>
                    </Grid.Column>
                  </Grid.Row>
                </Grid>
              </div>
            </div>

            <div class="ui modal" id="replyMailModal">
              <div class="header" id="replyHeader">

                <i class="remove icon" id="closeReplyMsgIcon"></i>

                <div id="senderEmailCon">
                  <text id="senderEmailHeader">To: <a href="#" id="senderEmail">fluffyOreo@gmail.com</a></text>
                </div>

                <div id="adminEmailCon">
                  <text id="adminEmailHeader">From: <a href="#" id="adminEmail">admin@strat.com</a></text>
                </div>

                <div class="emailSub">
                  <text id="replyHeader">Re: <text id="emailSub">Enquiry on Tutorial</text></text>
                </div>
              </div>

              <div class="content" id="replyModalContent">
                <div id="msgEditor">
                  <textarea rows="10" cols="8" id="msgBox"></textarea>
                </div>

                <button class="ui button" type="submit" id="sendReplyBtn">Send</button>

              </div>
            </div>

          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

ReactDOM.render(
<AdminPanel />, document.getElementById('root')
);
