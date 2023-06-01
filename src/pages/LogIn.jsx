import React from 'react'
import { Layout } from '../components/Layout'
import { Button, Flex, Grid, Link, Text } from '@chakra-ui/react'
import { Language } from '../components/Language'
import { Theme } from '../components/Theme'
import { FormControl } from '../components/FormControl'
import {
  LockClosed,
  LockOpen,
  Mail as MailRegular,
  Password as PasswordRegular
} from '@emotion-icons/fluentui-system-regular'
import {
  Mail as MailFilled,
  Password as PasswordFilled
} from '@emotion-icons/fluentui-system-filled'
import { Icon } from '../components/Icon'
import { useForm } from '../utils/hooks'
import { Logo } from '../components/Logo'
import { useNavigate } from 'react-router-dom'

export const LogIn = () => {
  const navigate = useNavigate()

  const [email, onEmailChange] = useForm('')
  const [password, onPasswordChange] = useForm('')

  return (
    <Layout
      title='Log in account'
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
        w={['full', '80%', '60%', '40%']}
        m='auto'
        justifyContent='center'
        alignItems='center'
      >
        <Grid templateColumns='repeat(1, 1fr)' gap={4} w='full'>
          <FormControl
            formControlProps={{
              isRequired: true,
              role: 'group'
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
            type='email'
            label='Email'
            helperText=''
            inputProps={{
              placeholder: 'Enter your email',
              value: email,
              onChange: onEmailChange
            }}
          />

          <FormControl
            formControlProps={{
              isRequired: true,
              role: 'group'
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
            type='password'
            label='Password'
            inputProps={{
              placeholder: 'Enter your password',
              value: password,
              onChange: onPasswordChange
            }}
          />
        </Grid>

        <Button
          leftIcon={
            !email || !password ? (
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
          isDisabled={!email || !password}
          w='full'
          bgColor='yellow.300'
          color='gray.600'
          _hover={{
            bgColor: 'yellow.400'
          }}
          display='flex'
          alignItems='center'
        >
          Log In to Account
        </Button>

        <Text color='gray.500'>
          {"Don't have an account yet? "}
          <Link color='yellow.500' onClick={() => navigate('/register')}>
            Register
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
