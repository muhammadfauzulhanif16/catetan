import React from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthLayout } from '../components/AuthLayout'
import { Button, Flex } from '@chakra-ui/react'

export const Home = () => {
  const navigate = useNavigate()

  return (
    <AuthLayout title='Register an account'>
      <Flex
        flexGrow={1}
        direction='column'
        gap={[4, 6, 8]}
        w={['full', '80%', '60%', '40%']}
        m='auto'
        justifyContent='center'
        alignItems='center'
      >
        <Button
          variant='outline'
          w='full'
          borderColor='yellow.300'
          _hover={{
            bgColor: 'yellow.400'
          }}
          onClick={() => navigate('/register')}
        >
          Register A New Account
        </Button>
        <Button
          w='full'
          bgColor='yellow.300'
          _hover={{
            bgColor: 'yellow.400'
          }}
          onClick={() => navigate('/login')}
        >
          Log In to Account
        </Button>
      </Flex>
    </AuthLayout>
  )
}
