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

export const register = () => {
  const [fullName, onFullNameChange] = useForm('')
  const [email, onEmailChange] = useForm('')
  const [password, onPasswordChange] = useForm('')
  const [confirmPassword, onConfirmPasswordChange] = useForm('')

  const isValidFullName = fullName.length > 0
  const isValidEmail = /[a-z0-9]+@[a-z0-9]+.[a-z]{2,3}/.test(email)
  const isValidPassword = password.length >= 8
  const isValidConfirmPassword = confirmPassword === password && isValidPassword

  const [isInValidFullName, setIsInValidFullName] = useState(false)
  const [isInValidEmail, setIsInValidEmail] = useState(false)
  const [isInValidPassword, setIsInValidPassword] = useState(false)
  const [isInValidConfirmPassword, setIsInValidConfirmPassword] =
    useState(false)

  const registerList = [
    {
      label: 'Full Name',
      type: 'text',
      initIcon: PersonRegular,
      finalIcon: PersonFilled,
      helperText: isInValidFullName ? 'Full name is required' : '',
      placeholder: 'Enter your full name',
      value: fullName,
      onChange: onFullNameChange,
      valid: isValidFullName,
      inValid: isInValidFullName,
      setInValid: setIsInValidFullName
    },
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
      helperText: isInValidPassword
        ? 'Password is required'
        : 'Minimal 8 characters',
      placeholder: 'Enter your password',
      value: password,
      onChange: onPasswordChange,
      valid: isValidPassword,
      inValid: isInValidPassword,
      setInValid: setIsInValidPassword
    },
    {
      label: 'Confirm Password',
      type: 'password',
      initIcon: PasswordRegular,
      finalIcon: PasswordFilled,
      helperText: isInValidConfirmPassword
        ? "Confirm password doesn't match"
        : 'Confirm password must match',
      placeholder: 'Enter your confirm password',
      value: confirmPassword,
      onChange: onConfirmPasswordChange,
      valid: isValidConfirmPassword,
      inValid: isInValidConfirmPassword,
      setInValid: setIsInValidConfirmPassword
    }
  ]

  return {
    registerList,
    isValidFullName,
    isValidEmail,
    isValidPassword,
    isValidConfirmPassword
  }
}