import React, { Component } from 'react'
import { Dropdown, Icon, Menu, Button } from 'semantic-ui-react'

export default class Header extends Component {

  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {

    const { activeItem } = this.state

    return (
      <Menu>
        <Menu.Item
          name='Home'
          active={activeItem === 'Home'}
          onClick={this.handleItemClick}
        />

        <Menu.Item
          name='contactUs'
          active={activeItem === 'contactUs'}
          onClick={this.handleItemClick}
        />

        <Menu.Item position='right'>
          <Dropdown text='Sign Up' pointing className='link item' position='right'>
            <Dropdown.Menu>

                <Dropdown.Item>Sign Up</Dropdown.Item>
                <Dropdown.Item>
                Login

                </Dropdown.Item>


              </Dropdown.Menu>
            </Dropdown>
          </Menu.Item>
      </Menu>
    )



  }
}
