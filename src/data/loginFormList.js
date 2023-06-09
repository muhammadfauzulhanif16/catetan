import { useForm } from '../utils/hooks'
import { useState } from 'react'
import {
  Mail as MailRegular,
  Password as PasswordRegular
} from '@emotion-icons/fluentui-system-regular'
import {
  Mail as MailFilled,
  Password as PasswordFilled
} from '@emotion-icons/fluentui-system-filled'

export const loginFormList = ({ locale }) => {
  const [email, onEmailChange] = useForm('')
  const [password, onPasswordChange] = useForm('')

  const initialState = {
    email,
    password
  }

  const isValidEmail = /[a-z0-9]+@[a-z0-9]+.[a-z]{2,3}/.test(email)
  const isValidPassword = password.length >= 6

  const isValid = !isValidEmail || !isValidPassword

  const [isInValidEmail, setIsInValidEmail] = useState(false)
  const [isInValidPassword, setIsInValidPassword] = useState(false)

  const formList = [
    {
      label: locale === 'en' ? 'Email' : 'Surel',
      type: 'email',
      initIcon: MailRegular,
      finalIcon: MailFilled,
      helperText: isInValidEmail
        ? `${locale === 'en' ? 'Email is required' : 'Surel diperlukan'}`
        : '',
      value: email,
      onChange: onEmailChange,
      valid: isValidEmail,
      inValid: isInValidEmail,
      setInValid: setIsInValidEmail
    },
    {
      label: locale === 'en' ? 'Password' : 'Kata Sandi',
      type: 'password',
      initIcon: PasswordRegular,
      finalIcon: PasswordFilled,
      helperText: isInValidPassword
        ? `${
            locale === 'en' ? 'Password is required' : 'Kata sandi diperlukan'
          }`
        : '',
      value: password,
      onChange: onPasswordChange,
      valid: isValidPassword,
      inValid: isInValidPassword,
      setInValid: setIsInValidPassword
    }
  ]

  return {
    formList,
    isValid,
    initialState
  }
}
