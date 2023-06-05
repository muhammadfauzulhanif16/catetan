import React from 'react'
import { Flex, Text } from '@chakra-ui/react'
import { Icon } from './base/Icon'
import { Note } from '@emotion-icons/fluentui-system-regular'

export const EmptyState = () => {
  return (
    <Flex
      color='gray.400'
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
