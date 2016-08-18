import React from 'react'
import { Form } from 'stardust'

const options = [
  { text: 'Male', value: 'male' },
  { text: 'Female', value: 'female' },
]

const FormControlSelectExample = () => (
  <Form>
    <Form.Select label='A Form.Select' options={options} />
  </Form>
)

export default FormControlSelectExample
