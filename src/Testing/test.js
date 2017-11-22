import React, { Component } from 'react'
import { Menu, Segment, Container, Dropdown } from 'semantic-ui-react'

export default class MenuExampleVerticalSecondary extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
        <div>
          <Segment
            inverted
            textAlign='center'
            style={{ maxHeight: 80 }}
            vertical
            >
              <Container>
                <Menu inverted pointing secondary size='large'>
                  <Menu.Item as='a'><a href="/Header">Dashboard</a></Menu.Item>
                  <Menu.Item as='a'><a href="/Tutorial">Tutorial</a></Menu.Item>
                  <Menu.Item as='a' active><a href="/Doc">Documentation</a></Menu.Item>

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

            <Segment
              inverted
              style={{maxMargin: 60}}
              >
              <Menu pointing vertical>
                <Menu.Item as='a' active><a href="/Header">Learning Objectives</a>




                </Menu.Item>

                <Menu.Item>
                  <Menu.Header>Component 1</Menu.Header>
                    <Menu.Menu>
                      <Menu.Item name='Video' active={activeItem === 'video1'} onClick={this.handleItemClick} />
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

          <Segment
            textAlign='center'
            style={{ minHeight: 70,    padding:"10em, 50em, 100em, 30em" }}

            >
              <Container>
                <object data="http://www.youtube.com/embed/W7qWa52k-nE" padding-left="600" width="560" height="315"></object>
              </Container>

            </Segment>

      </div>
    )
  }
}
