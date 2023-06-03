import { useForm } from './hooks'
import { useState } from 'react'
import {
  Mail as MailRegular,
  Password as PasswordRegular,
  Person as PersonRegular
} from '@emotion-icons/fluentui-system-regular'
import {
  Mail as MailFilled,
  Password as PasswordFilled,
  Person as PersonFilled
} from '@emotion-icons/fluentui-system-filled'
import PropTypes from 'prop-types'

export const register = (locale) => {
  const [fullName, onFullNameChange] = useForm('')
  const [email, onEmailChange] = useForm('')
  const [password, onPasswordChange] = useForm('')
  const [confirmPassword, onConfirmPasswordChange] = useForm('')

  const userData = {
    name: fullName,
    email,
    password
  }

  const isValidFullName = fullName.length > 0
  const isValidEmail = /[a-z0-9]+@[a-z0-9]+.[a-z]{2,3}/.test(email)
  const isValidPassword = password.length >= 6
  const isValidConfirmPassword = confirmPassword === password && isValidPassword

  const isValid =
    !isValidFullName ||
    !isValidEmail ||
    !isValidPassword ||
    !isValidConfirmPassword

  const [isInValidFullName, setIsInValidFullName] = useState(false)
  const [isInValidEmail, setIsInValidEmail] = useState(false)
  const [isInValidPassword, setIsInValidPassword] = useState(false)
  const [isInValidConfirmPassword, setIsInValidConfirmPassword] =
    useState(false)

  const registerList = [
    {
      label: locale === 'en' ? 'Full Name' : 'Nama Lengkap',
      type: 'text',
      initIcon: PersonRegular,
      finalIcon: PersonFilled,
      helperText: isInValidFullName
        ? `${
            locale === 'en'
              ? 'Full name is required'
              : 'Nama lengkap diperlukan'
          }`
        : '',
      value: fullName,
      onChange: onFullNameChange,
      valid: isValidFullName,
      inValid: isInValidFullName,
      setInValid: setIsInValidFullName
    },
    {
      label: locale === 'en' ? 'Email' : 'Surel',
      type: 'email',
      initIcon: MailRegular,
      finalIcon: MailFilled,
      helperText: isInValidEmail
        ? `${locale === 'en' ? 'Email is required' : 'Surel diperlukan'}`
        : `${locale === 'en' ? 'Email must be unique' : 'Surel harus unik'}`,
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
        : `${
            locale === 'en'
              ? 'Must be at least 6 characters'
              : 'Minimal harus 6 karakter'
          }`,
      value: password,
      onChange: onPasswordChange,
      valid: isValidPassword,
      inValid: isInValidPassword,
      setInValid: setIsInValidPassword
    },
    {
      label: locale === 'en' ? 'Confirm Password' : 'Konfirmasi Kata Sandi',
      type: 'password',
      initIcon: PasswordRegular,
      finalIcon: PasswordFilled,
      helperText: isInValidConfirmPassword
        ? `${
            locale === 'en'
              ? "Confirm password doesn't match"
              : 'Konfirmasi kata sandi tidak sesuai'
          }`
        : `${
            locale === 'en'
              ? 'Confirm password must match'
              : 'Konfirmasi kata sandi harus sesuai'
          }`,
      value: confirmPassword,
      onChange: onConfirmPasswordChange,
      valid: isValidConfirmPassword,
      inValid: isInValidConfirmPassword,
      setInValid: setIsInValidConfirmPassword
    }
  ]

  return {
    registerList,
    isValid,
    userData
  }
}

register.propTypes = {
  locale: PropTypes.string
}
