import React, { useContext } from 'react'
import { Layout } from '../components/base/Layout'
import { Header } from '../components/Header'
import { NavBar } from '../components/NavBar'
import { LocaleContext } from '../context/Locale'

export const Archive = () => {
  const { locale } = useContext(LocaleContext)

  return (
    <Layout
      title={locale === 'en' ? 'Archived Notes' : 'Arsip Catatan'}
      boxProps={{
        p: [4, 8, 12]
      }}
    >
      <Header layout='app' />

      <NavBar path='archive' />
    </Layout>
  )
}
