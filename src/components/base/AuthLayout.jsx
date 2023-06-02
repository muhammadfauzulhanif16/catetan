import React from 'react'
import { Layout } from './Layout'
import { Footer } from '../Footer'
import { Header } from '../Header'
import PropTypes from 'prop-types'

export const AuthLayout = ({ title, children }) => {
  return (
    <Layout
      title={title}
      boxProps={{
        display: 'flex',
        flexDirection: 'column',
        p: [4, 4, 8, 12]
      }}
    >
      <Header layout='auth' />

      {children}

      <Footer />
    </Layout>
  )
}

AuthLayout.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
}
