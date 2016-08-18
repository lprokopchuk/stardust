import React from 'react'
import { Form } from 'stardust'

const FormFieldHTMLControlExample = () => (
  <Form>
    <Form.Field control='input' label='An input' />
    <Form.Field control='select' label='A select'>
      <option value='male'>Male</option>
      <option value='female'>Female</option>
    </Form.Field>
    <Form.Field control='textarea' label='A textarea' />
    <Form.Field control='button' label='A button'>
      HTML Button
    </Form.Field>
  </Form>
)

export default FormFieldHTMLControlExample
