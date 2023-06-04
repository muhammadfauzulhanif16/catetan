import React, { useContext } from 'react'
import { Layout } from '../components/base/Layout'
import { Header } from '../components/Header'
import { NavBar } from '../components/NavBar'
import { LocaleContext } from '../context/Locale'
import PropTypes from 'prop-types'
import { Shelf } from '../components/Shelf'

export const AllNotesPage = ({ onLogOut, notes }) => {
  const { locale } = useContext(LocaleContext)

  return (
    <Layout title={locale === 'en' ? 'AllNotesPage Notes' : 'Semua Catatan'}>
      <Header layout='app' onLogOut={onLogOut} />

      <Shelf notes={notes} />

      <NavBar path='all' />
    </Layout>
  )
}

AllNotesPage.propTypes = {
  onLogOut: PropTypes.func,
  notes: PropTypes.arrayOf(PropTypes.object)
}
