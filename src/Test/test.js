import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { Icon, Grid, Button, Modal } from 'semantic-ui-react';

import './Test.css';
import $ from 'jquery';

export default class Test extends React.Component {

  componentDidMount=()=>{
    $(function() {
      $('.pop-up').hide();
      $('.pop-up').fadeIn(1000);

      $('.close-button').click(function (e) {

      $('.pop-up').fadeOut(700);
      $('#overlay').removeClass('blur-in');
      $('#overlay').addClass('blur-out');

      });
    });
  }

  render() {
    return (
      <div>
        <div id="overlay" class="cover blur-in">
          <div class="content">
            Your content goes here
          </div>
        </div>

        <div class="pop-up">
          <a href="#" class="close-button">&#10006;</a>
          Your modal content goes here.
        </div>
      </div>

    );
  }
}


ReactDOM.render(
<Test />, document.getElementById('root')
);
