import { useContext, FC } from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'
import { useRouter } from 'next/router'
import cn from 'classnames'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { breakpoints } from '../../css/theme'
import ScrollCheckContext from './context'

interface NavigationProps {
  isNavVisible: boolean
  toggleNavigation: () => void
}

interface NavbarProps {
  isNavVisible: boolean
}

const links = [
  { label: 'Home', url: '/' },
  { label: 'About', url: '/about' },
  { label: 'Contact', url: '/contact' },
]

const Navbar = styled.nav<NavbarProps>`
  height: 100vh;
  width: 280px;
  background: ${(props): string => props.theme.colors.bg};
  transform: translateX(
    ${(props): string => (props.isNavVisible ? '0%' : '100%')}
  );
  @media (min-width: ${breakpoints[1]}px) {
    height: auto;
    width: auto;
    transform: none;
  }
`

const Anchor = styled.a`
  color: ${(props): string => props.theme.colors.base};

  &.active,
  &:hover,
  &:focus {
    color: ${(props): string => props.theme.colors.primary};
  }
`

const Close = styled.button.attrs({
  type: 'button',
})`
  right: 1rem;
  top: 30px;
  color: ${(props): string => props.theme.colors.headerIcon};
`

const NavOverlay = styled.div`
  background-color: ${(props): string => props.theme.colors.bgOverlay};
  opacity: 0.6;
`

const Navigation: FC<NavigationProps> = ({
  isNavVisible,
  toggleNavigation,
}) => {
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
        className="md:order-1 fixed md:static z-50 top-0 right-0 transition-all duration-200 ease-in-out"
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
                    'block no-underline text-xl font-bold py-4 px-4 leading-6 transition-all duration-200 ease-in-out',
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
