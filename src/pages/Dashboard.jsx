import React from 'react'
import { Layout } from '../components/Layout'
import { Header } from '../components/Header'
import { VisuallyHidden } from '@chakra-ui/react'

export const Dashboard = () => {
  return (
    <Layout
      title='Dashboard'
      boxProps={{
        p: [4, 8, 12]
      }}
    >
      <Header layout='app' />

      <VisuallyHidden>Tes</VisuallyHidden>
    </Layout>
  )
}
