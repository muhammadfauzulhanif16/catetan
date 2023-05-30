import React from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet-async'
import { Box } from '@chakra-ui/react'

export const Layout = ({ children, title, boxProps }) => (
  <Box {...boxProps} bgColor='gray.50' pos='fixed' h='100vh' w='100vw'>
    <Helmet>
      <title>{`${title} | Catetan`}</title>
    </Helmet>

    {children}
  </Box>
)

Layout.propTypes = {
  children: PropTypes.element.isRequired,
  title: PropTypes.string.isRequired,
  boxProps: PropTypes.object
}
