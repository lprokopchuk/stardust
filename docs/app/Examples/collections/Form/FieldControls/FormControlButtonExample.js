import React from 'react'
import { Form } from 'stardust'

const { Field } = Form

const FormControlButtonExample = () => (
  <Form>
    <Field control='input'></Field>
    <Field control='input' />
    <Field.Button />
    <Field.Checkbox />
    <Form.ButtonField label='A Form.Button'>
      Form.Button
    </Form.ButtonField>
  </Form>
)

export default FormControlButtonExample
