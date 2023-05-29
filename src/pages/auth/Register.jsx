import React from 'react'
import { FormControl } from '../../components/FormControl'
import { Layout } from '../../components/Layout'
import { Button, SimpleGrid } from '@chakra-ui/react'

export const Register = () => (
  <Layout
    title="Register a new account"
    flexProps={{
      alignItems: 'center',
      justifyContent: 'center'
    }}
  >
    <SimpleGrid gap={4} columns={[1, 2]}>
      <FormControl type="text" label="Full Name" helperText="" />
      <FormControl type="email" label="Email" helperText="" />
      <FormControl
        type="password"
        label="Password"
        helperText="Minimum 8 characters"
      />
      <FormControl type="password" label="Confirm Password" helperText="" />

      <Button w="full" colorScheme="yellow">
        Register new account
      </Button>
    </SimpleGrid>
  </Layout>
)
