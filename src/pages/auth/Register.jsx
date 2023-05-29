import React from 'react'
import { FormControl } from '../../components/FormControl'
import { Layout } from '../../components/Layout'
import { Button, Container } from '@chakra-ui/react'

export const Register = () => (
  <Layout
    title="Register a new account"
    flexProps={{
      alignItems: 'center'
    }}
  >
    <Container>
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
    </Container>
  </Layout>
)
