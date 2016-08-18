import Form from 'src/collections/Form/Form'
import FormButton from 'src/collections/Form/FormButton'
import FormCheckbox from 'src/collections/Form/FormCheckbox'
import FormDropdown from 'src/collections/Form/FormDropdown'
import FormField from 'src/collections/Form/FormField'
import FormGroup from 'src/collections/Form/FormGroup'
import FormInput from 'src/collections/Form/FormInput'
import FormRadio from 'src/collections/Form/FormRadio'
import FormSelect from 'src/collections/Form/FormSelect'
import FormTextArea from 'src/collections/Form/FormTextArea'

import * as common from 'test/specs/commonTests'

describe('Form', () => {
  common.isConformant(Form)
  common.hasUIClassName(Form)
  common.hasSubComponents(Form, [
    FormButton,
    FormCheckbox,
    FormDropdown,
    FormTextArea,
    FormField,
    FormGroup,
    FormInput,
    FormRadio,
    FormSelect,
  ])
  common.rendersChildren(Form)
})
