import React, { useContext } from 'react'
import {
  IconButton,
  Menu as MenuChakra,
  MenuButton,
  MenuItem,
  MenuList,
  useToast
} from '@chakra-ui/react'
import { MoreHorizontal } from '@emotion-icons/fluentui-system-regular'
import PropTypes from 'prop-types'
import { menuList } from '../data/menuList'
import { ThemeContext } from '../context/Theme'
import { NotesContext } from '../context/Notes'
import {
  deleteNote,
  editArchiveNote,
  editUnarchiveNote,
  getActiveNotes,
  getArchiveNotes
} from '../api'
import { useNavigate } from 'react-router-dom'

export const Menu = ({ data }) => {
  const { theme } = useContext(ThemeContext)
  const navigate = useNavigate()
  const { setNotes } = useContext(NotesContext)
  const toast = useToast()

  const onStatusNote = (data) => {
    setTimeout(async () => {
      const { error, data: note } = data.archived
        ? await editUnarchiveNote(data.id)
        : await editArchiveNote(data.id)

      if (!error) {
        toast({
          title: note.message,
          status: 'success',
          duration: 4000,
          isClosable: true,
          position: 'top'
        })
      } else {
        toast({
          title: note.message,
          status: 'error',
          duration: 4000,
          isClosable: true,
          position: 'top'
        })
      }

      data.archived
        ? getArchiveNotes().then(({ data }) => setNotes(data))
        : getActiveNotes().then(({ data }) => setNotes(data))
    })
  }

  const onDeleteNote = async (data) => {
    const { error, data: note } = await deleteNote(data.id)

    if (!error) {
      toast({
        title: note.message,
        status: 'success',
        duration: 4000,
        isClosable: true,
        position: 'top'
      })
    } else {
      toast({
        title: note.message,
        status: 'error',
        duration: 4000,
        isClosable: true,
        position: 'top'
      })
    }

    data.archived
      ? getArchiveNotes().then(({ data }) => setNotes(data))
      : getActiveNotes().then(({ data }) => setNotes(data))
  }

  const menus = menuList({
    data,
    onStatusNote,
    onDeleteNote,
    navigate
  })

  return (
    <MenuChakra>
      <MenuButton
        as={IconButton}
        bgColor={`yellow.${theme === 'light' ? '200' : '700'}`}
        _hover={{
          bgColor: `yellow.${theme === 'light' ? '300' : '600'}`
        }}
        _active={{
          bgColor: `yellow.${theme === 'light' ? '300' : '600'}`
        }}
        icon={<MoreHorizontal width={16} height={16} />}
        color={`gray.${theme === 'light' ? '500' : '400'}`}
      />

      <MenuList
        bgColor={`gray.${theme === 'light' ? '50' : '900'}`}
        borderColor={`gray.${theme === 'light' ? '200' : '700'}`}
      >
        {menus.map(({ text, icon, action, color }, id) => (
          <MenuItem
            key={id}
            icon={icon}
            onClick={() => {
              action(text === 'View' ? `/notes/${data.id}` : data)
            }}
            color={`${color}.${theme === 'light' ? '400' : '500'}`}
            bgColor={`gray.${theme === 'light' ? '50' : '900'}`}
            _hover={{
              bgColor: `gray.${theme === 'light' ? '100' : '800'}`
            }}
          >
            {`${text} note`}
          </MenuItem>
        ))}
      </MenuList>
    </MenuChakra>
  )
}

Menu.propTypes = {
  data: PropTypes.object
}
