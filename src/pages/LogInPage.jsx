import React, { useContext, useState } from 'react'
import { Grid, useToast } from '@chakra-ui/react'
import { FormControl } from '../components/base/FormControl'
import { Icon } from '../components/base/Icon'
import { useNavigate } from 'react-router-dom'
import { loginForm } from '../utils/loginForm'
import { AuthLayout } from '../components/base/AuthLayout'
import {
  formAction,
  formHelperText,
  titlePageLocaleList
} from '../utils/content'
import { LocaleContext } from '../context/Locale'
import { ThemeContext } from '../context/Theme'
import PropTypes from 'prop-types'
import { logInUser } from '../api'

export const LogInPage = ({ onLoginSuccess }) => {
  const navigate = useNavigate()
  const { theme } = useContext(ThemeContext)
  const { locale } = useContext(LocaleContext)
  const { formList, isValid, initialState } = loginForm(locale)
  const [isLoading, setIsLoading] = useState(false)
  const toast = useToast()

  const onLogInUser = async (payload) => {
    setIsLoading(true)

    setTimeout(async () => {
      const { error, data } = await logInUser(payload)

      if (!error) {
        onLoginSuccess(data.data)
        toast({
          title: 'Log In Success',
          description: data.message,
          status: 'success',
          duration: 4000,
          isClosable: true,
          position: 'top'
        })

        navigate('/')
      } else {
        toast({
          title: 'Log In Failed',
          description: data.message,
          status: 'error',
          duration: 4000,
          isClosable: true,
          position: 'top'
        })
      }

      setIsLoading(false)
    }, 4000)
  }

  return (
    <AuthLayout
      title={titlePageLocaleList[locale].login}
      redirectPathPage='register'
      flexProps={{
        w: { base: 'full', md: '80%', lg: '60%' }
      }}
      isLoadingForm={isLoading}
      isValidForm={isValid}
      onClickForm={() => onLogInUser(initialState)}
      isAuthPage
      formAction={formAction[locale].login}
      startFormHelperText={formHelperText[locale].login.start}
      endFormHelperText={formHelperText[locale].login.end}
    >
      <Grid
        templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)' }}
        gap={4}
        w='full'
      >
        {formList.map((login, id) => (
          <FormControl
            key={id}
            label={login.label}
            type={login.type}
            inputLeftElement={
              <Icon
                initIcon={login.initIcon}
                finalIcon={login.finalIcon}
                iconProps={{
                  w: 6,
                  h: 6
                }}
              />
            }
            helperText={login.helperText}
            formHelperTextProps={{
              color: login.inValid
                ? `red.${theme === 'light' ? '600' : '300'}`
                : `gray.${theme === 'light' ? '600' : '300'}`
            }}
            inputProps={{
              placeholder:
                locale === 'en'
                  ? `Enter your ${login.label.toLowerCase()}`
                  : `Masukkan ${login.label.toLowerCase()} anda`,
              value: login.value,
              onChange: login.onChange
            }}
            formControlProps={{
              isRequired: true,
              role: 'group',
              isInvalid: login.inValid,
              onBlur: login.valid
                ? () => login.setInValid(false)
                : () => login.setInValid(true)
            }}
          />
        ))}
      </Grid>
    </AuthLayout>
  )
}

LogInPage.propTypes = {
  onLoginSuccess: PropTypes.func
}
