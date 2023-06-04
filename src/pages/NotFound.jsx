import React, { useContext } from 'react'
import { Layout } from '../components/base/Layout'
import { Header } from '../components/Header'
import { LocaleContext } from '../context/Locale'
import { Box } from '@chakra-ui/react'
import { NavBar } from '../components/NavBar'
import PropTypes from 'prop-types'

export const NotFound = ({ onLogOut }) => {
  const { locale } = useContext(LocaleContext)

  return (
    <Layout
      title={locale === 'en' ? 'Not Found' : 'Tidak Ditemukan'}
      boxProps={{
        p: [4, 8, 12]
      }}
    >
      <Header layout='app' onLogOut={onLogOut} />

      <Box color='gray.400'>Tidak Ditemukan</Box>

      <NavBar path={localStorage.setItem('catetan-path', null)} />
    </Layout>
  )
}

NotFound.propTypes = {
  onLogOut: PropTypes.func
}
