import { Link, Text } from '@chakra-ui/react'
import React, { useContext } from 'react'
import { LocaleContext } from '../context/Locale'
import { footer } from '../utils/content'
import { ThemeContext } from '../context/Theme'

export const Footer = () => {
  const { locale } = useContext(LocaleContext)
  const { theme } = useContext(ThemeContext)

  return (
    <Text
      textAlign='center'
      color={`gray.${theme === 'light' ? '400' : '500'}`}
      p={[4, 4, 8, 12]}
    >
      {`${footer[locale].start} `}
      <Link
        color={`purple.${theme === 'light' ? '500' : '400'}`}
        href='https://github.com/muhammadfauzulhanif16'
        isExternal
      >
        Muhammad Fauzul Hanif
      </Link>
      , {footer[locale].end}.
    </Text>
  )
}
