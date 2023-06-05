import { Route, Routes } from 'react-router-dom'
import { NotFoundPage } from './pages/NotFoundPage'
import { AllNotesPage } from './pages/AllNotesPage'
import { noteList } from './data/noteList'
import { AddNotePage } from './pages/AddNotePage'
import { ArchiveNotesPage } from './pages/ArchiveNotesPage'
import React, { useEffect, useState } from 'react'
import { editAccessToken, getUserLogged } from './api'
import { HomePage } from './pages/HomePage'
import { RegisterPage } from './pages/RegisterPage'
import { LogInPage } from './pages/LogInPage'

export const Router = () => {
  const [authedUser, setAuthedUser] = useState(null)

  useEffect(() => {
    const onLoginSuccess = async () => {
      return await getUserLogged()
    }

    onLoginSuccess().then((r) => setAuthedUser(r.data))
  }, [authedUser])

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

  const allNotes = noteList.filter((note) => note.archived === false)
  const archivedNotes = noteList.filter((note) => note.archived === true)

  return (
    <Routes>
      <Route path='/*' element={<NotFoundPage onLogOut={onLogOut} />} />
      <Route
        path='/'
        element={<AllNotesPage onLogOut={onLogOut} notes={allNotes} />}
      />
      <Route path='/add' element={<AddNotePage onLogOut={onLogOut} />} />
      <Route
        path='/archive'
        element={<ArchiveNotesPage onLogOut={onLogOut} notes={archivedNotes} />}
      />
    </Routes>
  )
}
