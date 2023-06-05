import { Route, Routes } from 'react-router-dom'
import { NotFoundPage } from './pages/NotFoundPage'
import { AllNotesPage } from './pages/AllNotesPage'
import { AddNotePage } from './pages/AddNotePage'
import { ArchiveNotesPage } from './pages/ArchiveNotesPage'
import React, { useEffect, useMemo, useState } from 'react'
import { editAccessToken, getNotes, getUserLogged } from './api'
import { HomePage } from './pages/HomePage'
import { RegisterPage } from './pages/RegisterPage'
import { LogInPage } from './pages/LogInPage'
import { AuthedUserContext } from './context/AuthedUser'

export const Router = () => {
  const [authedUser, setAuthedUser] = useState(null)
  const [initializing, setInitializing] = useState(true)
  const [notes, setNotes] = useState(null)

  const authedUserContextValue = useMemo(() => {
    return { authedUser }
  }, [authedUser])

  useEffect(() => {
    getUserLogged().then(({ data }) => {
      setAuthedUser(data)
      setInitializing(false)
    })

    return () => {
      setAuthedUser(null)
    }
  }, [])

  useEffect(() => {
    getNotes().then(({ data }) => setNotes(data))

    return () => {
      setNotes(null)
    }
  }, [])

  const onLoginSuccess = async ({ accessToken }) => {
    editAccessToken(accessToken)
    const { data } = await getUserLogged()
    setAuthedUser(data)
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

  const allNotes = notes.filter((note) => note.archived === false)
  const archivedNotes = notes.filter((note) => note.archived === true)

  return (
    <AuthedUserContext.Provider value={authedUserContextValue}>
      <Routes>
        <Route path='/*' element={<NotFoundPage onLogOut={onLogOut} />} />
        <Route
          path='/'
          element={<AllNotesPage onLogOut={onLogOut} notes={allNotes} />}
        />
        <Route path='/add' element={<AddNotePage onLogOut={onLogOut} />} />
        <Route
          path='/archive'
          element={
            <ArchiveNotesPage onLogOut={onLogOut} notes={archivedNotes} />
          }
        />
      </Routes>
    </AuthedUserContext.Provider>
  )
}
