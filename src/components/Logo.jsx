import React, { useContext } from 'react'
import { Flex, Heading } from '@chakra-ui/react'
import { Note } from '@emotion-icons/fluentui-system-regular'
import { Icon } from './base/Icon'
import PropTypes from 'prop-types'
import { ThemeContext } from '../context/Theme'

export const Logo = ({ flexProps }) => {
  const { theme } = useContext(ThemeContext)

  return (
    <Flex
      {...flexProps}
      alignItems='center'
      color={`yellow.${theme === 'light' ? '300' : '400'}`}
      gap={3}
    >
      <Icon initIcon={Note} iconProps={{ w: 12, h: 12 }} />

      <Heading size='lg'>Catetan</Heading>
    </Flex>
  )
}

Logo.propTypes = {
  flexProps: PropTypes.object
}
