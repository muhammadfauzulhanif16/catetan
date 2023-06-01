import React from 'react'
import { Button, Text } from '@chakra-ui/react'
import { Icon } from './Icon'
import PropTypes from 'prop-types'

export const Nav = ({
  initIcon,
  finalIcon,
  text,
  buttonProps,
  textProps,
  iconProps
}) => {
  return (
    <Button {...buttonProps}>
      <Icon initIcon={initIcon} finalIcon={finalIcon} iconProps={iconProps} />

      <Text {...textProps}>{text ?? text}</Text>
    </Button>
  )
}

Nav.propTypes = {
  initIcon: PropTypes.elementType.isRequired,
  finalIcon: PropTypes.elementType.isRequired,
  text: PropTypes.string,
  buttonProps: PropTypes.object,
  textProps: PropTypes.object,
  iconProps: PropTypes.object
}
