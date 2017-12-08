import React, { Component } from 'react';
import update from 'react-addons-update';
import quizQuestions from '../../../api/quizQuestions';
import Quiz from '../../../Components/quiz';
import Result from '../../../Components/Result';
import { Header, List, Menu, Segment, Container, Dropdown, Grid, Button, Icon } from 'semantic-ui-react'


class quizPage extends Component {

  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
      questionId: 1,
      question: '',
      answerOptions: [],
      answer: '',
      answersCount: {
        correct: 0,
        wrong: 0
      },
      result: ''
    };

    this.handleAnswerSelected = this.handleAnswerSelected.bind(this);
  }

  componentWillMount() {
    const shuffledAnswerOptions = quizQuestions.map((question) => this.shuffleArray(question.answers));
    this.setState({
      question: quizQuestions[0].question,
      answerOptions: shuffledAnswerOptions[0]
    });
  }

  shuffleArray(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  };

  handleAnswerSelected(event) {
    this.setUserAnswer(event.currentTarget.value);

    if (this.state.questionId < quizQuestions.length) {
        setTimeout(() => this.setNextQuestion(), 300);
    } else {
        setTimeout(() => this.setResults(this.getResults()), 300);
    }
  }

  setUserAnswer(answer) {
    const updatedAnswersCount = update(this.state.answersCount, {
      [answer]: {$apply: (currentValue) => currentValue + 1}
    });

    this.setState({
        answersCount: updatedAnswersCount,
        answer: answer
    });
  }

  setNextQuestion() {
    const counter = this.state.counter + 1;
    const questionId = this.state.questionId + 1;

    this.setState({
        counter: counter,
        questionId: questionId,
        question: quizQuestions[counter].question,
        answerOptions: quizQuestions[counter].answers,
        answer: ''
    });
  }

  getResults() {
    const answersCount = this.state.answersCount;
    const answersCountKeys = Object.keys(answersCount);
    const answersCountValues = answersCountKeys.map((key) => answersCount[key]);
    const maxAnswerCount = Math.max.apply(null, answersCountValues);

    return answersCountKeys.filter((key) => answersCount[key] === maxAnswerCount);
  }

  setResults(result) {
    if (result.length === 1) {
      this.setState({ result: result[0] });
    } else {
      this.setState({ result: 'Undetermined' });
    }
  }

  renderQuiz() {
    return (
      <Quiz
        answer={this.state.answer}
        answerOptions={this.state.answerOptions}
        questionId={this.state.questionId}
        question={this.state.question}
        questionTotal={quizQuestions.length}
        onAnswerSelected={this.handleAnswerSelected}
      />
    );
  }

  renderResult() {
    return (
      <Result quizResult={this.state.result} />
    );
  }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state
    return (
      <Segment
        style={{ backgroundColor: '#2e2f30'}}
        >
      <Grid>
        <Grid.Row>
          <Grid.Column width={16}>
            <Segment
              textAlign='center'
              style={{ maxHeight: 70, backgroundColor: 'black' }}
              vertical
              >
                <Container>
                  <Menu inverted fixed='top'>
                    <Menu.Item as='a'><a href="/Header">Dashboard</a></Menu.Item>
                    <Menu.Item as='a' active><a href="/Tutorial">Tutorial</a></Menu.Item>
                    <Menu.Item as='a'><a href="/Doc">Documentation</a></Menu.Item>

                    <Menu.Menu position='right'>
                      <Dropdown item text='Drey'>
                        <Dropdown.Menu>
                          <Dropdown.Item>Profile</Dropdown.Item>
                          <Dropdown.Item>Log Out</Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </Menu.Menu>
                  </Menu>
                </Container>
              </Segment>
            </Grid.Column>
          </Grid.Row>

          <Grid.Row>
            <Grid.Column width={4}>
              <Segment
                style={{maxMargin: 60, backgroundColor: '#2e2f30', paddingLeft: 70}}
                >
                  <Menu pointing vertical>
                    <Menu.Item as='a' ><a href="/Obj">Learning Objectives</a>
                  </Menu.Item>

                  <Menu.Item>
                    <Menu.Header>Component 1</Menu.Header>
                    <Menu.Menu>
                      <Menu.Item name='Video' active={activeItem === 'video1'} onClick={this.handleItemClick} ><a href="/video">Video</a></Menu.Item>
                      <Menu.Item name='Quiz' active={activeItem === 'quiz1'} onClick={this.handleItemClick} active/>
                    </Menu.Menu>
                  </Menu.Item>

                  <Menu.Item>
                    <Menu.Header>Component 2</Menu.Header>
                    <Menu.Menu>
                      <Menu.Item name='Video' active={activeItem === 'video2'} onClick={this.handleItemClick} />
                      <Menu.Item name='Quiz' active={activeItem === 'quiz2'} onClick={this.handleItemClick} />
                    </Menu.Menu>
                  </Menu.Item>

                  <Menu.Item>
                    <Menu.Header>Practise</Menu.Header>
                    <Menu.Menu>
                      <Menu.Item name='Practical 1' active={activeItem === 'practical1'} onClick={this.handleItemClick} />
                      <Menu.Item name='Practical 2' active={activeItem === 'practical2'} onClick={this.handleItemClick} />
                    </Menu.Menu>
                  </Menu.Item>
                </Menu>
              </Segment>
            </Grid.Column>

            <Grid.Column width={11}>
              <Segment
                textAlign='left'
                style={{ minHeight: 70,  backgroundColor: '#2e2f30', marginTop: -20 }}
                >

                  <Container>
                    <Segment
                      style={{ color: 'white', backgroundColor: '#2e2f30' }}
                      >
                    <Grid.Row>
                    <h2 >Test Quiz</h2>
                    </Grid.Row>

                    <Grid.Row>
                      {this.state.result ? this.renderResult() : this.renderQuiz()}
                    </Grid.Row>
                    </Segment>

                    <Grid.Row>
                        <Button style ={{marginLeft:"1em"}} color='brown' content='Back to Lecture' icon='left arrow' size='small' labelPosition='left' />
                        <Button style={{float: "right", marginLeft:"10em"}} size='small' content='Next Lecture' color='blue' icon='right arrow' labelPosition='right' />

                    </Grid.Row>
                  </Container>
                </Segment>
              </Grid.Column>
            </Grid.Row>
    </Grid>
  </Segment>
    );
  }

}

export default quizPage;
