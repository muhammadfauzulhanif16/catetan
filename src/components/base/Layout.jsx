import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet-async'
import { Box } from '@chakra-ui/react'
import { ThemeContext } from '../../context/Theme'
import { LocaleContext } from '../../context/Locale'

export const Layout = ({ children, title, boxProps }) => {
  const { theme } = useContext(ThemeContext)
  const { locale } = useContext(LocaleContext)

  return (
    <Box
      {...boxProps}
      bgColor={theme === 'light' ? 'gray.50' : 'gray.900'}
      h='100vh'
      w='100vw'
      userSelect='none'
    >
      <Helmet>
        <meta
          content={
            locale === 'en'
              ? 'The application for keeping personal notes was created by Muhammad Fauzul Hanif'
              : 'Aplikasi pencatatan catatan pribadi ini dibuat oleh Muhammad Fauzul Hanif'
          }
          name='description'
        />
        <meta
          content={theme === 'light' ? 'gray.50' : 'gray.900'}
          name='theme-color'
        />
        <title>{`${title} | Catetan - ${
          locale === 'en' ? 'Keep personal notes' : 'Simpan catatan pribadi'
        }`}</title>
      </Helmet>

      {children}
    </Box>
  )
}

Layout.propTypes = {
  children: PropTypes.arrayOf(PropTypes.node).isRequired,
  title: PropTypes.string.isRequired,
  boxProps: PropTypes.object
}
