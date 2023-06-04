import React from 'react'
import { Button, Text } from '@chakra-ui/react'
import PropTypes from 'prop-types'
import { Icon } from './Icon'

export const Navigation = ({
  initIcon,
  finalIcon,
  text,
  buttonProps,
  textProps,
  iconProps
}) => {
  return (
    <Button {...buttonProps}>
      {initIcon && (
        <Icon initIcon={initIcon} finalIcon={finalIcon} iconProps={iconProps} />
      )}

      {text && <Text {...textProps}>{text}</Text>}
    </Button>
  )
}

Navigation.propTypes = {
  initIcon: PropTypes.elementType,
  finalIcon: PropTypes.elementType,
  text: PropTypes.string,
  buttonProps: PropTypes.object,
  textProps: PropTypes.object,
  iconProps: PropTypes.object
}
