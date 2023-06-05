import {
  Archive,
  ContentView,
  Delete
} from '@emotion-icons/fluentui-system-regular'
import React from 'react'
import PropTypes from 'prop-types'

export const menuList = ({
  data,
  navigate,
  onArchive,
  onUnarchive,
  onDeleteNote
}) => {
  return [
    {
      text: 'View',
      icon: <ContentView width={24} height={24} />,
      // action: navigate,
      color: 'blue'
    },
    {
      text: data.archived ? 'Unarchived' : 'Archived',
      icon: <Archive width={24} height={24} />,
      action: data.archived ? onUnarchive : onArchive,
      color: 'purple'
    },
    {
      text: 'Delete',
      icon: <Delete width={24} height={24} />,
      action: onDeleteNote,
      color: 'red'
    }
  ]
}

menuList.propTypes = {
  data: PropTypes.object,
  navigate: PropTypes.func,
  onArchive: PropTypes.func,
  onUnarchive: PropTypes.func,
  onDeleteNote: PropTypes.func
}
