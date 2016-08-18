import React from 'react'
import ExampleSection from 'docs/app/Components/ComponentDoc/ExampleSection'
import ComponentExample from 'docs/app/Components/ComponentDoc/ComponentExample'

const FormTypesExamples = () => (
  <ExampleSection title='Field Controls'>
    <ComponentExample
      title={<code>{'<Form.Button />'}</code>}
      description='A Form can use a Button sub component'
      examplePath='collections/Form/FieldControls/FormControlButtonExample'
    />
    <ComponentExample
      title={<code>{'<Form.Checkbox />'}</code>}
      description='A Form can use a Checkbox sub component'
      examplePath='collections/Form/FieldControls/FormControlCheckboxExample'
    />
    <ComponentExample
      title={<code>{'<Form.Input />'}</code>}
      description='A Form can use a Input sub component'
      examplePath='collections/Form/FieldControls/FormControlInputExample'
    />
    <ComponentExample
      title={<code>{'<Form.Radio />'}</code>}
      description='A Form can use a Radio sub component'
      examplePath='collections/Form/FieldControls/FormControlRadioExample'
    />
    <ComponentExample
      title={<code>{'<Form.Select />'}</code>}
      description='A Form can use a Select sub component'
      examplePath='collections/Form/FieldControls/FormControlSelectExample'
    />
    <ComponentExample
      title={<code>{'<Form.TextArea />'}</code>}
      description='A Form can use a TextArea sub component'
      examplePath='collections/Form/FieldControls/FormControlTextAreaExample'
    />
    <ComponentExample
      title={<span><code>{'<Field control={Button} />'}</code></span>}
      description='A Form Field can pass a Button control'
      examplePath='collections/Form/FieldControls/FormFieldControlButtonExample'
    />
    <ComponentExample
      title={<span><code>{'<Field control={Checkbox} />'}</code></span>}
      description='A Form Field can pass a Checkbox control'
      examplePath='collections/Form/FieldControls/FormFieldControlCheckboxExample'
    />
    <ComponentExample
      title={<span><code>{'<Field control={Input} />'}</code></span>}
      description='A Form Field can pass a Input control'
      examplePath='collections/Form/FieldControls/FormFieldControlInputExample'
    />
    <ComponentExample
      title={<span><code>{'<Field control={Radio} />'}</code></span>}
      description='A Form Field can pass a Radio control'
      examplePath='collections/Form/FieldControls/FormFieldControlRadioExample'
    />
    <ComponentExample
      title={<span><code>{'<Field control={Select} />'}</code></span>}
      description='A Form Field can pass a Select control'
      examplePath='collections/Form/FieldControls/FormFieldControlSelectExample'
    />
    <ComponentExample
      title={<span><code>{'<Field control={TextArea} />'}</code></span>}
      description='A Form Field can pass a TextArea control'
      examplePath='collections/Form/FieldControls/FormFieldControlTextAreaExample'
    />
  </ExampleSection>
)

export default FormTypesExamples
