import React from 'react'
import { Flex, Heading } from '@chakra-ui/react'
import { Note } from '@emotion-icons/fluentui-system-regular'
import { Icon } from './Icon'
import PropTypes from 'prop-types'

export const Logo = ({ flexProps }) => (
  <Flex {...flexProps} alignItems='center' color='yellow.300' gap={4}>
    <Icon initIcon={Note} iconProps={{ w: 16, h: 16 }} />

    <Heading>Catetan</Heading>
  </Flex>
)

Logo.propTypes = {
  flexProps: PropTypes.object
}
