import React from 'react'
import { Flex, Heading } from '@chakra-ui/react'
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
        <Heading size='lg'>
          Welcome back, <br /> Muhammad Fauzul Hanif
        </Heading>

        <Flex gap={4}>
          <Language />

          <Theme />
        </Flex>
      </>
    )}
  </Flex>
)

Header.propTypes = {
  layout: PropTypes.oneOf(['auth', 'app']).isRequired
}
