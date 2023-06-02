import {
  Add as AddRegular,
  AppsList as AppListRegular,
  Archive as ArchiveRegular,
  Send as SendRegular
} from '@emotion-icons/fluentui-system-regular'
import {
  Add as AddFilled,
  AppsList as AppListFilled,
  Archive as ArchiveFilled,
  Send as SendFilled
} from '@emotion-icons/fluentui-system-filled'
import PropTypes from 'prop-types'

export const navList = (pathName) => [
  {
    initIcon: AppListRegular,
    finalIcon: AppListFilled,
    text: 'All'
  },
  {
    initIcon: pathName === 'Add' ? SendRegular : AddRegular,
    finalIcon: pathName === 'Add' ? SendFilled : AddFilled,
    text: pathName === 'Add' ? 'Submit' : 'Add'
  },
  {
    initIcon: ArchiveRegular,
    finalIcon: ArchiveFilled,
    text: 'Archived'
  }
]

navList.propTypes = {
  pathName: PropTypes.string
}
