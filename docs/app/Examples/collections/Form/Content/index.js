import React, { Component } from 'react'
import ExampleSection from 'docs/app/Components/ComponentDoc/ExampleSection'
import ComponentExample from 'docs/app/Components/ComponentDoc/ComponentExample'

export default class FormTypesExamples extends Component {
  render() {
    return (
      <ExampleSection title='Content'>
        <ComponentExample
          title='Field'
          description='A field is a form element containing a label and an input.'
          examplePath='collections/Form/Content/FormFieldExample'
        />
        <ComponentExample
          title='Field Control'
          description='A field can define a control prop.'
          examplePath='collections/Form/Content/FormFieldControlExample'
        />
        <ComponentExample
          description='A field control can be a plain HTML element'
          examplePath='collections/Form/Content/FormFieldHTMLControlExample'
        />
        {/* Component */}
        <ComponentExample
          description='A field control can be a Button'
          examplePath='collections/Form/Content/FormFieldButtonControlExample'
        />
        <ComponentExample
          description='A field control can be a Checkbox'
          examplePath='collections/Form/Content/FormFieldCheckboxControlExample'
        />
        <ComponentExample
          description='A field control can be a Form'
          examplePath='collections/Form/Content/FormFieldFormControlExample'
        />
        <ComponentExample
          description='A field control can be a Input'
          examplePath='collections/Form/Content/FormFieldInputControlExample'
        />
        <ComponentExample
          description='A field control can be a Radio'
          examplePath='collections/Form/Content/FormFieldRadioControlExample'
        />
        <ComponentExample
          description='A field control can be a Select'
          examplePath='collections/Form/Content/FormFieldSelectControlExample'
        />
        <ComponentExample
          description='A field control can be a TextArea'
          examplePath='collections/Form/Content/FormFieldTextAreaControlExample'
        />
        {/*
        <ComponentExample
          title='Field Input'
          description='A field has an Input.'
          examplePath='collections/Form/Content/FormFieldInputExample'
        />
        */}
      </ExampleSection>
    )
  }
}
