import React from 'react'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import { Register } from './pages/auth/Register'

// import { ColorModeSwitcher } from './ColorModeSwitcher'

export const App = () => {
  const theme = extendTheme({
    fonts: {
      body: 'Josefin Sans',
      heading: 'Josefin Sans'
    }
    // styles: {
    //   global: (props) => ({
    //     body: {
    //       color: mode('gray.500', 'gray.400')(props),
    //       bg: mode('white', 'gray.900')(props)
    //     }
    //   })
    // }
  })

  return (
    <ChakraProvider theme={theme}>
      <Register />
    </ChakraProvider>
  )
}
