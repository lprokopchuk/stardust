import React from 'react'

import FormField from 'src/collections/Form/FormField'
import * as common from 'test/specs/commonTests'

describe.only('FormField', () => {
  // common.isConformant(FormField)
  // common.implementsNumberToWordProp(FormField, 'width')
  // common.propKeyOnlyToClassName(FormField, 'error')
  // common.propKeyOnlyToClassName(FormField, 'disabled')
  // common.propKeyOnlyToClassName(FormField, 'inline')
  // common.propKeyOnlyToClassName(FormField, 'required', { label: '' })
  // common.rendersChildren(FormField)

  describe('control', () => {
    it('adds an HTML element child of the same type', () => {
      const controls = ['button', 'input', 'select', 'textarea']

      render(<FormField control='input' />)
        .should.have.descendants('input')
      // console.log(wrapper.debug())
      controls.forEach((control) => {
      })
    })
  })

  // describe('label', () => {
  //   it('does not add a label child by default', () => {
  //     shallow(<FormField />)
  //       .should.not.have.descendants('label')
  //   })
  //   it('adds a label child', () => {
  //     const wrapper = shallow(<FormField label='First Name' />)
  //     wrapper
  //       .should.have.descendants('label')
  //
  //     wrapper
  //       .find('label')
  //       .should.contain.text('First Name')
  //   })
  // })
})
