import React, { useMemo, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home'
import { Register } from './pages/Register'
import { LogIn } from './pages/LogIn'
import { Dashboard } from './pages/Dashboard'
import { LocaleContext } from './context/Locale'

export const App = () => {
  const [locale, setLocale] = useState('en')

  const onLocaleChange = () => {
    setLocale((prevLocale) => (prevLocale === 'en' ? 'id' : 'en'))
  }

  const localeContextValue = useMemo(() => {
    return { locale, onLocaleChange }
  }, [locale])

  return (
    <LocaleContext.Provider value={localeContextValue}>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<LogIn />} />
        <Route path='/dashboard' element={<Dashboard />} />
      </Routes>
    </LocaleContext.Provider>
  )
}
