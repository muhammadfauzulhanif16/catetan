import { action } from '../utils/content'
import { useContext } from 'react'
import { LocaleContext } from '../context/Locale'

export const actionList = () => {
  const { locale } = useContext(LocaleContext)

  return [
    {
      name: action[locale].register.button,
      path: 'register',
      variant: 'outline'
    },
    { name: action[locale].login.button, path: 'login', variant: 'solid' }
  ]
}
