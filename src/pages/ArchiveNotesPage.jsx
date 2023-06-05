import React, { useContext, useEffect, useState } from 'react'
import { Layout } from '../components/base/Layout'
import { Header } from '../components/Header'
import { NavBar } from '../components/NavBar'
import { LocaleContext } from '../context/Locale'
import PropTypes from 'prop-types'
import { Shelf } from '../components/Shelf'
import { getNotes } from '../api'

export const ArchiveNotesPage = ({ onLogOut }) => {
  const { locale } = useContext(LocaleContext)
  const [notes, setNotes] = useState([])

  useEffect(() => {
    getNotes().then(({ data }) => {
      setNotes(data)
    })

    return () => {
      setNotes([])
    }
  }, [])

  const archivedNotes = notes.filter((note) => note.archived === true)

  return (
    <Layout title={locale === 'en' ? 'Archive Notes' : 'Catatan Arsip'}>
      <Header layout='app' onLogOut={onLogOut} />

      <Shelf notes={archivedNotes} />

      <NavBar />
    </Layout>
  )
}

ArchiveNotesPage.propTypes = {
  onLogOut: PropTypes.func
}
