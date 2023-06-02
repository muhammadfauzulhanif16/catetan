import { Link, Text } from '@chakra-ui/react'
import React, { useContext } from 'react'
import { LocaleContext } from '../context/Locale'
import { footer } from '../utils/content'

export const Footer = () => {
  const { locale } = useContext(LocaleContext)

  return (
    <Text textAlign='center' color='gray.400'>
      {`${footer[locale].start} `}
      <Link
        color='purple.500'
        href='https://github.com/muhammadfauzulhanif16'
        isExternal
      >
        Muhammad Fauzul Hanif
      </Link>
      , {footer[locale].end}.
    </Text>
  )
}
