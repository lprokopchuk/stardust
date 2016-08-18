import React from 'react'

import FormCheckbox from 'src/collections/Form/FormCheckbox'
import * as common from 'test/specs/commonTests'

describe('FormCheckbox', () => {
  common.isConformant(FormCheckbox)
  common.rendersChildren(FormCheckbox)

  describe('renders a FormField with a Checkbox child', () => {
    it('does not add a label child by default', () => {
      const wrapper = shallow(<FormCheckbox />)

      wrapper.should.have.descendants('Checkbox')
    })
  })
})
