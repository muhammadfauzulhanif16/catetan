import React, { useMemo, useState } from 'react'
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

export const App = () => {
  // const locale = useChange('locale', ['en', 'id'])
  // const theme = useChange('theme', ['light', 'dark'])

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

  return (
    <ThemeContext.Provider value={themeContextValue}>
      <LocaleContext.Provider value={localeContextValue}>
        <Routes>
          {localStorage.getItem('catetan-token') ? (
            <>
              <Route path='/*' element={<NotFound />} />
              <Route path='/all' element={<All />} />
              <Route path='/add' element={<Add />} />
              <Route path='/archive' element={<Archive />} />
            </>
          ) : (
            <>
              <Route path='/*' element={<Home />} />
              <Route path='/register' element={<Register />} />
              <Route path='/login' element={<LogIn />} />
            </>
          )}
        </Routes>
      </LocaleContext.Provider>
    </ThemeContext.Provider>
  )
}
