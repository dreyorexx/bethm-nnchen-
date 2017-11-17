import React, { Component } from 'react'
import {Button, Container, Divider, Form,Input, TextArea, Grid, Header, Icon, Image, List, Menu, Segment, Visibility, Modal, Dropdown} from 'semantic-ui-react'

const FixedMenu = () => (
  <Menu fixed='top' size='large'>
    <Container>
      <Menu.Item as='a'>><a href="/Header">Dashboard</a></Menu.Item>
      <Menu.Item as='a' active><a href="/Tutorial">Tutorial</a></Menu.Item>
      <Menu.Item as='a'>><a href="/Doc">Documentation</a></Menu.Item>

      <Menu.Menu position='right'>
          <Dropdown item text='Drey'>
            <Dropdown.Menu>
              <Dropdown.Item>Profile</Dropdown.Item>
              <Dropdown.Item>Log Out</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Menu.Menu>
    </Container>
  </Menu>
)

export default class HomepageLayout extends Component {
  state = {}

  hideFixedMenu = () => this.setState({ visible: false })
  showFixedMenu = () => this.setState({ visible: true })
  state = { modalOpen: false }

  handleOpen = () => this.setState({ modalOpen: true })

  handleClose = () => this.setState({ modalOpen: false })

  handleClick = (e) => {
    e.preventDefault();
    console.log('The link was clicked.');
  };

  render() {
    const { visible } = this.state

    return (
      <div>
        { visible ? <FixedMenu /> : null }

        <Visibility
          onBottomPassed={this.showFixedMenu}
          onBottomVisible={this.hideFixedMenu}
          once={false}
          >
            <Segment
              inverted
              textAlign='center'
              style={{ minHeight: 700, padding: '1em 0em' }}
              vertical
              >
                <Container>
                  <Menu inverted pointing secondary size='large'>
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
            </Visibility>

                <Segment inverted vertical style={{ padding: '5em 0em' }}>
                  <Container>
                    <Grid divided inverted stackable>
                      <Grid.Row>
                        <Grid.Column width={3}>
                          <Header inverted as='h4' content='About' />
                          <List link inverted>
                            <List.Item as='a'>Contact Us</List.Item>
                          </List>
                        </Grid.Column>

                        <Grid.Column width={3}>
                          <Header inverted as='h4' content='Services' />
                          <List link inverted>
                            <List.Item as='a'>Contact Us</List.Item>
                            <List.Item as='a'>FAQ</List.Item>
                          </List>
                        </Grid.Column>
                      </Grid.Row>
                    </Grid>
                  </Container>
                </Segment>
              </div>
            )
          }
        }
