import React from 'react'
import { Button } from '@chakra-ui/react'
import { Icon } from './Icon'
import { LocalLanguage } from '@emotion-icons/fluentui-system-regular'

export const Language = () => (
  <Button p={0}>
    <Icon
      initIcon={LocalLanguage}
      iconProps={{
        w: 6,
        h: 6
      }}
    />
  </Button>
)
