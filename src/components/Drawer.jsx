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
  MoreVertical as MoreVerticalFilled,
  PersonAccounts as PersonAccountsFilled,
  WeatherMoon as WeatherMoonFilled,
  WeatherSunny as WeatherSunnyFilled
} from '@emotion-icons/fluentui-system-filled'
import {
  MoreVertical as MoreVerticalRegular,
  PersonAccounts as PersonAccountsRegular,
  WeatherMoon as WeatherMoonRegular,
  WeatherSunny as WeatherSunnyRegular
} from '@emotion-icons/fluentui-system-regular'
import { Icon } from './base/Icon'
import { ID, US } from 'country-flag-icons/react/3x2'
import PropTypes from 'prop-types'

export const Drawer = ({ locale, theme, onLocaleChange, onThemeChange }) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = useRef()
  const sideNavBarList = [
    {
      text: locale === 'en' ? 'Theme' : 'Tema',
      initIcon: theme === 'light' ? WeatherSunnyRegular : WeatherMoonRegular,
      finalIcon: theme === 'light' ? WeatherSunnyFilled : WeatherMoonFilled,
      onClick: onThemeChange
    },
    {
      text: locale === 'en' ? 'Language' : 'Bahasa',
      initIcon: locale === 'en' ? US : ID,
      onClick: onLocaleChange
    }
  ]

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
                color={`gray.${theme === 'light' ? '700' : '200'}`}
              >
                Muhammad Fauzul Hanif
              </Heading>

              <Text
                fontSize='sm'
                noOfLines={1}
                color={`gray.${theme === 'light' ? '500' : '400'}`}
              >
                muhammadfauzulhanif2230511102@ummi.ac.id
              </Text>
            </Box>
          </DrawerHeader>

          <DrawerBody p={0} display='flex' gap={4} flexDirection='column'>
            {sideNavBarList.map((nav, id) => (
              <Nav
                key={id}
                initIcon={nav.initIcon}
                finalIcon={nav.finalIcon}
                iconProps={{
                  w: 6,
                  h: 6
                }}
                text={nav.text}
                buttonProps={{
                  onClick: nav.onClick,
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

            {/* <Nav */}
            {/*  initIcon={LocalLanguageRegular} */}
            {/*  finalIcon={LocalLanguageFilled} */}
            {/*  iconProps={{ */}
            {/*    w: 6, */}
            {/*    h: 6 */}
            {/*  }} */}
            {/*  text='Language' */}
            {/*  buttonProps={{ */}
            {/*    color: 'gray.600', */}
            {/*    role: 'group', */}
            {/*    w: 'full', */}
            {/*    gap: 4, */}
            {/*    display: 'flex', */}
            {/*    justifyContent: 'flex-start', */}
            {/*    rightIcon: <US title='United States' width={24} height={24} /> */}
            {/*  }} */}
            {/* /> */}

            {/* <Nav */}
            {/*  initIcon={ImportantRegular} */}
            {/*  finalIcon={ImportantFilled} */}
            {/*  iconProps={{ */}
            {/*    w: 6, */}
            {/*    h: 6 */}
            {/*  }} */}
            {/*  text='About App' */}
            {/*  buttonProps={{ */}
            {/*    color: 'gray.600', */}
            {/*    role: 'group', */}
            {/*    w: 'full', */}
            {/*    gap: 4, */}
            {/*    display: 'flex', */}
            {/*    justifyContent: 'flex-start' */}
            {/*  }} */}
            {/* /> */}

            {/* <Nav */}
            {/*  initIcon={SignOutRegular} */}
            {/*  finalIcon={SignOutFilled} */}
            {/*  iconProps={{ */}
            {/*    w: 6, */}
            {/*    h: 6 */}
            {/*  }} */}
            {/*  text='Log Out' */}
            {/*  buttonProps={{ */}
            {/*    color: 'gray.600', */}
            {/*    role: 'group', */}
            {/*    w: 'full', */}
            {/*    gap: 4, */}
            {/*    display: 'flex', */}
            {/*    justifyContent: 'flex-start' */}
            {/*  }} */}
            {/* /> */}
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
  onThemeChange: PropTypes.func.isRequired
}
