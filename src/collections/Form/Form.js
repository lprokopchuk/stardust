import cx from 'classnames'
import _ from 'lodash'
import React, { Component, findDOMNode, PropTypes } from 'react'

import {
  getUnhandledProps,
  META,
} from '../../lib'

import FormField from './FormField'

const _meta = {
  name: 'Form',
  type: META.TYPES.COLLECTION,
  props: {
    widths: ['equal'],
  },
}

export default class Form extends Component {
  static _meta = _meta

  static propTypes = {
    /** Primary content */
    children: PropTypes.node,

    /** Additional classes */
    className: PropTypes.string,

    /** Automatically show a loading indicator */
    loading: PropTypes.bool,

    /** Automatically show any success message blocks */
    success: PropTypes.bool,

    /** Automatically show any error message blocks */
    error: PropTypes.bool,

    /** Automatically show any warning message blocks */
    warning: PropTypes.bool,

    /** A form can vary in size */
    size: PropTypes.bool,

    /** Forms can automatically divide fields to be equal width */
    widths: PropTypes.oneOf(_meta.props.widths),
  }

  static Field = FormField

  serialize = () => {
    const form = findDOMNode(this._form)
    const json = {}

    _.each(['input', 'textarea', 'select'], (tag) => {
      _.each(form.getElementsByTagName(tag), (node, index, arr) => {
        const name = node.getAttribute('name')

        switch (node.getAttribute('type')) {
          case 'checkbox':
            json[name] = { checked: node.checked }
            break

          case 'radio':
            json[name] = {
              value: _.find(arr, { name, checked: true }).value,
            }
            break

          default:
            json[name] = { value: node.value }
            break
        }
      })
    })

    return json
  }

  render() {
    const { className, children } = this.props
    const classes = cx(
      'ui',
      'form',
      className,
    )
    const props = getUnhandledProps(Form, this.props)

    return (
      <form {...props} className={classes} ref={(c) => {
        if (c !== null) this._form = c
      }}>
        {children}
      </form>
    )
  }
}
