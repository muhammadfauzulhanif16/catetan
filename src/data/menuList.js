import {
  Archive,
  ContentView,
  Delete
} from '@emotion-icons/fluentui-system-regular'
import React from 'react'
import PropTypes from 'prop-types'

export const menuList = ({ data, onStatusNote, onDeleteNote, navigate }) => [
  {
    text: 'View',
    icon: <ContentView width={24} height={24} />,
    action: navigate,
    color: 'blue'
  },
  {
    text: data.archived ? 'Unarchive' : 'Archive',
    icon: <Archive width={24} height={24} />,
    action: onStatusNote,
    color: 'purple'
  },
  {
    text: 'Delete',
    icon: <Delete width={24} height={24} />,
    action: onDeleteNote,
    color: 'red'
  }
]

menuList.propTypes = {
  data: PropTypes.object,
  onStatusNote: PropTypes.func,
  onDeleteNote: PropTypes.func
}
