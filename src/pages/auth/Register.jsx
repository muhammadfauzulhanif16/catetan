import React from 'react'
import { FormControl } from '../../components/FormControl'
import { Layout } from '../../components/Layout'
import { Button, Flex, GridItem, Link } from '@chakra-ui/react'
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
import { Language } from '../../components/Language'
import { Theme } from '../../components/Theme'

export const Register = () => {
  const [fullName, onFullNameChange, isInValidFullName] = useForm('')
  const [email, onEmailChange] = useForm('')
  const [password, onPasswordChange] = useForm('')
  const [confirmPassword, onConfirmPasswordChange] = useForm('')

  return (
    <Layout
      title='Register an account'
      boxProps={{
        display: 'grid',
        gridTemplateColumns: [
          'repeat(1, 1fr)',
          'repeat(1, 1fr)',
          'repeat(5, 1fr)'
        ],
        p: [4, 8],
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <GridItem
        colStart={[1, 1, 2]}
        colSpan={[1, 1, 3]}
        display='grid'
        gridTemplateColumns={['repeat(1, 1fr)', 'repeat(2, 1fr)']}
        alignItems='center'
        justifyContent='center'
        gap={4}
      >
        <GridItem colSpan={[1, 2]}>
          <Flex gap={4}>
            <Language />
            <Theme />
          </Flex>
        </GridItem>

        <GridItem
          colSpan={[1, 2]}
          mb={4}
          display='flex'
          justifyContent='center'
        >
          <Logo />
        </GridItem>

        <FormControl
          formControlProps={{
            isRequired: true,
            role: 'group',
            _invalid: { isInvalid: isInValidFullName }
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
          helperText=''
          inputProps={{
            placeholder: 'Enter your confirm password',
            value: confirmPassword,
            onChange: onConfirmPasswordChange
          }}
        />

        <GridItem colSpan={[1, 2]} mt={4}>
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
        </GridItem>

        <GridItem colSpan={[1, 2]} mt={4} color='gray.400' textAlign='center'>
          Proudly made by{' '}
          <Link
            color='purple.500'
            href='https://github.com/muhammadfauzulhanif16'
            isExternal
          >
            Muhammad Fauzul Hanif
          </Link>
          . All right reserved
        </GridItem>
      </GridItem>
    </Layout>
  )
}
