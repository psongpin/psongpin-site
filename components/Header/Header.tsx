import { useState } from 'react'
import Link from 'next/link'
import {
  useCycle,
  AnimatePresence,
  motion,
  Variants,
  useViewportScroll,
} from 'framer-motion'
import styled from 'styled-components'
import cx from 'clsx'

import MenuToggle from 'components/Header/MenuToggle'

const LINKS = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/' },
  { label: 'Contact', path: '/contact' },
  { label: 'Blog', path: '/' },
]

const Nav = styled(motion.nav)`
  background-color: rgba(26, 32, 44, 0.8);
`

const navVariants: Variants = {
  closed: { opacity: 0 },
  open: { opacity: 1 },
}

const listVariants: Variants = {
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
  open: {
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
}

const itemVariants: Variants = {
  closed: {
    x: 50,
    opacity: 0,
    transition: {
      x: { stiffness: 1000 },
    },
  },
  open: {
    x: 0,
    opacity: 1,
    transition: {
      x: { stiffness: 1000 },
    },
  },
}

const Header: React.FC = () => {
  const [isOnTop, setIsOnTop] = useState(true)
  const { scrollY } = useViewportScroll()
  const [menuVisibility, toggleMenuVisibility] = useCycle('closed', 'open')

  scrollY.onChange(() => {
    if (isOnTop && scrollY.get() > 0) {
      setIsOnTop(false)
    }

    if (!isOnTop && scrollY.get() < 1) {
      setIsOnTop(true)
    }
  })

  return (
    <header
      className={cx(
        'sticky top-0 z-50 transition-all duration-700 ease-in-out',
        isOnTop && 'bg-transparent',
        !isOnTop && 'bg-gray-700 bg-opacity-50'
      )}
    >
      <div className="container flex justify-between items-center py-4">
        <motion.div
          initial={{ opacity: 0, x: '-100%' }}
          animate={{ opacity: 1, x: '0%' }}
          transition={{ duration: 1, ease: 'easeInOut' }}
          style={{ width: 50, height: 50 }}
        >
          <Link href="/">
            <a>
              <img
                src="/images/PaulSimonOngpin.jpg"
                alt="Paul Simon Ongpin"
                className="rounded-full"
                style={{ boxShadow: '0 0 0px 2px #fff' }}
              />
            </a>
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: '100%' }}
          animate={{ opacity: 1, x: '0%' }}
          transition={{ duration: 1, ease: 'easeInOut' }}
          className="relative z-10"
        >
          <MenuToggle
            menuVisibility={menuVisibility}
            onClick={() => toggleMenuVisibility()}
          />
        </motion.div>

        <AnimatePresence>
          {menuVisibility === 'open' && (
            <Nav
              variants={navVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="fixed inset-0 bg-gray-900"
            >
              <div className="container flex justify-end pt-20">
                <motion.ul variants={listVariants}>
                  {LINKS.map(link => (
                    <motion.li
                      variants={itemVariants}
                      key={link.label}
                      className="block text-right"
                    >
                      <Link href={link.path}>
                        <a
                          className="inline-block text-white text-xl p-2 focus:outline-none"
                          onClick={() => toggleMenuVisibility()}
                          onKeyPress={() => toggleMenuVisibility()}
                          role="link"
                          tabIndex={0}
                        >
                          {link.label}
                        </a>
                      </Link>
                    </motion.li>
                  ))}
                </motion.ul>
              </div>
            </Nav>
          )}
        </AnimatePresence>
      </div>
    </header>
  )
}

export default Header
