import React from 'react'
import { Flex } from '@chakra-ui/react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet-async'

export const Layout = ({ children, title, flexProps }) => (
  <Flex {...flexProps} bgColor="gray.50" pos="fixed" h="100vh" w="100vw">
    <Helmet>
      <title>{`${title} | Catetan`}</title>
    </Helmet>

    {children}
  </Flex>
)

Layout.propTypes = {
  children: PropTypes.element.isRequired,
  title: PropTypes.string.isRequired,
  flexProps: PropTypes.object
}
