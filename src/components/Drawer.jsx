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
import React, { useContext, useRef } from 'react'
import { Navigation } from './base/Navigation'
import {
  MoreVertical as MoreVerticalFilled,
  PersonAccounts as PersonAccountsFilled,
  SwipeRight as SwipeRightFilled,
  WeatherMoon as WeatherMoonFilled,
  WeatherSunny as WeatherSunnyFilled
} from '@emotion-icons/fluentui-system-filled'
import {
  MoreVertical as MoreVerticalRegular,
  PersonAccounts as PersonAccountsRegular,
  SwipeRight as SwipeRightRegular,
  WeatherMoon as WeatherMoonRegular,
  WeatherSunny as WeatherSunnyRegular
} from '@emotion-icons/fluentui-system-regular'
import { Icon } from './base/Icon'
import { ID, US } from 'country-flag-icons/react/3x2'
import PropTypes from 'prop-types'
import { AuthedUserContext } from '../context/AuthedUser'

export const Drawer = ({
  locale,
  theme,
  onLocaleChange,
  onThemeChange,
  onLogOut
}) => {
  const { authedUser } = useContext(AuthedUserContext)
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = useRef()
  const sideNavBarList = [
    {
      text: locale === 'en' ? 'Theme' : 'Tema',
      initIcon: theme === 'light' ? WeatherSunnyRegular : WeatherMoonRegular,
      finalIcon: theme === 'light' ? WeatherSunnyFilled : WeatherMoonFilled,
      color: 'cyan',
      onClick: onThemeChange
    },
    {
      text: locale === 'en' ? 'Language' : 'Bahasa',
      initIcon: locale === 'en' ? US : ID,
      onClick: onLocaleChange
    },
    {
      text: locale === 'en' ? 'Log Out' : 'Keluar',
      initIcon: SwipeRightRegular,
      finalIcon: SwipeRightFilled,
      color: 'pink',
      onClick: onLogOut
    }
  ]

  return (
    <>
      <Navigation
        initIcon={MoreVerticalRegular}
        finalIcon={MoreVerticalFilled}
        iconProps={{
          w: 6,
          h: 6
        }}
        buttonProps={{
          color: `gray.${theme === 'light' ? '500' : '400'}`,
          bgColor: `gray.${theme === 'light' ? '100' : '800'}`,
          _hover: { bgColor: `gray.${theme === 'light' ? '200' : '700'}` },
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
          color={`gray.${theme === 'light' ? '600' : '300'}`}
          bgColor={`gray.${theme === 'light' ? '50' : '900'}`}
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
                color: `yellow.${theme === 'light' ? '400' : '500'}`,
                w: 12,
                h: 12
              }}
            />

            <Box w='full' noOfLines={1}>
              <Heading
                size='md'
                noOfLines={1}
                color={`gray.${theme === 'light' ? '600' : '300'}`}
              >
                {authedUser.name}
              </Heading>

              <Text
                fontSize='sm'
                noOfLines={1}
                color={`gray.${theme === 'light' ? '400' : '500'}`}
              >
                {authedUser.email}
              </Text>
            </Box>
          </DrawerHeader>

          <DrawerBody p={0} display='flex' gap={4} flexDirection='column'>
            {sideNavBarList.map((nav, id) => (
              <Navigation
                key={id}
                initIcon={nav.initIcon}
                finalIcon={nav.finalIcon}
                iconProps={{
                  color: `${nav.color}.${theme === 'light' ? '500' : '400'}`,
                  w: 6,
                  h: 6
                }}
                text={nav.text}
                buttonProps={{
                  onClick: nav.onClick,
                  color: `gray.${theme === 'light' ? '400' : '500'}`,
                  bgColor: `gray.${theme === 'light' ? '100' : '800'}`,
                  _hover: {
                    bgColor: `gray.${theme === 'light' ? '200' : '700'}`
                  },
                  role: 'group',
                  w: 'full',
                  gap: 4,
                  display: 'flex',
                  justifyContent: 'flex-start'
                }}
              />
            ))}
          </DrawerBody>
        </DrawerContent>
      </DrawerChakra>
    </>
  )
}

Drawer.propTypes = {
  locale: PropTypes.string.isRequired,
  theme: PropTypes.string.isRequired,
  onLocaleChange: PropTypes.func.isRequired,
  onThemeChange: PropTypes.func.isRequired,
  onLogOut: PropTypes.func.isRequired
}
