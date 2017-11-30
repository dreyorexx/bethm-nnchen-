import React from 'react';
import ReactDOM from 'react-dom';
import './Contact-us.css';
import { Icon, Grid, Form } from 'semantic-ui-react';

import $ from 'jquery';

export default class ContactUs extends React.Component {
  render() {
    return (

      <Grid id="container">
        <Grid.Row>
          <Grid.Column width={16}>
            <h1 id="contactUsHeader">Contact Us</h1>

            <Grid>
             <Grid.Row className="contents">
              <Grid.Column width={16}>
                <h3 id="subHeader">Get in touch with us. We will get back to you shortly!</h3>

                <Grid className="contents">
                  <Grid.Row>
                    <Grid.Column width={8}>
                      <h3 id="emailHeader">Send Us An Email</h3>

                      <div class="ui small form">
                        <Grid>
                          <Grid.Row>
                            <Grid.Column width={2}></Grid.Column>

                            <Grid.Column width={14}>
                              <div class="field" id="nameField">
                                <div class="ui left icon input">
                                  <input type="text" placeholder="Your Name" required id="nameInput" />
                                  <i class="user icon"></i>
                                </div>
                              </div>

                              <div class="field" id="emailField">
                                <div class="ui left icon input">
                                  <input type="text" placeholder="Email" required id="emailInput" />
                                  <i class="mail icon"></i>
                                </div>
                              </div>

                              <div class="field" id="msgField">
                                <textarea placeholder="Message" id="msgInput" />
                              </div>

                              <div class="ui submit button" id="sendBtn">Send</div>
                            </Grid.Column>
                          </Grid.Row>
                        </Grid>
                      </div>

                    </Grid.Column>

                    <Grid.Column width={8}>
                      <h3 id="contactInfoHeader">Contact Information</h3>

                      <Grid>
                        <Grid.Row>
                          <Grid.Column width={14} id="box">
                            <div class="phoneNo">
                              <i class="large call icon" id="callIcon">
                                <h3 id="phone">(+65)91234567</h3>
                              </i>
                            </div>

                            <div className="emailAddr">
                              <i class="large mail icon" id="mailIcon">
                                <h3 id="mail"><a href="#" id="emailLink">info@strat.com</a></h3>
                              </i>
                            </div>
                          </Grid.Column>

                          <Grid.Column width={2}></Grid.Column>
                        </Grid.Row>
                      </Grid>

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
  <ContactUs />, document.getElementById('root')
);
