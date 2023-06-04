import React, { useContext, useState } from 'react'
import { Flex, Grid, Link, Text, useToast } from '@chakra-ui/react'
import { FormControl } from '../components/base/FormControl'
import {
  LockClosed as LockClosedRegular,
  LockOpen as LockOpenRegular
} from '@emotion-icons/fluentui-system-regular'
import {
  Checkmark,
  LockClosed as LockClosedFilled,
  LockOpen as LockOpenFilled
} from '@emotion-icons/fluentui-system-filled'
import { Icon } from '../components/base/Icon'
import { useNavigate } from 'react-router-dom'
import { login } from '../utils/login'
import { AuthLayout } from '../components/base/AuthLayout'
import { action, formHelperText, title } from '../utils/content'
import { LocaleContext } from '../context/Locale'
import { ThemeContext } from '../context/Theme'
import { Nav } from '../components/base/Nav'
import PropTypes from 'prop-types'
import { logInUser } from '../api'

export const LogIn = ({ onLoginSuccess }) => {
  const navigate = useNavigate()
  const { theme } = useContext(ThemeContext)
  const { locale } = useContext(LocaleContext)
  const { loginList, isValid, userData } = login(locale)
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

        navigate('/all')
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
    <AuthLayout title={title[locale].login}>
      <Flex
        flexGrow={1}
        direction='column'
        gap={[4, 6, 8]}
        w={{ base: 'full', md: '80%', lg: '60%' }}
        m='auto'
        justifyContent='center'
        alignItems='center'
      >
        <Grid
          templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)' }}
          gap={4}
          w='full'
        >
          {loginList.map((register, id) => (
            <FormControl
              key={id}
              label={register.label}
              type={register.type}
              inputLeftElement={
                <Icon
                  initIcon={register.initIcon}
                  finalIcon={register.finalIcon}
                  iconProps={{
                    w: 6,
                    h: 6
                  }}
                />
              }
              helperText={register.helperText}
              formHelperTextProps={{
                color: register.inValid
                  ? `red.${theme === 'light' ? '600' : '300'}`
                  : `gray.${theme === 'light' ? '600' : '300'}`
              }}
              inputProps={{
                placeholder:
                  locale === 'en'
                    ? `Enter your ${register.label.toLowerCase()}`
                    : `Masukkan ${register.label.toLowerCase()} anda`,
                value: register.value,
                onChange: register.onChange
              }}
              formControlProps={{
                isRequired: true,
                role: 'group',
                isInvalid: register.inValid,
                onBlur: register.valid
                  ? () => register.setInValid(false)
                  : () => register.setInValid(true)
              }}
              inputRightElement={
                register.valid && (
                  <Icon
                    initIcon={Checkmark}
                    iconProps={{
                      color: 'green.400',
                      w: 6,
                      h: 6
                    }}
                  />
                )
              }
            />
          ))}
        </Grid>

        <Nav
          buttonProps={{
            isLoading,
            loadingText: isLoading && locale === 'en' ? 'Loading' : 'Memuat',
            isDisabled: isValid,
            display: 'flex',
            gap: 4,
            w: 'full',
            color: `gray.${theme === 'light' ? '600' : '300'}`,
            bgColor: `yellow.${theme === 'light' ? '400' : '500'}`,
            _hover: {
              color: `gray.${theme === 'light' ? '300' : '600'}`,
              bgColor: `yellow.${theme === 'light' ? '500' : '400'}`
            },
            role: 'group',
            onClick: () => onLogInUser(userData)
          }}
          initIcon={isValid ? LockClosedRegular : LockOpenRegular}
          finalIcon={isValid ? LockClosedFilled : LockOpenFilled}
          iconProps={{
            w: 6,
            h: 6
          }}
          text={action[locale].login.button}
        />

        <Text color='gray.500'>
          {`${formHelperText[locale].login}? `}
          <Link color='yellow.500' onClick={() => navigate('/register')}>
            {action[locale].register.link}
          </Link>
        </Text>
      </Flex>
    </AuthLayout>
  )
}

LogIn.propTypes = {
  onLoginSuccess: PropTypes.func
}
