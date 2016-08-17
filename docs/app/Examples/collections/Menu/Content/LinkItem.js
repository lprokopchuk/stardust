import React from 'react'
import { Button, Menu } from 'stardust'

const handleClick = () => console.log(1)

const LinkItem = () => {
  return (
    <Menu>
      <Menu.Item href="http://www.google.com">Visit Google</Menu.Item>
      <Menu.Item link>Link via prop</Menu.Item>
      <Menu.Item onClick={handleClick}>Javascript Link</Menu.Item>
    </Menu>
  )
}

export default LinkItem
