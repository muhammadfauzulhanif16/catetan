import React from 'react'
import { Button } from '@chakra-ui/react'
import { Icon } from './Icon'
import { WeatherSunny } from '@emotion-icons/fluentui-system-regular'

export const Theme = () => (
  <Button p={0} w='full'>
    <Icon
      initIcon={WeatherSunny}
      iconProps={{
        w: 6,
        h: 6
      }}
    />
  </Button>
)
