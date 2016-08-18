import React from 'react'

import { META } from '../../lib'
import FormField from './FormField'
import { Button } from '../../elements'

/**
 * Sugar for <Form.Field control={Button} />
 */
function FormButton(props) {
  return <FormField control={Button} {...props} />
}

FormButton._meta = {
  name: 'FormFieldButton',
  parent: 'FormField',
  type: META.TYPES.COLLECTION,
}

export default FormButton
