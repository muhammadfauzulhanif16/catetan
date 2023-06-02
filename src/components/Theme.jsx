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
import { Nav } from './base/Nav'

export const Theme = ({ data, onChange }) => (
  <Nav
    buttonProps={{
      bgColor: `gray.${data === 'light' ? '100' : '800'}`,
      _hover: { bgColor: `gray.${data === 'light' ? '200' : '700'}` },
      p: 0,
      onClick: onChange,
      role: 'group'
    }}
    initIcon={data === 'light' ? WeatherSunnyRegular : WeatherMoonRegular}
    finalIcon={data === 'light' ? WeatherSunnyFilled : WeatherMoonFilled}
    iconProps={{
      w: 6,
      h: 6
    }}
  />
)

Theme.propTypes = {
  data: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
}
