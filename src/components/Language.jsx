import React from 'react'
import PropTypes from 'prop-types'
import { Nav } from './base/Nav'
import { ID, US } from 'country-flag-icons/react/3x2'

export const Language = ({ data, onChange, theme }) => {
  return (
    <Nav
      buttonProps={{
        bgColor: `gray.${theme === 'light' ? '100' : '800'}`,
        _hover: { bgColor: `gray.${theme === 'light' ? '200' : '700'}` },
        p: 0,
        onClick: onChange,
        role: 'group'
      }}
      initIcon={data === 'en' ? US : ID}
      iconProps={{
        w: 6,
        h: 6
      }}
    />
  )
}

Language.propTypes = {
  data: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  theme: PropTypes.string.isRequired
}
