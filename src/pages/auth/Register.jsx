import React from 'react'
import { FormControl } from '../../components/FormControl'
import { Layout } from '../../components/Layout'
import { Button, GridItem } from '@chakra-ui/react'

export const Register = () => (
  <Layout
    title='Register an account'
    boxProps={{
      display: 'grid',
      gridTemplateColumns: [
        'repeat(1, 1fr)',
        'repeat(5, 1fr)',
        'repeat(4, 1fr)'
      ],
      p: [4, 0]
    }}
  >
    <GridItem
      colStart={[1, 2, 2]}
      colSpan={[1, 3, 2]}
      display='flex'
      alignItems='center'
      justifyContent='center'
      flexDirection='column'
      gap={4}
    >
      <FormControl type='text' label='Full Name' helperText='' />
      <FormControl type='email' label='Email' helperText='' />
      <FormControl
        type='password'
        label='Password'
        helperText='Minimum 8 characters'
      />
      <FormControl type='password' label='Confirm Password' helperText='' />

      <Button
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
