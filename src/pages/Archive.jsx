import React, { useContext } from 'react'
import { Layout } from '../components/base/Layout'
import { Header } from '../components/Header'
import { NavBar } from '../components/NavBar'
import { LocaleContext } from '../context/Locale'
import PropTypes from 'prop-types'

export const Archive = ({ onLogOut, notes }) => {
  const { locale } = useContext(LocaleContext)

  return (
    <Layout
      title={locale === 'en' ? 'Archived Notes' : 'Arsip Catatan'}
      boxProps={{
        p: [4, 8, 12]
      }}
    >
      <Header layout='app' onLogOut={onLogOut} />

      <NavBar path='archive' />
    </Layout>
  )
}

Archive.propTypes = {
  onLogOut: PropTypes.func,
  notes: PropTypes.arrayOf(PropTypes.object)
}
