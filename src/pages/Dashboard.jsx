import React from 'react'
import { Layout } from '../components/Layout'
import { Header } from '../components/Header'

export const Dashboard = () => {
  return (
    <Layout
      title='Dashboard'
      boxProps={{
        p: [4, 8, 12]
      }}
    >
      <Header layout='app' />

      <div>tes</div>
    </Layout>
  )
}
