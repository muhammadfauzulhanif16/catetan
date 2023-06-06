import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getNote } from '../api'
import { Layout } from '../components/base/Layout'
import { Header } from '../components/Header'
import { NavBar } from '../components/NavBar'
import { LocaleContext } from '../context/Locale'
import PropTypes from 'prop-types'
import { Badge, Flex, Heading, Text } from '@chakra-ui/react'
import { ThemeContext } from '../context/Theme'

export const DetailNotePage = ({ onLogOut }) => {
  const { theme } = useContext(ThemeContext)
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

      <Flex
        direction='column'
        px={[4, 8, 12]}
        h='full'
        color={`gray.${theme === 'light' ? '600' : '300'}`}
        gap={4}
      >
        <Heading w='full'>{note.title}</Heading>

        <Flex
          justifyContent='space-between'
          w='full'
          gap={4}
          alignItems='center'
        >
          <Text color={`gray.${theme === 'light' ? '500' : '400'}`}>
            {note.createdAt}
          </Text>

          {note.archived && <Badge colorScheme='purple'>Archived</Badge>}
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
