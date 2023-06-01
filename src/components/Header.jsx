import React from 'react'
import { Box, Flex, Heading } from '@chakra-ui/react'
import { Logo } from './Logo'
import { Language } from './Language'
import { Theme } from './Theme'
import PropTypes from 'prop-types'

export const Header = ({ layout }) => (
  <Flex flex='none' gap={4} justifyContent='space-between'>
    {layout === 'auth' && (
      <>
        <Logo />

        <Flex gap={4}>
          <Language />

          <Theme />
        </Flex>
      </>
    )}

    {layout === 'app' && (
      <>
        <Box>
          <Heading size='lg' color='yellow.300'>
            Welcome back
          </Heading>
          <Heading size='lg' noOfLines={1} color='gray.600'>
            Muhammad Fauzul Hanif
          </Heading>
        </Box>

        <Flex gap={4}>
          <Theme />
        </Flex>
      </>
    )}
  </Flex>
)

Header.propTypes = {
  layout: PropTypes.oneOf(['auth', 'app']).isRequired
}
