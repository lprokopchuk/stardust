import React from 'react'
import { Button, Form } from 'stardust'

// TODO: update Button usage once Button is updated to v1 API

const FormFieldControlButtonExample = () => (
  <Form>
    <Form.Field control={Button} label='A Button'>
      A Button
    </Form.Field>
  </Form>
)

export default FormFieldControlButtonExample
