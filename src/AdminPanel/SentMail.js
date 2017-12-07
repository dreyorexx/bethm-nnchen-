import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './SentMail.css';

import { Grid, Menu, Button, Icon, Modal, Dimmer, Input, Checkbox, Item } from 'semantic-ui-react';
import $ from 'jquery';
import * as jquery from 'jquery';
import { findDOMNode } from 'react-dom';

import '../AdminPanelLogin/AdminPanelLogin';

export default class SentMail extends React.Component {

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

    $('#replyMsgLink').click(function(){
      $('#replyMailModal').show();
    });

    $('#replyMailIcon').click(function(){
      $('#replyMailModal').show();
      $('#msgModal').hide();
    });

    $('.closeMsgIcon').click(function(){
        $('#msgModal').hide();
        $('#replyMailModal').hide();
    });
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
                <a class="item" className="item" href="/Inbox">Inbox</a>
              </div>

              <div>
                <a class="item" className="item" href="/SentMail"><h4>Sent Mail</h4></a>
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
                  <h1 id="sentMailHeader">Sent Mail</h1>
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
                        <td><a href="#" id="msgLink">Enquiry on tutorial</a></td>
                        <td><a href="#" id="replyMsgLink">Reply</a></td>
                      </tr>
                    </tbody>
                  </table>

                </Grid.Column>
              </Grid.Row>
            </Grid>

            <div class="ui modal" id="msgModal">
              <div class="header" id="msgHeaderCon">

                <Grid>
                  <Grid.Row>
                    <Grid.Column width={11}>
                      <div class="senderEmailCon">
                        <Grid>
                          <Grid.Row id="senderEmailConRow">
                            <Grid.Column width={2}>
                              <text class="senderEmailHeader">To:</text>
                            </Grid.Column>

                            <Grid.Column width={10}>
                              <a href="#" id="senderEmail">fluffyOreo@gmail.com</a>
                            </Grid.Column>
                          </Grid.Row>
                        </Grid>
                      </div>
                    </Grid.Column>

                    <Grid.Column width={3}>
                      <p id="timeDateTag"><span id="emailDate">06-Dec-17 </span><span id="emailTime">10.50pm</span></p>
                    </Grid.Column>

                    <Grid.Column width={1}>
                      <i class="reply icon" id="replyMailIcon"></i>
                    </Grid.Column>

                    <Grid.Column width={1}>
                      <i class="remove icon closeMsgIcon"></i>
                    </Grid.Column>
                  </Grid.Row>

                  <Grid.Row>
                    <Grid.Column width={11}>
                      <div class="adminEmailCon">
                        <Grid>
                          <Grid.Row id="adminEmailConRow">
                            <Grid.Column width={2}>
                              <text class="adminEmailHeader">From:</text>
                            </Grid.Column>

                            <Grid.Column width={10}>
                              <a href="#" id="adminEmail">admin@strat.com</a>
                            </Grid.Column>
                          </Grid.Row>
                        </Grid>
                      </div>
                    </Grid.Column>
                  </Grid.Row>

                  <Grid.Row id="emailSubCon">
                    <Grid.Column width={11}>
                      <div id="emailSubConRow">
                        <Grid>
                          <Grid.Row>
                            <Grid.Column width={2}>
                              <text class="emailSubHeader">Subject:</text>
                            </Grid.Column>

                            <Grid.Column width={10}>
                              <text class="emailSub">Enquiry on Tutorial</text>
                            </Grid.Column>
                          </Grid.Row>
                        </Grid>
                      </div>
                    </Grid.Column>
                  </Grid.Row>

                </Grid>
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

                <Grid>
                  <Grid.Row>
                    <Grid.Column width={11}>
                      <div class="senderEmailCon">
                        <Grid>
                          <Grid.Row id="senderEmailConRow2">
                            <Grid.Column width={2}>
                              <text id="senderEmailHeader">To:</text>
                            </Grid.Column>

                            <Grid.Column width={10}>
                              <a href="#" id="senderEmail">fluffyOreo@gmail.com</a>
                            </Grid.Column>
                          </Grid.Row>
                        </Grid>
                      </div>
                    </Grid.Column>

                    <Grid.Column width={4}></Grid.Column>

                    <Grid.Column width={1}>
                      <i class="remove icon closeMsgIcon"></i>
                    </Grid.Column>
                  </Grid.Row>

                  <Grid.Row>
                    <Grid.Column width={11}>
                      <div class="adminEmailCon">
                        <Grid>
                          <Grid.Row id="adminEmailConRow2">
                            <Grid.Column width={2}>
                              <text id="adminEmailHeader">From:</text>
                            </Grid.Column>

                            <Grid.Column width={10}>
                              <a href="#" id="adminEmail">admin@strat.com</a>
                            </Grid.Column>
                          </Grid.Row>
                        </Grid>
                      </div>
                    </Grid.Column>
                  </Grid.Row>

                  <Grid.Row>
                    <Grid.Column width={11}>
                      <div class="emailSub">
                        <Grid>
                          <Grid.Row id="emailSubConRow2">
                            <Grid.Column width={2}>
                              <text id="replyHeader">Re:</text>
                            </Grid.Column>

                            <Grid.Column width={10}>
                              <text id="emailSub">Enquiry on Tutorial</text>
                            </Grid.Column>
                          </Grid.Row>
                        </Grid>
                      </div>
                    </Grid.Column>
                  </Grid.Row>

                </Grid>
              </div>

              <div class="content" id="replyModalContent">
                <Grid>
                  <Grid.Row>
                    <Grid.Column width={16}>
                      <div id="msgEditor">
                        <textarea rows="10" cols="8" id="msgBox"></textarea>
                      </div>
                    </Grid.Column>
                  </Grid.Row>

                  <Grid.Row>
                    <Grid.Column width={16}>
                      <button class="ui button" type="submit" id="sendReplyBtn">Send</button>
                    </Grid.Column>
                  </Grid.Row>
                </Grid>
              </div>
            </div>

          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

ReactDOM.render(
<SentMail />, document.getElementById('root')
);
