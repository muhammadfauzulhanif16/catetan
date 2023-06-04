import React from 'react'
import {
  IconButton,
  Menu as MenuChakra,
  MenuButton,
  MenuItem,
  MenuList
} from '@chakra-ui/react'
import { MoreHorizontal } from '@emotion-icons/fluentui-system-regular'
import PropTypes from 'prop-types'
import { menuList } from '../data/menuList'
import { useNavigate } from 'react-router-dom'

export const Menu = ({ data, onArchive, onDelete, setPathName, active }) => {
  const navigate = useNavigate()
  const menus = menuList(data, navigate, onArchive, onDelete)

  return (
    <MenuChakra>
      <MenuButton
        as={IconButton}
        bgColor='yellow.100'
        _hover={{
          bgColor: 'yellow.200'
        }}
        _active={{
          bgColor: 'yellow.200'
        }}
        icon={<MoreHorizontal width={16} height={16} />}
      />

      <MenuList>
        {menus.map(({ text, icon, action, color }, id) => (
          <MenuItem
            key={id}
            icon={icon}
            onClick={() => {
              setPathName(text === 'View' ? '' : active)
              action(`${text === 'View' ? '/notes/' : ''}${data.id}`)
            }}
            color={`${color}.300`}
          >
            {`${text} note`}
          </MenuItem>
        ))}
      </MenuList>
    </MenuChakra>
  )
}

Menu.propTypes = {
  data: PropTypes.object,
  onArchive: PropTypes.func,
  onDelete: PropTypes.func,
  setPathName: PropTypes.func,
  active: PropTypes.string
}
