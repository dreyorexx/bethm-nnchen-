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
                    <Menu.Item as='a'><a href="/Header">Dashboard</a></Menu.Item>
                    <Menu.Item as='a'><a href="/Tutorial">Tutorial</a></Menu.Item>
                    <Menu.Item as='a' ><a href="/Doc">Documentation</a></Menu.Item>

                    <Menu.Menu position='right'>
                      <Dropdown item text='Drey' active>
                        <Dropdown.Menu>
                          <Dropdown.Item active>Profile</Dropdown.Item>
                          <Dropdown.Item>Log Out</Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </Menu.Menu>
                  </Menu>
                </Container>
              </Segment>
            </Grid.Column>
          </Grid.Row>
          <Grid.Column width ={4}></Grid.Column>

          <Grid.Column width = {8}>
            <Grid.Row>

                  <div>
                    <label>Current Username: </label>
                    <Button type='changeUn' color='blue'>Change</Button>
                  </div>

                  <div>
                    <label>Current Email: </label>
                    <Button type='changeEmail' color='blue'>Change</Button>
                  </div>

                  <div>
                    <label>Want to change password? </label>
                    <Button type='changePw' color='blue'>Change</Button>
                  </div>



                <Button type='submit' color='green'>Back</Button>

            </Grid.Row>




          </Grid.Column>
          <Grid.Column width ={4}></Grid.Column>
        </Grid>
      )

    }}
