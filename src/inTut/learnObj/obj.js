import React, { Component } from 'react'
import { Header, Menu, Segment, Container, Dropdown, Grid, List } from 'semantic-ui-react'

export default class Objective extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <div >

        <Segment
          style={{ backgroundColor: 'black'}}
          >
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

                      style={{maxMargin: 60, backgroundColor: 'black', paddingLeft: 70}}

                      >
                        <Menu pointing vertical>
                          <Menu.Item as='a' active><a href="/Header">Learning Objectives</a>

                        </Menu.Item>

                        <Menu.Item>
                          <Menu.Header>Component 1</Menu.Header>
                          <Menu.Menu>
                            <Menu.Item name='Video' active={activeItem === 'video1'} onClick={this.handleItemClick}><a href="/video">Video</a></Menu.Item>
                            <Menu.Item name='Quiz' active={activeItem === 'quiz1'} onClick={this.handleItemClick} />
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
                      style={{ minHeight: 70, padding:"10em, 50em, 100em, 30em", backgroundColor: 'black' }}


                      >
                        <Container>
                          <Segment>
                            <h2>Learning Objectives</h2>
                            <Segment>
                              <List divided relaxed>
                                <List.Item>
                                  <List.Content>
                                    <List.Header>Understand SQL Injection</List.Header>
                                    <List.Item as='li'>Part 1</List.Item>
                                    <List.Item as='li'>Part 2</List.Item>
                                  </List.Content>
                                </List.Item>


                                <List.Item>
                                  <List.Content>
                                    <List.Header>Execute SQL Injection</List.Header>
                                    <List.Item as='li'>Part 1</List.Item>
                                    <List.Item as='li'>Part 2</List.Item>
                                  </List.Content>
                                </List.Item>

                              </List>
                            </Segment>
                          </Segment>
                        </Container>

                      </Segment>
                    </Grid.Column>
                  </Grid.Row>


                </Grid>

              <Segment vertical style={{ padding: '5em 0em', backgroundColor:'black' }}>
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
              </Segment>
            </div>
          )
        }
      }
