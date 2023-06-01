import React from 'react'
import { Layout } from '../components/Layout'
import { Header } from '../components/Header'
import { NavBar } from '../components/NavBar'

export const Dashboard = () => {
  return (
    <Layout
      title='Dashboard'
      boxProps={{
        p: [4, 8, 12]
      }}
    >
      <Header layout='app' />

      <NavBar />
    </Layout>
  )
}
