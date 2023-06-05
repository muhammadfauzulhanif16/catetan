import { extendTheme } from '@chakra-ui/react'
import { useContext } from 'react'
import { ThemeContext } from './context/Theme'

export const ThemeChakra = () => {
  const { theme } = useContext(ThemeContext)

  return extendTheme({
    fonts: {
      body: 'Josefin Sans',
      heading: 'Josefin Sans'
    },
    styles: {
      global: () => ({
        body: {
          bg: theme === 'light' ? 'gray.50' : 'gray.900'
        }
      })
    }
  })
}
