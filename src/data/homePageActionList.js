import { formAction } from '../utils/content'
import { useContext } from 'react'
import { LocaleContext } from '../context/Locale'

export const homePageActionList = () => {
  const { locale } = useContext(LocaleContext)

  return [
    {
      name: formAction[locale].register,
      path: 'register',
      variant: 'outline'
    },
    { name: formAction[locale].login, path: 'login', variant: 'solid' }
  ]
}
