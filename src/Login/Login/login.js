import React, {Component} from 'react'
import { Message, Icon, Menu, Segment, Container, Dropdown, Button, Checkbox, Form, Grid } from 'semantic-ui-react'

export default class Login extends Component {

  render(){
    return(
      <Grid>
        <Grid.Row>
          <Grid.Column width={16}>
            <Segment
              textAlign='center'
              style={{ maxHeight: 80, backgroundColor: 'black' }}
              vertical
              >
                <Container>
                  <Menu inverted pointing secondary size='large'>
                    <Menu.Item as='a' active>Home</Menu.Item>
                    <Menu.Item as='a'>News</Menu.Item>
                    <Menu.Item as='a'>Forum</Menu.Item>
                    <Menu.Item as='a'>Documentation</Menu.Item>

                    <Menu.Item position='right'>
                      <Button as='a' inverted><a href="/Header">Log in</a></Button>
                      <Button as='a' inverted style={{ marginLeft: '0.5em' }}>Sign Up</Button>
                    </Menu.Item>
                  </Menu>
                </Container>
              </Segment>
            </Grid.Column>
          </Grid.Row>
          <Grid.Column width ={4}></Grid.Column>

          <Grid.Column width = {8}>
            <Grid.Row columns = {1}>
              <Message
                color = 'blue'
                attached
                header='Welcome to Project Strat!'
                content='Please login to continue.'
              />
            </Grid.Row>

            <Grid.Row>
              <Form className='attached fluid segment'>
                <Form.Field>
                  <label>Username</label>
                  <input placeholder='Username' />
                </Form.Field>

                  <Form.Field>
                    <label>Password</label>
                    <input placeholder='Password' />
                  </Form.Field>

                <Button type='submit' color='green'>Login</Button>

              </Form>
            </Grid.Row>

            <Grid.Row columns = {3}></Grid.Row>

            <Message color='black'  attached='bottom' warning>
              <Icon name='help' />
              Haven't signed up?&nbsp;<a href='/Register'> Sign up</a>&nbsp; here instead.
            </Message>


          </Grid.Column>
          <Grid.Column width ={4}></Grid.Column>
        </Grid>
      )

    }}
