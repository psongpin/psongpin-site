import { useContext } from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'
import { useRouter } from 'next/router'
import cn from 'classnames'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { breakpoints } from '../../css/theme'
import ScrollCheckContext from './context'

const links = [
  { label: 'Home', url: '/' },
  { label: 'About', url: '/about' },
  { label: 'Contact', url: '/contact' },
]

const Navbar = styled.nav`
  height: 100vh;
  width: 280px;
  background: ${props => props.theme.colors.bg};
  transform: translateX(${props => (props.isNavVisible ? '0%' : '100%')});
  transition: all 0.2s ease-in-out;
  @media (min-width: ${breakpoints[1]}px) {
    height: auto;
    width: auto;
    transform: none;
  }
`

const Anchor = styled.a`
  color: ${props => props.theme.colors.base};
  transition: all 0.2s ease-in-out;

  &.active,
  &:hover,
  &:focus {
    color: ${props => props.theme.colors.primary};
  }
`

const Close = styled.button.attrs({
  type: 'button',
})`
  right: 1rem;
  top: 30px;
  color: ${props => props.theme.colors.header_icon};
`

const NavOverlay = styled.div`
  background-color: ${props => props.theme.colors.bg_overlay};
  opacity: 0.6;
`

const Navigation = ({ isNavVisible, toggleNavigation }) => {
  const router = useRouter()
  const { isPageOnTop } = useContext(ScrollCheckContext)
  return (
    <>
      <NavOverlay
        className={cn('md:hidden fixed z-50 inset-0 w-screen h-screen', {
          hidden: !isNavVisible,
          block: isNavVisible,
        })}
        onClick={toggleNavigation}
      />
      <Navbar
        isNavVisible={isNavVisible}
        className="md:order-1 fixed md:static z-50 top-0 right-0"
      >
        <Close
          onClick={toggleNavigation}
          className="text-2xl bg-transparent border-none p-0 absolute md:hidden outline-none focus:outline-none"
        >
          <FontAwesomeIcon icon={['fas', 'times']} />
        </Close>
        <ul className="list-none text-center m-0 md:mt-0 mt-16 p-0 flex md:flex-row flex-col">
          {links.map(({ label, url }) => (
            <li key={url}>
              <Link href={url} passHref>
                <Anchor
                  className={cn(
                    'block no-underline text-xl font-bold py-4 px-4 leading-6',
                    {
                      active: router.pathname === url,
                      'md:text-xl': isPageOnTop,
                      'md:text-base': !isPageOnTop,
                    }
                  )}
                  onClick={toggleNavigation}
                >
                  {label}
                </Anchor>
              </Link>
            </li>
          ))}
        </ul>
      </Navbar>
    </>
  )
}

Navigation.propTypes = {
  isNavVisible: PropTypes.bool.isRequired,
  toggleNavigation: PropTypes.func.isRequired,
}

Navbar.defaultProps = {
  isNavVisible: false,
}

export default Navigation
