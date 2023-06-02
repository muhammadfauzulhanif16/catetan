import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthLayout } from '../components/AuthLayout'
import { Button, Flex } from '@chakra-ui/react'
import { actionList } from '../data/actionList'
import { LocaleContext } from '../context/Locale'
import { title } from '../utils/content'

export const Home = () => {
  const navigate = useNavigate()
  const actions = actionList()
  const { locale } = useContext(LocaleContext)

  return (
    <AuthLayout title={title[locale].home}>
      <Flex
        flexGrow={1}
        direction='column'
        gap={[4, 6, 8]}
        w={['full', '80%', '60%', '40%']}
        m='auto'
        justifyContent='center'
        alignItems='center'
      >
        {actions.map((action, id) => (
          <Button
            key={id}
            variant={action.variant}
            w='full'
            borderColor={
              action.variant === 'solid' ? 'transparent' : 'yellow.300'
            }
            bgColor={action.variant === 'solid' ? 'yellow.300' : 'transparent'}
            _hover={{
              bgColor: 'yellow.400'
            }}
            onClick={() => navigate(`/${action.path}`)}
          >
            {action.name}
          </Button>
        ))}
      </Flex>
    </AuthLayout>
  )
}
