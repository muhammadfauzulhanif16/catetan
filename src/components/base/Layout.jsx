import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet-async'
import { Box } from '@chakra-ui/react'
import { ThemeContext } from '../../context/Theme'

export const Layout = ({ children, title, boxProps }) => {
  const { theme } = useContext(ThemeContext)

  return (
    <Box
      {...boxProps}
      bgColor={theme === 'light' ? 'gray.50' : 'gray.900'}
      h='100vh'
      w='100vw'
      userSelect='none'
    >
      <Helmet>
        <title>{`${title} | Catetan`}</title>
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
