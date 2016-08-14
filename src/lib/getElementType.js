/**
 * Returns a ReactElement type based on the props of the Component.
 * Useful for calculating what type a component should render as.
 *
 * @param {object} props A ReactElement props object
 * @param {string|function} [defaultType='div'] The default ReactElement type
 * @returns {string|function} A ReactElement type
 */
function getElementType(props, defaultType = 'div') {
  const { elementType } = props

  // use elementType passed in by the user
  if (elementType) return elementType

  // infer anchor links
  const hasLinkProp = ['link', 'href', 'onClick'].some(k => props[k] !== undefined)
  if (hasLinkProp) return 'a'

  return defaultType
}

export default getElementType
