import React from 'react'
import { Select, Form } from 'stardust'

const options = [
  { text: 'Male', value: 'male' },
  { text: 'Female', value: 'female' },
]

const FormFieldControlSelectExample = () => (
  <Form>
    <Form.Field control={Select} label='A Select' options={options} />
  </Form>
)

export default FormFieldControlSelectExample
