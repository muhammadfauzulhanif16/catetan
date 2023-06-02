import { action } from '../utils/content'
import { useContext } from 'react'
import { LocaleContext } from '../context/Locale'

export const actionList = () => {
  const { locale } = useContext(LocaleContext)

  return [
    { name: action[locale].register, path: 'register', variant: 'outline' },
    { name: action[locale].login, path: 'login', variant: 'solid' }
  ]
}
