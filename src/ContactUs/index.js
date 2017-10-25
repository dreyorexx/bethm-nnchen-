import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class ContactUs extends React.Component {
  render() {
    return (
      <form>
        <div className="contactHead">
          <h1>Get in touch with *insert web name*</h1>
        </div>

        <div className="h3">
          <h3>Send us your enqueries. We will get back to you within 24 hours.</h3>
        </div>

        <div className="contactForm">
          <input type="text" id="name" name="name" placeholder="Name"/>
          <input type="text" id="email" name="email" placeholder="Email"/>
          <input type="text" id="subject" name="subject" placeholder="Subject"/>
          <textarea placeholder="Message"></textarea>
        </div>

      </form>
      );
    }
  }

class Test extends React.Component {
  render() {
    return (
      <div>
        <h1>Contact Us</h1>
        <p1>Pls contact us @</p1>
      </div>
    )
  }
}

// ========================================

ReactDOM.render(
  <ContactUs />,
  document.getElementById('root')
);
