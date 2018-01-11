import React, {Component} from 'react'
import { Form, Input } from 'semantic-ui-react'

class quizMan extends Component {
  state = {}
  handleChange = (e, { value }) => this.setState({ value })
  render(){
    const { value } = this.state
    return(
      <Form>
        <Form.Field required>
          <label>Question 1</label>
          <Form.Radio label='Option 1' value='sm' checked={value === 'sm'} onChange={this.handleChange} />
          <Form.Radio label='Option 2' value='sm' checked={value === 'sm'} onChange={this.handleChange} />
          <Form.Radio label='Option 3' value='sm' checked={value === 'sm'} onChange={this.handleChange} />
          <Form.Radio value='sm' checked={value === 'sm'} onChange={this.handleChange}> <Input placeholder='Full name' /></Form.Radio>
          <Form.Field>
            <Form.Radio /><input />

          </Form.Field>
        </Form.Field>
      </Form>
    )
  }


}

export default quizMan
