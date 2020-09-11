import { AnimatePresence, motion } from 'framer-motion'

import Button from 'components/Button'

const MenuToggle: React.FC<{
  onClick: () => void
  menuVisibility: string
}> = ({ onClick, menuVisibility }) => (
  <Button
    btnType="transparent-light"
    type="button"
    className="uppercase text-sm p-2"
    onClick={onClick}
    style={{ width: 140 }}
  >
    <AnimatePresence exitBeforeEnter>
      <motion.span
        key={menuVisibility}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <span className="align-middle">
          {menuVisibility === 'open' ? 'close' : 'menu'}
        </span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          width={20}
          height={20}
          stroke="currentColor"
          className=" ml-2 inline align-middle"
        >
          {menuVisibility === 'open' ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          )}
        </svg>
      </motion.span>
    </AnimatePresence>
  </Button>
)

export default MenuToggle
