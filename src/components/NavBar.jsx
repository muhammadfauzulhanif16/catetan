import React, { useContext, useState } from 'react'
import { Navigation } from './base/Navigation'
import { navigationList } from '../data/navigationList'
import { LocaleContext } from '../context/Locale'
import { ThemeContext } from '../context/Theme'
import { Flex } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'

export const NavBar = () => {
  const [pathName, setPathName] = useState(
    localStorage.getItem('catetan-path') || 'all'
  )
  const navigate = useNavigate()
  const { locale } = useContext(LocaleContext)
  const { theme } = useContext(ThemeContext)
  const navs = navigationList({ locale })

  return (
    <Flex
      flex='none'
      bgColor={`gray.${theme === 'light' ? '50' : '900'}`}
      py={2}
      gap={2}
    >
      {navs.map(({ initIcon, finalIcon, text, path }, id) => (
        <Navigation
          key={id}
          initIcon={initIcon}
          finalIcon={finalIcon}
          text={text}
          textProps={{
            fontSize: 'sm'
          }}
          buttonProps={{
            w: 'full',
            role: 'group',
            display: 'flex',
            gap: [2, 4],
            bgColor: `gray.${theme === 'light' ? '50' : '900'}`,
            _hover: {
              bgColor: `gray.${theme === 'light' ? '100' : '800'}`
            },
            color:
              pathName === path
                ? `yellow.${theme === 'light' ? '400' : '500'}`
                : `gray.${theme === 'light' ? '400' : '500'}`,
            onClick: () => {
              localStorage.setItem('catetan-path', path)
              setPathName(path)
              navigate(`/${path === 'all' ? '' : path}`)
            }
          }}
          iconProps={{
            w: 6,
            h: 6
          }}
        />
      ))}
    </Flex>
  )
}
