import React, { useMemo, useState } from 'react'
import { LocaleContext } from './context/Locale'
import { ThemeContext } from './context/Theme'
import { Router } from './Router'

export const App = () => {
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
        <Router />
      </LocaleContext.Provider>
    </ThemeContext.Provider>
  )
}
