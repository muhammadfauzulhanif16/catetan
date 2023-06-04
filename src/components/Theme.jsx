import React from 'react'
import {
  WeatherMoon as WeatherMoonRegular,
  WeatherSunny as WeatherSunnyRegular
} from '@emotion-icons/fluentui-system-regular'
import {
  WeatherMoon as WeatherMoonFilled,
  WeatherSunny as WeatherSunnyFilled
} from '@emotion-icons/fluentui-system-filled'
import PropTypes from 'prop-types'
import { Navigation } from './base/Navigation'

export const Theme = ({ data, onChange }) => (
  <Navigation
    buttonProps={{
      color: `gray.${data === 'light' ? '600' : '300'}`,
      bgColor: `gray.${data === 'light' ? '100' : '800'}`,
      _hover: { bgColor: `gray.${data === 'light' ? '200' : '700'}` },
      p: 0,
      onClick: onChange,
      role: 'group'
    }}
    initIcon={data === 'light' ? WeatherSunnyRegular : WeatherMoonRegular}
    finalIcon={data === 'light' ? WeatherSunnyFilled : WeatherMoonFilled}
    iconProps={{
      color: `cyan.${data === 'light' ? '500' : '400'}`,
      w: 6,
      h: 6
    }}
  />
)

Theme.propTypes = {
  data: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
}
