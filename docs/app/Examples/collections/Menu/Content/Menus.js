import React from 'react'
import { Button, Menu } from 'stardust'

const Menus = () => {
  return (
    <Menu>
      <Menu.Item href="http://www.google.com">Visit Google</Menu.Item>
      <Menu.Item link>Link via prop</Menu.Item>
      <Menu.Item onClick={}>Javascript Link</Menu.Item>
    </Menu>
  )
}

export default Menus
