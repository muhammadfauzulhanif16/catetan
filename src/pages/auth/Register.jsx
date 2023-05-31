import React from 'react'
import { Layout } from '../../components/Layout'
import { Button, Container, Flex, Grid, Link } from '@chakra-ui/react'
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
  Mail as MailFilled,
  Password as PasswordFilled,
  Person as PersonFilled
} from '@emotion-icons/fluentui-system-filled'
import { Icon } from '../../components/Icon'
import { useForm } from '../../utils/hooks'
import { Logo } from '../../components/Logo'

export const Register = () => {
  const [fullName, onFullNameChange] = useForm('')
  const [email, onEmailChange] = useForm('')
  const [password, onPasswordChange] = useForm('')
  const [confirmPassword, onConfirmPasswordChange] = useForm('')

  return (
    <Layout
      title='Register an account'
      boxProps={{
        display: 'flex',
        flexDirection: 'column',
        p: [4, 8, 12]
      }}
    >
      <>
        <Flex
          flex='none'
          gap={4}
          justifyContent='flex-end'
          alignItems='flex-end'
        >
          <Flex gap={4}>
            <Language />

            <Theme />
          </Flex>
        </Flex>

        <Container
          display='flex'
          flexGrow={1}
          flexDirection='column'
          justifyContent='center'
          gap={8}
          p={0}
          alignItems='center'
        >
          <Logo />

          <Grid
            templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)' }}
            gap={4}
            w='full'
          >
            <FormControl
              formControlProps={{
                isRequired: true,
                role: 'group'
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
              type='text'
              label='Full Name'
              helperText=''
              inputProps={{
                placeholder: 'Enter your full name',
                value: fullName,
                onChange: onFullNameChange
              }}
            />

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
            colSpan={2}
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
          >
            Create account
          </Button>
        </Container>

        <Flex justifyContent='center'>
          Proudly made by{' '}
          <Link
            color='purple.500'
            href='https://github.com/muhammadfauzulhanif16'
            isExternal
          >
            Muhammad Fauzul Hanif
          </Link>
          , all right reserved.
        </Flex>
      </>
    </Layout>
  )
}
