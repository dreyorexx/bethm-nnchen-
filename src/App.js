import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect, Link } from 'react-router-dom';

import 'semantic-ui-css/semantic.min.css';

import Header from './Header/header';
import ContactTest from './ContactTest/ContactTest';
import ContactUs from './ContactUs/Contact-us';
import Dashboard from './Dashboard/Dashboard';
import Test from './Test/Test';
import InteractiveTut from './InteractiveTut/InteractiveTut';
import AdminPanel from './AdminPanel/AdminPanel';
import AdminPanelLogin from './AdminPanelLogin/AdminPanelLogin';
import Inbox from './AdminPanel/Inbox';

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
              <Route exact path="/ContactTest" component={ContactTest} />
              <Route exact path="/Contact-us" component={ContactUs} />
              <Route exact path="/Dashboard" component={Dashboard} />
              <Route exact path="/Test" component={Test} />
              <Route exact path="/InteractiveTut" component={InteractiveTut} />
              <Route exact path="/AdminPanel" component={AdminPanel} />
              <Route exact path="/AdminPanelLogin" component={AdminPanelLogin} />
              <Route exact path="/Inbox" component={Inbox} />
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}
