import {
  Box,
  Drawer as DrawerChakra,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Heading,
  Text,
  useDisclosure
} from '@chakra-ui/react'
import React, { useRef } from 'react'
import { Nav } from './base/Nav'
import {
  Important as ImportantFilled,
  LocalLanguage as LocalLanguageFilled,
  MoreVertical as MoreVerticalFilled,
  PersonAccounts as PersonAccountsFilled,
  SignOut as SignOutFilled,
  WeatherSunny as WeatherSunnyFilled
} from '@emotion-icons/fluentui-system-filled'
import {
  Important as ImportantRegular,
  LocalLanguage as LocalLanguageRegular,
  MoreVertical as MoreVerticalRegular,
  PersonAccounts as PersonAccountsRegular,
  SignOut as SignOutRegular,
  WeatherSunny as WeatherSunnyRegular
} from '@emotion-icons/fluentui-system-regular'
import { Icon } from './base/Icon'
import { US } from 'country-flag-icons/react/3x2'

export const Drawer = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = useRef()

  return (
    <>
      <Nav
        initIcon={MoreVerticalRegular}
        finalIcon={MoreVerticalFilled}
        iconProps={{
          w: 6,
          h: 6
        }}
        buttonProps={{
          onClick: onOpen,
          ref: btnRef,
          p: 0
        }}
      />

      <DrawerChakra
        isOpen={isOpen}
        placement='right'
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />

        <DrawerContent
          bgColor='gray.50'
          p={[4, 8]}
          display='flex'
          direction='column'
          gap={[4, 8]}
        >
          <DrawerHeader display='flex' gap={4} alignItems='center' p={0}>
            <Icon
              initIcon={PersonAccountsRegular}
              finalIcon={PersonAccountsFilled}
              iconProps={{
                color: 'yellow.300',
                w: 12,
                h: 12
              }}
            />

            <Box w='full' noOfLines={1}>
              <Heading size='md' noOfLines={1} color='gray.700'>
                Muhammad Fauzul Hanif
              </Heading>

              <Text fontSize='sm' noOfLines={1} color='gray.500'>
                muhammadfauzulhanif2230511102@ummi.ac.id
              </Text>
            </Box>
          </DrawerHeader>

          <DrawerBody p={0} display='flex' gap={4} flexDirection='column'>
            <Nav
              initIcon={WeatherSunnyRegular}
              finalIcon={WeatherSunnyFilled}
              iconProps={{
                w: 6,
                h: 6
              }}
              text='Theme'
              buttonProps={{
                color: 'gray.600',
                role: 'group',
                w: 'full',
                gap: 4,
                display: 'flex',
                justifyContent: 'flex-start'
              }}
            />

            <Nav
              initIcon={LocalLanguageRegular}
              finalIcon={LocalLanguageFilled}
              iconProps={{
                w: 6,
                h: 6
              }}
              text='Language'
              buttonProps={{
                color: 'gray.600',
                role: 'group',
                w: 'full',
                gap: 4,
                display: 'flex',
                justifyContent: 'flex-start',
                rightIcon: <US title='United States' width={24} height={24} />
              }}
            />

            <Nav
              initIcon={ImportantRegular}
              finalIcon={ImportantFilled}
              iconProps={{
                w: 6,
                h: 6
              }}
              text='About App'
              buttonProps={{
                color: 'gray.600',
                role: 'group',
                w: 'full',
                gap: 4,
                display: 'flex',
                justifyContent: 'flex-start'
              }}
            />

            <Nav
              initIcon={SignOutRegular}
              finalIcon={SignOutFilled}
              iconProps={{
                w: 6,
                h: 6
              }}
              text='Log Out'
              buttonProps={{
                color: 'gray.600',
                role: 'group',
                w: 'full',
                gap: 4,
                display: 'flex',
                justifyContent: 'flex-start'
              }}
            />
          </DrawerBody>
        </DrawerContent>
      </DrawerChakra>
    </>
  )
}
