import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect, Link } from 'react-router-dom';

import 'semantic-ui-css/semantic.min.css';


import Header from './Header/header';
import ContactUs from './ContactUs/contact-us';
import Test from './Test/test';

export default class App extends Component {
  constructor() {
    super();
    //this.state({});
  }

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <div className="Contents">
            <Switch>
              <Route exact path="/" component={Header} />
              <Route exact path="/test" component={Test} />
              <Route exact path="/contact-us" component={ContactUs} />

            </Switch>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}
