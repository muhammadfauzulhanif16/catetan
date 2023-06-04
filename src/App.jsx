import React, { useEffect, useMemo, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import { HomePage } from './pages/HomePage'
import { RegisterPage } from './pages/RegisterPage'
import { LogInPage } from './pages/LogInPage'
import { AllNotesPage } from './pages/AllNotesPage'
import { LocaleContext } from './context/Locale'
import { ThemeContext } from './context/Theme'
import { NotFoundPage } from './pages/NotFoundPage'
import { AddNotePage } from './pages/AddNotePage'
import { ArchiveNotesPage } from './pages/ArchiveNotesPage'
import { getUserLogged, putAccessToken } from './api'
import { noteList } from './data/noteList'

export const App = () => {
  const [authedUser, setAuthedUser] = useState(null)

  useEffect(() => {
    const onLoginSuccess = async () => {
      return await getUserLogged()
    }

    onLoginSuccess().then((r) => setAuthedUser(r.data))
  }, [authedUser])

  const onLoginSuccess = async ({ accessToken }) => {
    putAccessToken(accessToken)
    const { data } = await getUserLogged()
    setAuthedUser(data)
  }

  const onLogOut = () => {
    setAuthedUser(null)
    putAccessToken('')
    localStorage.setItem('catetan-path', 'all')
  }

  const [locale, setLocale] = useState(
    localStorage.getItem('catetan-locale') || 'en'
  )
  const [theme, setTheme] = useState(
    localStorage.getItem('catetan-theme') || 'light'
  )

  const onLocaleChange = () => {
    setLocale((prevLocale) => (prevLocale === 'en' ? 'id' : 'en'))
    localStorage.setItem('catetan-locale', locale === 'en' ? 'id' : 'en')
  }

  const onThemeChange = () => {
    setTheme((prevLocale) => (prevLocale === 'light' ? 'dark' : 'light'))

    localStorage.setItem('catetan-theme', theme === 'light' ? 'dark' : 'light')
  }

  const localeContextValue = useMemo(() => {
    return { locale, onLocaleChange }
  }, [locale])

  const themeContextValue = useMemo(() => {
    return { theme, onThemeChange }
  }, [theme])

  if (authedUser !== null) {
    return (
      <ThemeContext.Provider value={themeContextValue}>
        <LocaleContext.Provider value={localeContextValue}>
          <Routes>
            <Route path='/*' element={<NotFoundPage onLogOut={onLogOut} />} />
            <Route
              path='/'
              element={<AllNotesPage onLogOut={onLogOut} notes={noteList} />}
            />
            <Route path='/add' element={<AddNotePage onLogOut={onLogOut} />} />
            <Route
              path='/archive'
              element={
                <ArchiveNotesPage onLogOut={onLogOut} notes={noteList} />
              }
            />
          </Routes>
        </LocaleContext.Provider>
      </ThemeContext.Provider>
    )
  }

  return (
    <ThemeContext.Provider value={themeContextValue}>
      <LocaleContext.Provider value={localeContextValue}>
        <Routes>
          <Route path='/*' element={<HomePage />} />
          <Route path='/register' element={<RegisterPage />} />
          <Route
            path='/login'
            element={<LogInPage onLoginSuccess={onLoginSuccess} />}
          />
        </Routes>
      </LocaleContext.Provider>
    </ThemeContext.Provider>
  )
}
