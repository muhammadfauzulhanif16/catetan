import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getNote } from '../api'
import { Layout } from '../components/base/Layout'
import { Header } from '../components/Header'
import { NavBar } from '../components/NavBar'
import { LocaleContext } from '../context/Locale'
import PropTypes from 'prop-types'
import { Flex, Heading, Text } from '@chakra-ui/react'
import { Menu } from '../components/Menu'

export const DetailNotePage = ({ onLogOut }) => {
  const { locale } = useContext(LocaleContext)
  const [note, setNote] = useState(null)
  const { id } = useParams()
  const [isLoading, setIsLoading] = useState(true)
  localStorage.setItem('catetan-path', 'detail')

  useEffect(() => {
    setTimeout(() => {
      getNote(id).then(({ data }) => {
        setNote(data)
        setIsLoading(false)
      })
    }, 2000)
  }, [id])

  if (isLoading) return <>loading</>

  return (
    <Layout title={locale === 'en' ? 'Active Notes' : 'Catatan Aktif'}>
      <Header layout='app' onLogOut={onLogOut} />

      <Flex direction='column' px={[4, 8, 12]} h='full' w='full'>
        <Flex justifyContent='space-between' w='full' gap={4}>
          <Heading w='full'>{note.title}</Heading>

          <Menu data={note} />
        </Flex>
        <Text>{note.body}</Text>
      </Flex>
      <NavBar />
    </Layout>
  )
}

DetailNotePage.propTypes = {
  onLogOut: PropTypes.func
}
