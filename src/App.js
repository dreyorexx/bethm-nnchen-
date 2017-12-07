import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect, Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import 'semantic-ui-css/semantic.min.css';

import Header from './Header/header';
import Home from './Home/home';
import Tutorial from './Tutorial';
import Documentation from './Documentation/doc';
import Testing from './Testing/test';
import Register from './Login/Register/register';
import Login from './Login/Login/login';
import Profile from './Login/Profile/profile';
import learnObj from './inTut/learnObj/obj';
import Video from './inTut/comp1/video/video';
import Quiz from './inTut/comp1/quiz/quizPage';


/*
import Question from './Components/question';
import quizQuestions from './api/quizQuestions';
import QuestionCount from './Components/questionCount';
import AnswerOption from './Components/answerOptions';
import Quiz from './Components/quiz';
*/

class App extends Component {
  constructor(props) {
     super(props);


  };


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
              <Route exact path="/Register" component={Register} />
              <Route exact path="/Login" component={Login} />
              <Route exact path="/Profile" component={Profile} />
              <Route exact path="/Obj" component={learnObj} />
              <Route exact path="/Video" component={Video} />
              <Route exact path="/Quiz" component={Quiz} />

            </Switch>
          </div>



        </div>
      </BrowserRouter>
    );
  }
}

export default App;
