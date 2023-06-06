import React, { useContext } from 'react'
import { Flex, Text } from '@chakra-ui/react'
import { Icon } from './base/Icon'
import { Note } from '@emotion-icons/fluentui-system-regular'
import { ThemeContext } from '../context/Theme'

export const EmptyState = () => {
  const { theme } = useContext(ThemeContext)

  return (
    <Flex
      color={`gray.${theme === 'light' ? '300' : '600'}`}
      direction='column'
      alignItems='center'
      justifyContent='center'
      py={16}
      h='full'
    >
      <Icon
        initIcon={Note}
        iconProps={{
          w: 24,
          h: 24
        }}
      />
      <Text fontSize='xl'>Ops... no notes yet</Text>
    </Flex>
  )
}
