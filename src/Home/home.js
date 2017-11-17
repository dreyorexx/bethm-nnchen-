import React, { Component } from 'react'
import {Button, Container, Divider, Form,Input, TextArea, Grid, Header, Icon, Image, List, Menu, Segment, Visibility, Modal} from 'semantic-ui-react'

const FixedMenu = () => (
  <Menu fixed='top' size='large'>
    <Container>
      <Menu.Item as='a' active>Home</Menu.Item>
      <Menu.Item as='a'>News</Menu.Item>
      <Menu.Item as='a'>Community Forum</Menu.Item>
      <Menu.Item as='a'>Documentation</Menu.Item>

      <Menu.Menu position='right'>
        <Menu.Item className='item'>
          <Button as='a'>Login</Button>
        </Menu.Item>

        <Menu.Item>
          <Button as='a' primary>Sign Up</Button>
        </Menu.Item>

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
                <Menu.Item as='a' active>Home</Menu.Item>
                <Menu.Item as='a'>News</Menu.Item>
                <Menu.Item as='a'>Community Forum</Menu.Item>
                <Menu.Item as='a'>Documentation</Menu.Item>

                <Menu.Item position='right'>
                  <Button as='a' inverted><a href="/Header">Log in</a></Button>
                  <Button as='a' inverted style={{ marginLeft: '0.5em' }}>Sign Up</Button>
                </Menu.Item>
              </Menu>
            </Container>

            <Container text>
              <Header
                as='h1'
                content='Project Strat'
                inverted
                style={{ fontSize: '4em', fontWeight: 'normal', marginBottom: 0, marginTop: '3em' }}
              />
              <Header
                as='h2'
                content='Learn something?'
                inverted
                style={{ fontSize: '1.7em', fontWeight: 'normal' }}
              />
              <Button primary size='huge'>
                Get Started
                <Icon name='right arrow' />
              </Button>
            </Container>
          </Segment>
        </Visibility>

        <Divider
          as='h4'
          className='header'
          horizontal
          style={{ margin: '3em 0em', textTransform: 'uppercase' }}
        >
          <a href='#'>About Us</a>
        </Divider>

        <Segment style={{ padding: '0em' }} vertical>
          <Grid celled='internally' columns='equal' stackable>
            <Grid.Row textAlign='center'>
              <Grid.Column style={{ paddingBottom: '10em', paddingTop: '10em' }}>
                <Header as='h3' style={{ fontSize: '2em' }}>Who Are We?</Header>
                <p style={{ fontSize: '1.33em' }}>That is what they all say about us</p>
              </Grid.Column>


              <Grid.Column style={{ paddingBottom: '10em', paddingTop: '10em' }}>
                <Header as='h3' style={{ fontSize: '2em' }}>Talk To Us!</Header>
                <p style={{ fontSize: '1.33em' }}>
                  Got burning questions? Drop us questions!
                </p>

                <Modal
                  trigger={<Button onClick={this.handleOpen} color='blue'> <Icon name='send outline' />Message Us!</Button>}
                  open={this.state.modalOpen}
                  onClose={this.handleClose}
                  basic
                  size='small'

                  >
                    <Header icon='comments outline' content='Talk to us!' />
                    <Modal.Content>
                      <Form>
                        <Form.Group widths='equal'>
                          <Form.Field id='form-input-control-first-name' control={Input} label='First name' placeholder='First name' />
                          <Form.Field id='form-input-control-last-name' control={Input} label='Last name' placeholder='Last name' />
                        </Form.Group>
                        <Form.Field id='form-textarea-control-opinion' control={TextArea} label='Opinion' placeholder='Opinion' />
                      </Form>
                    </Modal.Content>

                    <Modal.Actions>
                      <Button color='red' onClick={this.handleClose} inverted>
                        <Icon name='remove' /> Cancel
                      </Button>

                      <Button color='green' onClick={this.handleClose} inverted>
                        <Icon name='send outline' /> Send!
                      </Button>
                    </Modal.Actions>
                  </Modal>

              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>

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
