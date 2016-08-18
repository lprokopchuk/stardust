import _ from 'lodash'
import React, { Children, Component, PropTypes } from 'react'
import classNames from 'classnames'

import {
  getUnhandledProps,
  META,
  numberToWord,
} from '../../lib'

function FormFieldGroup(props) {
  const { evenlyDivided, children, className } = props

  let fieldCount = 0
  if (evenlyDivided) {
    Children.forEach(children, child => {
      if (_.get(child, 'type._meta.name') === 'FormField') {
        fieldCount += 1
      }
    })
  }
  const classes = classNames(
    numberToWord(fieldCount),
    'fields',
    className,
  )
  const rest = getUnhandledProps(FormFieldGroup, props)

  return (
    <div {...rest} className={classes}>
      {children}
    </div>
  )
}

FormFieldGroup._meta = {
  name: 'FormFieldGroup',
  parent: 'FormField',
  type: META.TYPES.COLLECTION,
}

FormFieldGroup.propTypes = {
  widths: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  children: PropTypes.node,
  className: PropTypes.string,
}

export default FormFieldGroup
