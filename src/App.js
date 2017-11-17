import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect, Link } from 'react-router-dom';

import 'semantic-ui-css/semantic.min.css';


import Header from './Header/header';
import ContactTest from './ContactTest/contactTest';
import ContactUs from './ContactUs/contact-us';
import Dashboard from './Dashboard/dashboard';
import Test from './Test/test';
import InteractiveTut from './InteractiveTut/interactiveTut';


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
              <Route exact path="/contactTest" component={ContactTest} />
              <Route exact path="/contact-us" component={ContactUs} />
              <Route exact path="/dashboard" component={Dashboard} />
              <Route exact path="/test" component={Test} />
              <Route exact path="/interactiveTut" component={InteractiveTut} />
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}
