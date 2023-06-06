import React, { useContext, useEffect } from 'react'
import { Layout } from '../components/base/Layout'
import { Header } from '../components/Header'
import { NavBar } from '../components/NavBar'
import { LocaleContext } from '../context/Locale'
import PropTypes from 'prop-types'
import { Shelf } from '../components/Shelf'
import { getActiveNotes } from '../api'
import { NotesContext } from '../context/Notes'

export const ActiveNotesPage = ({ onLogOut }) => {
  const { locale } = useContext(LocaleContext)
  const { notes, setNotes } = useContext(NotesContext)

  useEffect(() => {
    getActiveNotes().then(({ data }) => setNotes(data))

    return () => {
      setNotes([])
    }
  }, [])

  return (
    <Layout title={locale === 'en' ? 'Active Notes' : 'Catatan Aktif'}>
      <Header layout='app' onLogOut={onLogOut} />

      <Shelf notes={notes} />

      <NavBar />
    </Layout>
  )
}

ActiveNotesPage.propTypes = {
  onLogOut: PropTypes.func
}
