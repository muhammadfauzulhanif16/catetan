import { Flex } from '@chakra-ui/react'
import { Logo } from './Logo'
import { Language } from './Language'
import { Theme } from './Theme'
import React from 'react'

export const Header = () => (
  <Flex flex='none' gap={4} justifyContent='space-between'>
    <Logo />

    <Flex gap={4}>
      <Language />

      <Theme />
    </Flex>
  </Flex>
)
