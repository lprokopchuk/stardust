import React from 'react'

import { META } from '../../lib'
import FormField from './FormField'
import { TextArea } from '../../addons'

/**
 * Sugar for <Form.Field control={TextArea} />
 * @see Form
 * @see TextArea
 */
function FormTextArea(props) {
  return <FormField control={TextArea} {...props} />
}

FormTextArea._meta = {
  name: 'FormFieldTextArea',
  parent: 'FormField',
  type: META.TYPES.COLLECTION,
}

export default FormTextArea
