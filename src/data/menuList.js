import {
  Archive,
  ContentView,
  Delete
} from '@emotion-icons/fluentui-system-regular'
import React from 'react'
import PropTypes from 'prop-types'

export const menuList = ({
  data,
  onStatusNote,
  onDeleteNote,
  navigate,
  locale
}) => [
  {
    text: locale === 'en' ? 'View' : 'Lihat',
    icon: <ContentView width={24} height={24} />,
    action: navigate,
    color: 'blue'
  },
  {
    text:
      locale === 'en'
        ? `${data.archived ? 'Unarchive' : 'Archive'}`
        : `${data.archived ? 'Batalkan arsip' : 'Arsipkan'}`,
    icon: <Archive width={24} height={24} />,
    action: onStatusNote,
    color: 'purple'
  },
  {
    text: locale === 'en' ? 'Delete' : 'Hapus',
    icon: <Delete width={24} height={24} />,
    action: onDeleteNote,
    color: 'red'
  }
]

menuList.propTypes = {
  data: PropTypes.object,
  onStatusNote: PropTypes.func,
  onDeleteNote: PropTypes.func,
  navigate: PropTypes.func,
  locale: PropTypes.string
}
