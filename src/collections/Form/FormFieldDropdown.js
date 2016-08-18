import React from 'react'

import { META } from '../../lib'
import FormField from './FormField'
import { Dropdown } from '../../modules'

/**
 * Sugar for <Form.Field control={Dropdown} />
 */
function FormDropdown(props) {
  return <FormField control={Dropdown} {...props} />
}

FormDropdown._meta = {
  name: 'FormFieldDropdown',
  parent: 'FormField',
  type: META.TYPES.COLLECTION,
}

export default FormDropdown
