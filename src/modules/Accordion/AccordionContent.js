import React, { PropTypes } from 'react'
import cx from 'classnames'

import { ContentPart } from '../../parts'
import { getUnhandledProps, META, useKeyOnly } from '../../lib'

// ========================================================
// Brainstorming ways to abstract className buildup, etc.
//
// const AccordionContent = createContentPart({
//   cx: ({ active }) => [
//     useKeyOnly(active, 'active'),
//   ],
//   propTypes: {
//     /** Whether or not the content is visible. */
//     active: PropTypes.bool,
//   },
//   _meta: {
//     name: 'AccordionContent',
//     type: META.TYPES.MODULE,
//     parent: 'Accordion',
//   },
// })
// --------------------------------------------------------

function AccordionContent(props) {
  const { active, className, children } = props
  const classes = cx(
    useKeyOnly(active, 'active'),
    className
  )

  const rest = getUnhandledProps(AccordionContent, props)

  return (
    <ContentPart {...rest} className={classes}>
      {children}
    </ContentPart>
  )
}

AccordionContent.propTypes = {
  ...ContentPart.propTypes,
  /** Whether or not the content is visible. */
  active: PropTypes.bool,
}

AccordionContent._meta = {
  ...ContentPart._meta,
  name: 'AccordionContent',
  type: META.TYPES.MODULE,
  parent: 'Accordion',
}

export default AccordionContent