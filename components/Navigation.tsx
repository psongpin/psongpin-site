import * as Dialog from '@radix-ui/react-dialog'
import {
  HamburgerMenuIcon,
  Cross1Icon,
  HomeIcon,
  PersonIcon,
  FileTextIcon,
  ChatBubbleIcon,
} from '@radix-ui/react-icons'
import { keyframes } from '@stitches/react'
import Link from 'next/link'

import Button from 'components/common/Button'
import { styled } from 'utils/styles/stitches.config'

const links = [
  { href: '/#home', label: 'Home', icon: <HomeIcon width={20} height={20} /> },
  {
    href: '/#home',
    label: 'Profile',
    icon: <PersonIcon width={20} height={20} />,
  },
  {
    href: '/#home',
    label: 'Experience',
    icon: <FileTextIcon width={20} height={20} />,
  },
  {
    href: '/#home',
    label: 'Contact',
    icon: <ChatBubbleIcon width={20} height={20} />,
  },
]

const overlayShow = keyframes({
  '0%': { opacity: 0 },
  '100%': { opacity: 1 },
})

const contentShow = keyframes({
  '0%': { opacity: 0 },
  '100%': { opacity: 1 },
})

const NavToggle = styled(Button, {
  position: 'fixed',
  top: '$4',
  right: '$4',
})

const Overlay = styled(Dialog.Overlay, {
  backgroundColor: '$blackA11',
  position: 'fixed',
  inset: 0,
  '@media (prefers-reduced-motion: no-preference)': {
    animation: `${overlayShow} 300ms cubic-bezier(0.16, 1, 0.3, 1)`,
  },
})

const Content = styled(Dialog.Content, {
  backgroundColor: 'transparent',
  position: 'fixed',
  top: 0,
  right: 0,
  width: '$full',
  maxWidth: 300,
  height: '$screen-h',
  textAlign: 'right',
  paddingRight: '$4',
  paddingTop: 80,
  '@media (prefers-reduced-motion: no-preference)': {
    animation: `${contentShow} 300ms cubic-bezier(0.16, 1, 0.3, 1)`,
  },
})

const ContentTitle = styled(Dialog.Title, {
  color: '$slateAppBg',
  fontWeight: '$bold',
  fontSize: '$xl',
  textTransform: 'uppercase',
})

const ContentDescription = styled(Dialog.Description, {
  color: '$slateAppBg',
  fontWeight: '$medium',
  fontSize: '$sm',
  textTransform: 'uppercase',
  marginBottom: '$3',
})

const Divider = styled('hr', {
  borderColor: '$slateAppBg',
  my: '$3',
})

const NavLink = styled('a', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  py: '$1_point_5',
  color: '$slateAppBg',
  fontSize: '$sm',
  textTransform: 'uppercase',
  transition: '$mediumEaseInOut',
  '&:hover': {
    color: '$slateBorderHoverColor',
  },
  '& span:last-child': {
    marginLeft: '$3',
    display: 'inline-flex',
    flexCenter: true,
    color: 'inherit',
  },
})

const Navigation: React.FC = () => {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <NavToggle
          btnType="outlined"
          size="large"
          rounded
          css={{ width: 48, padding: 0 }}
        >
          <HamburgerMenuIcon width={30} height={30} />
        </NavToggle>
      </Dialog.Trigger>
      <Overlay />
      <Content>
        <ContentTitle>Menu</ContentTitle>
        <Divider />
        <ContentDescription>Navigate on these pages:</ContentDescription>
        <nav>
          <ul>
            {links.map(link => (
              <li key={link.label}>
                <Link href={link.href} passHref>
                  <NavLink>
                    <span>{link.label}</span>
                    <span>{link.icon}</span>
                  </NavLink>
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <Dialog.Close asChild>
          <NavToggle
            btnType="outlined"
            size="large"
            rounded
            css={{ width: 48, padding: 0 }}
          >
            <Cross1Icon width={30} height={30} />
          </NavToggle>
        </Dialog.Close>
      </Content>
    </Dialog.Root>
  )
}

export default Navigation
