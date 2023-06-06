import React, { useContext, useEffect, useState } from 'react'
import { Layout } from '../components/base/Layout'
import { Header } from '../components/Header'
import { NavBar } from '../components/NavBar'
import { LocaleContext } from '../context/Locale'
import PropTypes from 'prop-types'
import { Shelf } from '../components/Shelf'
import { getActiveNotes } from '../api'
import { NotesContext } from '../context/Notes'
import { Navigation } from '../components/base/Navigation'

export const ActiveNotesPage = ({ onLogOut }) => {
  const { locale } = useContext(LocaleContext)
  const { notes, setNotes } = useContext(NotesContext)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    setIsLoading(true)
    setTimeout(() => {
      getActiveNotes().then(({ data }) => {
        setNotes(data)
        setIsLoading(false)
      })

      return () => {
        setNotes([])
      }
    }, 2000)
  }, [])

  return (
    <Layout title={locale === 'en' ? 'Active Notes' : 'Catatan Aktif'}>
      <Header layout='app' onLogOut={onLogOut} />

      {isLoading ? (
        <Navigation
          buttonProps={{
            display: 'flex',
            gap: 2,
            isLoading: true,
            h: 'full',
            variant: '',
            loadingText: 'Wait a minute'
          }}
        />
      ) : (
        <Shelf notes={notes} />
      )}

      <NavBar />
    </Layout>
  )
}

ActiveNotesPage.propTypes = {
  onLogOut: PropTypes.func
}
