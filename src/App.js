import React from 'react'
import { ChakraProvider, theme } from '@chakra-ui/react'
import { Register } from './pages/auth/Register'

// import { ColorModeSwitcher } from './ColorModeSwitcher'

export const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <Register />
    </ChakraProvider>
  )
}
