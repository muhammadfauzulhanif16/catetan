import React, { useContext, useEffect, useState } from 'react'
import { Layout } from '../components/base/Layout'
import { Header } from '../components/Header'
import { NavBar } from '../components/NavBar'
import { LocaleContext } from '../context/Locale'
import PropTypes from 'prop-types'
import { Shelf } from '../components/Shelf'
import { getArchiveNotes } from '../api'
import { NotesContext } from '../context/Notes'

export const ArchiveNotesPage = ({
  onLogOut,
  searchKeyword,
  onSearchKeywordChange
}) => {
  const { locale } = useContext(LocaleContext)
  const { notes, setNotes } = useContext(NotesContext)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    setIsLoading(true)

    setTimeout(() => {
      getArchiveNotes().then(({ data }) => {
        setNotes(data)
        setIsLoading(false)
      })

      return () => {
        setNotes([])
      }
    }, 2000)
  }, [])

  const searchNotes = notes.filter((data) =>
    searchKeyword === ''
      ? data
      : data.title.toLowerCase().includes(searchKeyword.toLowerCase())
  )

  return (
    <Layout title={locale === 'en' ? 'Archive Notes' : 'Catatan Arsip'}>
      <Header
        layout='app'
        onLogOut={onLogOut}
        searchKeyword={searchKeyword}
        onSearchKeywordChange={onSearchKeywordChange}
      />

      <Shelf notes={searchNotes} isLoading={isLoading} />

      <NavBar />
    </Layout>
  )
}

ArchiveNotesPage.propTypes = {
  onLogOut: PropTypes.func,
  searchKeyword: PropTypes.string,
  onSearchKeywordChange: PropTypes.func
}
