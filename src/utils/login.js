import { useForm } from './hooks'
import { useState } from 'react'
import {
  Mail as MailRegular,
  Password as PasswordRegular
} from '@emotion-icons/fluentui-system-regular'
import {
  Mail as MailFilled,
  Password as PasswordFilled
} from '@emotion-icons/fluentui-system-filled'

export const login = () => {
  const [email, onEmailChange] = useForm('')
  const [password, onPasswordChange] = useForm('')

  const isValidEmail = /[a-z0-9]+@[a-z0-9]+.[a-z]{2,3}/.test(email)
  const isValidPassword = password.length >= 8

  const [isInValidEmail, setIsInValidEmail] = useState(false)
  const [isInValidPassword, setIsInValidPassword] = useState(false)

  const loginList = [
    {
      label: 'Email',
      type: 'email',
      initIcon: MailRegular,
      finalIcon: MailFilled,
      helperText: isInValidEmail ? 'Email is required' : '',
      placeholder: 'Enter your email',
      value: email,
      onChange: onEmailChange,
      valid: isValidEmail,
      inValid: isInValidEmail,
      setInValid: setIsInValidEmail
    },
    {
      label: 'Password',
      type: 'password',
      initIcon: PasswordRegular,
      finalIcon: PasswordFilled,
      helperText: isInValidPassword ? 'Password is required' : '',
      placeholder: 'Enter your password',
      value: password,
      onChange: onPasswordChange,
      valid: isValidPassword,
      inValid: isInValidPassword,
      setInValid: setIsInValidPassword
    }
  ]

  return {
    loginList,
    isValidEmail,
    isValidPassword
  }
}
