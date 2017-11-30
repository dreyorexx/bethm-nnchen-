import React, {Component} from 'react'
import { Message, Icon, Menu, Segment, Container, Dropdown, Button, Checkbox, Form, Grid } from 'semantic-ui-react'

export default class Register extends Component {

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
                content='Fill out the form below to sign-up for a new account.'
              />
            </Grid.Row>

            <Grid.Row>
              <Form className='attached fluid segment'>
                <Form.Field>
                  <label>Username</label>
                  <input placeholder='Username' />
                </Form.Field>
                <Form.Group widths='equal'>
                  <Form.Field>
                    <label>Password</label>
                    <input placeholder='Password' />
                  </Form.Field>

                  <Form.Field>
                    <label>Confirm Password</label>
                    <input placeholder='Confirm Password' />
                  </Form.Field>

                </Form.Group>

                <Form.Field>
                  <label>Email</label>
                  <input placeholder='johnappleseed@abc.com' />
                </Form.Field>

                <Form.Field>
                  <Checkbox label='I agree to the Terms and Conditions' />
                </Form.Field>

                <Button type='cancel' color='red'>Cancel</Button>
                <Button type='submit' color='green'>Submit</Button>

              </Form>
            </Grid.Row>

            <Grid.Row columns = {3}></Grid.Row>

            <Message color='black'  attached='bottom' warning>
              <Icon name='help' />
              Already signed up?&nbsp;<a href='/Login'> Login here</a>&nbsp;instead.
            </Message>


          </Grid.Column>
          <Grid.Column width ={4}></Grid.Column>
        </Grid>
      )

    }}
