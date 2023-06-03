import React, { useContext } from 'react'
import { Button, Text } from '@chakra-ui/react'
import PropTypes from 'prop-types'
import { ThemeContext } from '../../context/Theme'
import { Icon } from './Icon'

export const Nav = ({
  initIcon,
  finalIcon,
  text,
  buttonProps,
  textProps,
  iconProps
}) => {
  const { theme } = useContext(ThemeContext)

  return (
    <Button
      {...buttonProps}
      color={`gray.${theme === 'light' ? '700' : '200'}`}
    >
      {initIcon && (
        <Icon initIcon={initIcon} finalIcon={finalIcon} iconProps={iconProps} />
      )}

      <Text {...textProps}>{text ?? text}</Text>
    </Button>
  )
}

Nav.propTypes = {
  initIcon: PropTypes.elementType,
  finalIcon: PropTypes.elementType,
  text: PropTypes.string,
  buttonProps: PropTypes.object,
  textProps: PropTypes.object,
  iconProps: PropTypes.object
}
