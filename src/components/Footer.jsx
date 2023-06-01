import { Link, Text } from '@chakra-ui/react'
import React from 'react'

export const Footer = () => (
  <Text textAlign='center' color='gray.400'>
    Proudly made by{' '}
    <Link
      color='purple.500'
      href='https://github.com/muhammadfauzulhanif16'
      isExternal
    >
      Muhammad Fauzul Hanif
    </Link>
    , all right reserved.
  </Text>
)
