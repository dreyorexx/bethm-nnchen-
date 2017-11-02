import React from 'react';
import ReactDOM from 'react-dom';
import './contact-us.css';
import { Icon } from 'semantic-ui-react'



export default class ContactUs extends React.Component {
  render() {
    return (

      <div className="wrapper">
        <div className="left">
          <h1 id="h1">Get in touch with us</h1>
          <h3 id="h3">Leave us a message. We will get back to you within 24 hours.</h3>

          <form className="contactForm">
            <div className="nameBox">
              <input type="text" id="name" name="name" placeholder="Name"/>
            </div>
            <div className="emailBox">
              <input type="text" id="email" name="email" placeholder="Email"/>
            </div>
            <div className="subBox">
              <input type="text" id="subject" name="subject" placeholder="Subject"/>
            </div>
            <div className="msg">
              <textarea rows="10" cols="43" id="msg" placeholder="Message"></textarea>
            </div>
            <div className="button">
              <button id="send" type="submit">Send</button>
            </div>
          </form>
        </div>

        <div className="right">
          <h1 id="contactInfo">Contact Info</h1>

          <div className="email">
            <h4 id="eh4">
              <i class="mail icon" id="mailIcon"/>
              <a href="http://www.google.com" id="emailAddr">info@strat.com</a>
            </h4>
          </div>

          <div className="phone">
            <h4 id="ph4">
              <i class="call icon" id="callIcon"/>
              (+65)91234567
            </h4>
          </div>

        </div>
      </div>
      );
    }
  }


// ========================================

ReactDOM.render(
  <ContactUs />, document.getElementById('root')
);
