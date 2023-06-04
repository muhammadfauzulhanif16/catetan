import React, { useContext, useState } from 'react'
import { Nav } from './base/Nav'
import { navList } from '../data/navList'
import { LocaleContext } from '../context/Locale'
import { ThemeContext } from '../context/Theme'
import { Flex } from '@chakra-ui/react'
import PropTypes from 'prop-types'
import { useNavigate } from 'react-router-dom'

export const NavBar = ({ path }) => {
  const [pathName, setPathName] = useState(
    localStorage.getItem('catetan-path', path) || 'all'
  )
  const navigate = useNavigate()
  const { locale } = useContext(LocaleContext)
  const { theme } = useContext(ThemeContext)
  const navs = navList(locale)

  return (
    <Flex
      m={[4, 8, 12]}
      bgColor={`gray.${theme === 'light' ? '100' : '800'}`}
      p={2}
      gap={2}
      rounded='md'
      pos='fixed'
      bottom={0}
      right={0}
      left={0}
    >
      {navs.map(({ initIcon, finalIcon, text, path }, id) => (
        <Nav
          key={id}
          initIcon={initIcon}
          finalIcon={finalIcon}
          text={pathName === path ? text : ''}
          textProps={{
            fontSize: 'sm'
          }}
          buttonProps={{
            transition: 'all .4s ease-in-out',
            w: pathName === path ? 'full' : ['none', '50%'],
            role: 'group',
            display: 'flex',
            gap: [2, 4],
            bgColor:
              pathName === path
                ? `gray.${theme === 'light' ? '200' : '700'}`
                : `gray.${theme === 'light' ? '100' : '800'}`,
            _hover: {
              bgColor: `gray.${theme === 'light' ? '200' : '700'}`
            },
            color:
              pathName === path
                ? `yellow.${theme === 'light' ? '400' : '500'}`
                : `gray.${theme === 'light' ? '600' : '300'}`,
            onClick: () => {
              localStorage.setItem('catetan-path', path)
              setPathName(path)
              navigate(`/${path}`)
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

NavBar.propTypes = {
  path: PropTypes.any
}
