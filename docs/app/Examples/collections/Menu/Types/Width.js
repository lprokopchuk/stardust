import React from 'react'
import { Menu } from 'stardust'

const Width = () => {
  return (
    <div>
      <Menu widths={3}>
        <Menu.Item active link>Editorials</Menu.Item>
        <Menu.Item link>Reviews</Menu.Item>
        <Menu.Item link>Upcoming Events</Menu.Item>
      </Menu>

      <Menu widths='three'>
        <Menu.Item link>Editorials</Menu.Item>
        <Menu.Item active link>Reviews</Menu.Item>
        <Menu.Item link>Upcoming Events</Menu.Item>
      </Menu>
    </div>
  )
}

export default Width
