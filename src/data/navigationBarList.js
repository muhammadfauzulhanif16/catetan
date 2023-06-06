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

export const navigationBarList = ({ locale }) => [
  {
    initIcon: AppListRegular,
    finalIcon: AppListFilled,
    text: locale === 'en' ? 'Active' : 'Aktif',
    path: 'active'
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
    text: locale === 'en' ? 'Archive' : 'Arsip',
    path: 'archive'
  }
]

navigationBarList.propTypes = {
  locale: PropTypes.string
}
