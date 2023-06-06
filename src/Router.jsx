import { Route, Routes, useSearchParams } from 'react-router-dom'
import { NotFoundPage } from './pages/NotFoundPage'
import { ActiveNotesPage } from './pages/ActiveNotesPage'
import { AddNotePage } from './pages/AddNotePage'
import { ArchiveNotesPage } from './pages/ArchiveNotesPage'
import React, { useEffect, useMemo, useState } from 'react'
import { editAccessToken, getUserLogged } from './api'
import { HomePage } from './pages/HomePage'
import { RegisterPage } from './pages/RegisterPage'
import { LogInPage } from './pages/LogInPage'
import { AuthedUserContext } from './context/AuthedUser'
import { NotesContext } from './context/Notes'
import { DetailNotePage } from './pages/DetailNotePage'

export const Router = () => {
  const [authedUser, setAuthedUser] = useState(null)
  const [initializing, setInitializing] = useState(true)
  const [notes, setNotes] = useState([])
  const [searchParams, setSearchParams] = useSearchParams()
  const [searchKeyword, setSearchKeyword] = useState(
    searchParams.get('keyword') || ''
  )

  const onSearchKeywordChange = ({ target: { value: keyword } }) => {
    setSearchKeyword(keyword)
    setSearchParams({ keyword })
  }

  const authedUserContextValue = useMemo(() => {
    return { authedUser }
  }, [authedUser])

  const notesContextValue = useMemo(() => {
    return { notes, setNotes }
  }, [notes])

  useEffect(() => {
    getUserLogged().then(({ data }) => {
      setAuthedUser(data)
      setInitializing(false)
    })

    return () => {
      setAuthedUser(null)
    }
  }, [])

  const onLoginSuccess = async ({ accessToken }) => {
    editAccessToken(accessToken)
    getUserLogged().then(({ data }) => setAuthedUser(data))
  }

  const onLogOut = () => {
    setAuthedUser(null)
    editAccessToken('')
    localStorage.setItem('catetan-path', 'all')
  }

  if (initializing) return null

  if (authedUser === null) {
    return (
      <Routes>
        <Route path='/*' element={<HomePage />} />
        <Route path='/register' element={<RegisterPage />} />
        <Route
          path='/login'
          element={<LogInPage onLoginSuccess={onLoginSuccess} />}
        />
      </Routes>
    )
  }

  return (
    <AuthedUserContext.Provider value={authedUserContextValue}>
      <NotesContext.Provider value={notesContextValue}>
        <Routes>
          <Route path='/*' element={<NotFoundPage onLogOut={onLogOut} />} />
          <Route
            path='/'
            element={
              <ActiveNotesPage
                onLogOut={onLogOut}
                searchKeyword={searchKeyword}
                onSearchKeywordChange={onSearchKeywordChange}
              />
            }
          />
          <Route path='/add' element={<AddNotePage onLogOut={onLogOut} />} />
          <Route
            path='/archive'
            element={
              <ArchiveNotesPage
                onLogOut={onLogOut}
                searchKeyword={searchKeyword}
                onSearchKeywordChange={onSearchKeywordChange}
              />
            }
          />
          <Route
            path='/notes/:id'
            element={<DetailNotePage onLogOut={onLogOut} />}
          />
        </Routes>
      </NotesContext.Provider>
    </AuthedUserContext.Provider>
  )
}
