import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect, Link } from 'react-router-dom';

import 'semantic-ui-css/semantic.min.css';

import Header from './Header/header';
import Home from './Home/home';
import Tutorial from './Tutorial';
import Documentation from './Documentation/doc';
import Testing from './Testing/test';

class App extends Component {
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
              <Route exact path="/" component={Home} />
              <Route exact path="/Header" component={Header} />
              <Route exact path="/Tutorial" component={Tutorial} />
              <Route exact path="/Doc" component={Documentation} />
              <Route exact path="/Test" component={Testing} />
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
