import React, { Component } from 'react'
import { Form } from 'stardust'

const options = [{ text: 'Male', value: 'male' }, { text: 'Female', value: 'female' }]

export default class FormControlExample extends Component {
  state = {}

  handleRadioClick = (e, { value }) => this.setState({ value })

  render() {
    const { value } = this.state
    return (
      <Form>
        <Form.Input label='A Form.Input' />
        <Form.Dropdown label='A Form.Dropdown' options={options} />
        <Form.Select label='A Form.Select' options={options} />
        <Form.Checkbox label='I agree to the Terms and Conditions' />
        <Form.Group>
          <label>A <code>Form.Group</code> of <code>Form.Radio</code>s</label>
          <Form.Radio label='Foo' name='radios' value='foo' checked={value === 'foo'} onClick={this.handleRadioClick} />
          <Form.Radio label='Bar' name='radios' value='bar' checked={value === 'bar'} onClick={this.handleRadioClick} />
          <Form.Radio label='Baz' name='radios' value='baz' checked={value === 'baz'} onClick={this.handleRadioClick} />
        </Form.Group>
        <Form.TextArea label='A Form.TextArea' />
      </Form>
    )
  }
}

export default FormControlExample
