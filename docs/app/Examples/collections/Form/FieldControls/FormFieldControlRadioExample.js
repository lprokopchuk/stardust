import React, { Component } from 'react'
import { Form, Radio } from 'stardust'

class FormFieldControlRadioExample extends Component {
  state = {}

  handleRadioClick = (e, { value }) => this.setState({ value })

  render() {
    const { value } = this.state
    return (
      <Form>
        <Form.Group>
          <label>A <code>Form.Group</code> containing <code>Form.Radio</code>s</label>
          <Form.Field
            control={Radio}
            label='Foo'
            name='fieldControlRadios'
            value='foo'
            checked={value === 'foo'}
            onClick={this.handleRadioClick}
          />
          <Form.Field
            control={Radio}
            label='Bar'
            name='fieldControlRadios'
            value='bar'
            checked={value === 'bar'}
            onClick={this.handleRadioClick}
          />
          <Form.Field
            control={Radio}
            label='Baz'
            name='fieldControlRadios'
            value='baz'
            checked={value === 'baz'}
            onClick={this.handleRadioClick}
          />
        </Form.Group>
      </Form>
    )
  }
}

export default FormFieldControlRadioExample
