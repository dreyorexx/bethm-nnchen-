import React from 'react';
import ReactDOM from 'react-dom';
import './contact-us.css';


export default class ContactUs extends React.Component {
  render() {
    return (

      <div className="containerLeft">
        <form className="form">
          <div className="contactHead">
            <h1>Get in touch with us</h1>
          </div>

          <div className="h3">
            <h3>Send us your enqueries. We will get back to you within 24 hours.</h3>
          </div>

          <div className="contactForm">
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
              <textarea rows="10" cols="55" id="msg" placeholder="Message"></textarea>
            </div>
          </div>

          <div>
            <button id="send" type="submit">Send</button>
            <button id="cancel" type="cancel">Cancel</button>
          </div>
        </form>

        <div>
          <h1>HI</h1>
        </div>
      </div>
      );
    }
  }


// ========================================

ReactDOM.render(
  <ContactUs />, document.getElementById('root')
);
