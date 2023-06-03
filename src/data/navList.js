import {
  Add as AddRegular,
  AppsList as AppListRegular,
  Archive as ArchiveRegular
} from '@emotion-icons/fluentui-system-regular'
import {
  Add as AddFilled,
  AppsList as AppListFilled,
  Archive as ArchiveFilled
} from '@emotion-icons/fluentui-system-filled'
import PropTypes from 'prop-types'

export const navList = (locale) => [
  {
    initIcon: AppListRegular,
    finalIcon: AppListFilled,
    text: locale === 'en' ? 'All' : 'Semua',
    path: 'all'
  },
  {
    initIcon: AddRegular,
    finalIcon: AddFilled,
    text: locale === 'en' ? 'Add' : 'Tambah',
    path: 'add'
  },
  {
    initIcon: ArchiveRegular,
    finalIcon: ArchiveFilled,
    text: locale === 'en' ? 'Archived' : 'Arsip',
    path: 'archived'
  }
]

navList.propTypes = {
  pathName: PropTypes.string,
  locale: PropTypes.string
}
