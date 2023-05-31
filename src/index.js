import { ChakraProvider, ColorModeScript } from '@chakra-ui/react'
import React, { StrictMode } from 'react'
import * as ReactDOM from 'react-dom/client'

import reportWebVitals from './reportWebVitals'
import * as serviceWorker from './serviceWorker'
import { HelmetProvider } from 'react-helmet-async'
import { theme } from './_theme'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Register } from './pages/auth/Register'
import { LogIn } from './pages/auth/LogIn'

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ColorModeScript />

    <HelmetProvider>
      <ChakraProvider theme={theme}>
        {/* <RouterProvider router={router} /> */}

        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Register />} />
            <Route path='/login' element={<LogIn />} />
          </Routes>
        </BrowserRouter>
      </ChakraProvider>
    </HelmetProvider>
  </StrictMode>
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorker.unregister()

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
