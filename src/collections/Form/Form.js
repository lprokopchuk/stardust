import cx from 'classnames'
import _ from 'lodash'
import React, { Component, PropTypes } from 'react'

import {
  getUnhandledProps,
  META,
} from '../../lib'
import FormField from './FormField'
import FormGroup from './FormGroup'

export default class Form extends Component {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
  }

  static _meta = {
    name: 'Form',
    type: META.TYPES.COLLECTION,
  }

  static Field = FormField
  static Group = FormGroup

  serializeJson = () => {
    const form = this.refs.element
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
    const classes = cx(
      'ui',
      this.props.className,
      'form'
    )
    const props = getUnhandledProps(Form, this.props)
    return (
      <form {...props} className={classes}>
        {this.props.children}
      </form>
    )
  }
}
