import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthLayout } from '../components/base/AuthLayout'
import { homePageActionList } from '../data/homePageActionList'
import { LocaleContext } from '../context/Locale'
import { titlePageLocaleList } from '../utils/content'
import { ThemeContext } from '../context/Theme'
import { Navigation } from '../components/base/Navigation'

export const HomePage = () => {
  const navigate = useNavigate()
  const { locale } = useContext(LocaleContext)
  const { theme } = useContext(ThemeContext)

  return (
    <AuthLayout
      title={titlePageLocaleList[locale].home}
      flexProps={{
        w: ['full', '80%', '60%', '40%']
      }}
    >
      {homePageActionList().map((action, id) => (
        <Navigation
          key={id}
          text={action.name}
          buttonProps={{
            color: `gray.${theme === 'light' ? '700' : '200'}`,
            variant: action.variant,
            w: 'full',
            borderColor:
              action.variant === 'solid'
                ? 'transparent'
                : `yellow.${theme === 'light' ? '400' : '500'}`,
            bgColor:
              action.variant === 'solid'
                ? `yellow.${theme === 'light' ? '400' : '500'}`
                : 'transparent',
            _hover: {
              color: `gray.${theme === 'light' ? '200' : '700'}`,
              bgColor: `yellow.${theme === 'light' ? '500' : '400'}`
            },
            onClick: () => navigate(`/${action.path}`)
          }}
        />
      ))}
    </AuthLayout>
  )
}
