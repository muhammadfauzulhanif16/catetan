import { Navigation } from './base/Navigation'
import React, { useContext } from 'react'
import { ThemeContext } from '../context/Theme'
import { LocaleContext } from '../context/Locale'

export const LoadingState = () => {
  const { theme } = useContext(ThemeContext)
  const { locale } = useContext(LocaleContext)

  return (
    <Navigation
      buttonProps={{
        color: `gray.${theme === 'light' ? '400' : '500'}`,
        display: 'flex',
        gap: 2,
        isLoading: true,
        h: 'full',
        variant: '',
        loadingText: locale === 'en' ? 'Wait a minute' : 'Tunggu dulu'
      }}
    />
  )
}
