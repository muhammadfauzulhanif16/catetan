import React, { useContext } from 'react'
import { Layout } from '../components/base/Layout'
import { Header } from '../components/Header'
import { LocaleContext } from '../context/Locale'
import { Box } from '@chakra-ui/react'
import { NavBar } from '../components/NavBar'

export const NotFound = () => {
  const { locale } = useContext(LocaleContext)

  return (
    <Layout
      title={locale === 'en' ? 'Not Found' : 'Tidak Ditemukan'}
      boxProps={{
        p: [4, 8, 12]
      }}
    >
      <Header layout='app' />

      <Box color='gray.400'>Tidak Ditemukan</Box>

      <NavBar path={localStorage.setItem('catetan-path', null)} />
    </Layout>
  )
}
