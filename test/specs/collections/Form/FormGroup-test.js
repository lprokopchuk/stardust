import _ from 'lodash'
import React from 'react'

import FormGroup from 'src/collections/Form/FormGroup'
import FormField from 'src/collections/Form/FormField'
import * as common from 'test/specs/commonTests'
import { numberToWord } from 'src/lib'

describe('FormGroup', () => {
  common.isConformant(FormGroup)
  common.rendersChildren(FormGroup)

  describe('evenlyDivided', () => {
    it('adds the word class for the number of child fields', () => {
      const children = _.times(_.random(1, 16), (i) => <FormField key={i} />)
      const className = `${numberToWord(children.length)} fields`

      shallow(<FormGroup evenlyDivided>{children}</FormGroup>)
        .should.have.className(className)
    })
  })
})
