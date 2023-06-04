import React, { useEffect, useMemo, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home'
import { Register } from './pages/Register'
import { LogIn } from './pages/LogIn'
import { All } from './pages/All'
import { LocaleContext } from './context/Locale'
import { ThemeContext } from './context/Theme'
import { NotFound } from './pages/NotFound'
import { Add } from './pages/Add'
import { Archive } from './pages/Archive'
import { getUserLogged, putAccessToken } from './api'

export const App = () => {
  const [authedUser, setAuthedUser] = useState(null)

  useEffect(() => {
    const onLoginSuccess = async () => {
      return await getUserLogged()
      // setAuthedUser(data)
    }

    onLoginSuccess().then((r) => setAuthedUser(r.data))
  }, [authedUser])

  const onLoginSuccess = async ({ accessToken }) => {
    putAccessToken(accessToken)
    const { data } = await getUserLogged()
    setAuthedUser(data)
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
            <Route path='/*' element={<NotFound />} />
            <Route path='/all' element={<All />} />
            <Route path='/add' element={<Add />} />
            <Route path='/archive' element={<Archive />} />
          </Routes>
        </LocaleContext.Provider>
      </ThemeContext.Provider>
    )
  }

  return (
    <ThemeContext.Provider value={themeContextValue}>
      <LocaleContext.Provider value={localeContextValue}>
        <Routes>
          <Route path='/*' element={<Home />} />
          <Route path='/register' element={<Register />} />
          <Route
            path='/login'
            element={<LogIn onLoginSuccess={onLoginSuccess} />}
          />
        </Routes>
      </LocaleContext.Provider>
    </ThemeContext.Provider>
  )
}
