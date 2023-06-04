import { ChakraProvider, ColorModeScript } from '@chakra-ui/react'
import React, { StrictMode } from 'react'
import * as ReactDOM from 'react-dom/client'
import { HelmetProvider } from 'react-helmet-async'
import { theme } from './_theme'
import { App } from './App'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ColorModeScript />

    <HelmetProvider>
      <ChakraProvider theme={theme}>
        {/* <RouterProvider router={router} /> */}

        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ChakraProvider>
    </HelmetProvider>
  </StrictMode>
)
