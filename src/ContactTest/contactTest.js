import React from 'react';
import ReactDOM from 'react-dom';
import './contactTest.css';
import { Icon, Grid, Form } from 'semantic-ui-react'


export default class ContactTest extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="header">
          <h1 id="contactHeader">Contact Us</h1>
          <hr />
          <h2 id="contactSubHeader">Get in touch with us. We will get back to you shortly.</h2>
        </div>

        <div className="contents">
          <div className="leftCol">

            <h3 id="leftHeader">Send us a message</h3>
            <div class="ui small form" id="contactForm">
                <div class="field" id="nameField">
                  <input id="nameInput" placeholder="Your Name" type="text" />
                </div>

                <div class="field" id="emailField">
                  <input id="emailInput" placeholder="Email" type="text" maxlength="25"/>
                </div>

                <div class="field" id="msgField">
                  <textarea id="msgInput" rows="8" placeholder="Message"></textarea>
                </div>

                <div class="ui submit button" id="sendBtn">Send</div>

              </div>
          </div>

          <div className="rightCol">

            <h3 id="rightHeader">Contact Info</h3>
            <div className="phoneNo">
                <i class="large call icon" id="callIcon">
                  <h3 id="phone">(+65)91234567</h3>
                </i>
            </div>

            <div className="emailAddr">
              <i class="large mail icon" id="mailIcon">
                <h3 id="mail"><a href="#" id="emailLink">info@strat.com</a></h3>
              </i>
            </div>

          </div>
        </div>

      </div>
    );
  }
}


// ========================================

ReactDOM.render(
<ContactTest />, document.getElementById('root')
);
