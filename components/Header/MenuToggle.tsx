import { AnimatePresence, motion } from 'framer-motion'

import Button from 'components/Button'

const MenuToggle: React.FC<{
  onClick: () => void
  menuVisibility: string
}> = ({ onClick, menuVisibility }) => (
  <Button
    type="button"
    className="uppercase text-sm p-2"
    onClick={onClick}
    style={{ width: 100 }}
  >
    <AnimatePresence exitBeforeEnter>
      <motion.span
        key={menuVisibility}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        {menuVisibility === 'open' ? 'close' : 'menu'}
      </motion.span>
    </AnimatePresence>
  </Button>
)

export default MenuToggle
