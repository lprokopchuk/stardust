import React, { PropTypes } from 'react'
import cx from 'classnames'

import { Content } from '../../parts'
import { getUnhandledProps, META, useKeyOnly } from '../../lib'

function AccordionContent(props) {
  const { active, className, children } = props
  const classes = cx(
    useKeyOnly(active, 'active'),
    className
  )

  const rest = getUnhandledProps(AccordionContent, props)

  return (
    <Content {...rest} className={classes}>
      {children}
    </Content>
  )
}

AccordionContent.propTypes = {
  ...Content.propTypes,
  /** Whether or not the content is visible. */
  active: PropTypes.bool,
}

AccordionContent._meta = {
  ...Content._meta,
  name: 'AccordionContent',
  type: META.TYPES.MODULE,
  parent: 'Accordion',
}

export default AccordionContent
