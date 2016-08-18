import React, { Component } from 'react'
import { Form } from 'stardust'

class FormControlRadioExample extends Component {
  state = {}

  handleRadioClick = (e, { value }) => this.setState({ value })

  render() {
    return (
      <Form>
        <Form.Group className='grouped'>
          <label>A <code>Form.Group</code> of <code>Form.Radio</code>s</label>
          <Form.Radio
            label='Foo'
            name='formRadios'
            value='foo'
            checked={this.state.value === 'foo'}
            onClick={this.handleRadioClick}
          />
          <Form.Radio
            label='Bar'
            name='formRadios'
            value='bar'
            checked={this.state.value === 'bar'}
            onClick={this.handleRadioClick}
          />
          <Form.Radio
            label='Baz'
            name='formRadios'
            value='baz'
            checked={this.state.value === 'baz'}
            onClick={this.handleRadioClick}
          />
        </Form.Group>
      </Form>
    )
  }
}

export default FormControlRadioExample
