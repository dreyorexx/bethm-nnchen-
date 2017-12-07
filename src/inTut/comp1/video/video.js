import React, { Component } from 'react'
import { Menu, Segment, Container, Dropdown, Grid, Button, Icon } from 'semantic-ui-react'

export default class Video extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <div>

        <Segment
          style={{ backgroundColor: 'black'}}
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
                        <Menu inverted fixed="top">
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
                          <Menu.Item as='a' ><a href="/Header">Learning Objectives</a>

                        </Menu.Item>

                        <Menu.Item>
                          <Menu.Header>Component 1</Menu.Header>
                          <Menu.Menu>
                            <Menu.Item name='Video' active={activeItem === 'video1'} onClick={this.handleItemClick} active />
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
                      style={{ minHeight: 70,  backgroundColor: 'black', marginTop: -20 }}
                      >

                        <Container>
                          <Segment
                            style={{ color: 'white', backgroundColor: 'black' }}
                            >
                          <Grid.Row>
                          <h2 >Lecture </h2>



                          </Grid.Row>


                          <Grid.Row>
                          <object data="https://www.youtube-nocookie.com/embed/1S0aBV-Waeo" padding-left="600" width="800" height="400"></object>
                          </Grid.Row>
                          </Segment>

                          <Grid.Row>

                              <Button content='Learning Objectives' icon='left arrow' size='small' labelPosition='left' />
                              <Button style ={{marginLeft:"10em"}} size='small' color='yellow'><Icon name='lightbulb'/>Turn on light</Button>



                              <Button style={{float: "right"}} size='small' content='Take The Quiz' icon='right arrow' labelPosition='right' />

                          </Grid.Row>
                        </Container>

                      </Segment>
                    </Grid.Column>
                  </Grid.Row>


                </Grid>
              </Segment>

            </div>
          )
        }
      }
