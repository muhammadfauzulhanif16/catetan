import React, { useState } from 'react'
import { Layout } from '../../components/Layout'
import { Button, Flex, Grid, Link, Text } from '@chakra-ui/react'
import { Language } from '../../components/Language'
import { Theme } from '../../components/Theme'
import { FormControl } from '../../components/FormControl'
import {
  LockClosed,
  LockOpen,
  Mail as MailRegular,
  Password as PasswordRegular,
  Person as PersonRegular
} from '@emotion-icons/fluentui-system-regular'
import {
  Checkmark,
  Mail as MailFilled,
  Password as PasswordFilled,
  Person as PersonFilled
} from '@emotion-icons/fluentui-system-filled'
import { Icon } from '../../components/Icon'
import { useForm } from '../../utils/hooks'
import { Logo } from '../../components/Logo'
import { useNavigate } from 'react-router-dom'

export const Register = () => {
  const navigate = useNavigate()

  const [fullName, onFullNameChange] = useForm('')
  const [email, onEmailChange] = useForm('')
  const [password, onPasswordChange] = useForm('')
  const [confirmPassword, onConfirmPasswordChange] = useForm('')

  const isValidFullName = fullName.length >= 3
  const isValidEmail = /[a-z0-9]+@[a-z0-9]+.[a-z]{2,3}/.test(email)
  const isValidPassword = password.length >= 8
  const isValidConfirmPassword = confirmPassword === password && isValidPassword

  const [isInValidFullName, setIsInValidFullName] = useState(false)
  const [isInValidEmail, setIsInValidEmail] = useState(false)
  const [isInValidPassword, setIsInValidPassword] = useState(false)
  const [isInValidConfirmPassword, setIsInValidConfirmPassword] =
    useState(false)

  return (
    <Layout
      title='Register an account'
      boxProps={{
        display: 'flex',
        flexDirection: 'column',
        p: [4, 4, 8, 12]
      }}
    >
      <Flex flex='none' gap={4} justifyContent='space-between'>
        <Logo />

        <Flex gap={4}>
          <Language />

          <Theme />
        </Flex>
      </Flex>

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
          <FormControl
            formControlProps={{
              isRequired: true,
              role: 'group',
              isInvalid: isInValidFullName,
              onBlur: isValidFullName
                ? () => setIsInValidFullName(false)
                : () => setIsInValidFullName(true)
            }}
            inputLeftElement={
              <Icon
                initIcon={PersonRegular}
                finalIcon={PersonFilled}
                iconProps={{
                  w: 6,
                  h: 6
                }}
              />
            }
            inputRightElement={
              fullName.length >= 3 ? (
                <Icon
                  initIcon={Checkmark}
                  iconProps={{
                    color: 'green.400',
                    w: 6,
                    h: 6
                  }}
                />
              ) : null
            }
            type='text'
            label='Full Name'
            helperText='Minimum 3 characters'
            inputProps={{
              placeholder: 'Enter your full name',
              value: fullName,
              onChange: onFullNameChange
            }}
          />

          <FormControl
            formControlProps={{
              isRequired: true,
              role: 'group',
              isInvalid: isInValidEmail,
              onBlur: isValidEmail
                ? () => setIsInValidEmail(false)
                : () => setIsInValidEmail(true)
            }}
            inputLeftElement={
              <Icon
                initIcon={MailRegular}
                finalIcon={MailFilled}
                iconProps={{
                  w: 6,
                  h: 6
                }}
              />
            }
            inputRightElement={
              isValidEmail ? (
                <Icon
                  initIcon={Checkmark}
                  iconProps={{
                    color: 'green.400',
                    w: 6,
                    h: 6
                  }}
                />
              ) : null
            }
            type='email'
            label='Email'
            helperText=''
            inputProps={{
              placeholder: 'Enter your email',
              value: email,
              onChange: onEmailChange,
              autoComplete: 'email'
            }}
          />

          <FormControl
            formControlProps={{
              isRequired: true,
              role: 'group',
              isInvalid: isInValidPassword,
              onBlur: isValidPassword
                ? () => setIsInValidPassword(false)
                : () => setIsInValidPassword(true)
            }}
            inputLeftElement={
              <Icon
                initIcon={PasswordRegular}
                finalIcon={PasswordFilled}
                iconProps={{
                  w: 6,
                  h: 6
                }}
              />
            }
            inputRightElement={
              isValidPassword ? (
                <Icon
                  initIcon={Checkmark}
                  iconProps={{
                    color: 'green.400',
                    w: 6,
                    h: 6
                  }}
                />
              ) : null
            }
            type='password'
            label='Password'
            helperText='Minimum 8 characters'
            inputProps={{
              placeholder: 'Enter your password',
              value: password,
              onChange: onPasswordChange
            }}
          />

          <FormControl
            formControlProps={{
              isRequired: true,
              role: 'group',
              isInvalid: isInValidConfirmPassword,
              onBlur: isValidConfirmPassword
                ? () => setIsInValidConfirmPassword(false)
                : () => setIsInValidConfirmPassword(true)
            }}
            inputLeftElement={
              <Icon
                initIcon={PasswordRegular}
                finalIcon={PasswordFilled}
                iconProps={{
                  w: 6,
                  h: 6
                }}
              />
            }
            inputRightElement={
              isValidConfirmPassword ? (
                <Icon
                  initIcon={Checkmark}
                  iconProps={{
                    color: 'green.400',
                    w: 6,
                    h: 6
                  }}
                />
              ) : null
            }
            type='password'
            label='Confirm Password'
            helperText='Password confirmation must match'
            inputProps={{
              placeholder: 'Enter your confirm password',
              value: confirmPassword,
              onChange: onConfirmPasswordChange
            }}
          />
        </Grid>

        <Button
          leftIcon={
            !fullName || !email || !password || !confirmPassword ? (
              <Icon
                initIcon={LockClosed}
                iconProps={{
                  w: 6,
                  h: 6
                }}
              />
            ) : (
              <Icon
                initIcon={LockOpen}
                iconProps={{
                  w: 6,
                  h: 6
                }}
              />
            )
          }
          isDisabled={!fullName || !email || !password || !confirmPassword}
          w='full'
          bgColor='yellow.300'
          color='gray.600'
          _hover={{
            bgColor: 'yellow.400'
          }}
          display='flex'
          alignItems='center'
        >
          Create Account
        </Button>

        <Text color='gray.500'>
          Already have an account?{' '}
          <Link color='yellow.500' onClick={() => navigate('login')}>
            Log in
          </Link>
        </Text>
      </Flex>

      <Text textAlign='center' color='gray.400'>
        Proudly made by{' '}
        <Link
          color='purple.500'
          href='https://github.com/muhammadfauzulhanif16'
          isExternal
        >
          Muhammad Fauzul Hanif
        </Link>
        , all right reserved.
      </Text>
    </Layout>
  )
}
