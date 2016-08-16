import { Form } from 'stardust'
import FormField from 'src/collections/Form/FormField'
import FormGroup from 'src/collections/Form/FormGroup'
import * as common from 'test/specs/commonTests'

describe('Form', () => {
  common.isConformant(Form)
  common.hasUIClassName(Form)
  common.hasSubComponents(Form, [FormField, FormGroup])
  common.rendersChildren(Form)
})
