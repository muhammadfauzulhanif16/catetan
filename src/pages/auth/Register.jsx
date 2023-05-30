import React from 'react'
import { FormControl } from '../../components/FormControl'
import { Layout } from '../../components/Layout'
import { Button, GridItem } from '@chakra-ui/react'
import {
  LockClosed,
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

export const Register = () => (
  <Layout
    title='Register an account'
    boxProps={{
      display: 'grid',
      gridTemplateColumns: [
        'repeat(1, 1fr)',
        'repeat(5, 1fr)',
        'repeat(3, 1fr)'
      ],
      p: [4, 0]
    }}
  >
    <GridItem
      colStart={[1, 2, 2]}
      colSpan={[1, 3, 1]}
      display='flex'
      alignItems='center'
      justifyContent='center'
      flexDirection='column'
      gap={4}
    >
      <FormControl
        formControlProps={{
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
      />
      <FormControl
        formControlProps={{
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
      />
      <FormControl
        formControlProps={{
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
      />
      <FormControl
        formControlProps={{
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
      />

      <Button
        leftIcon={
          <Icon
            initIcon={LockClosed}
            iconProps={{
              w: 6,
              h: 6
            }}
          />
        }
        isDisabled
        w='full'
        bgColor='yellow.300'
        color='gray.600'
        _hover={{
          bgColor: 'yellow.400'
        }}
      >
        Register account
      </Button>
    </GridItem>
  </Layout>
)
