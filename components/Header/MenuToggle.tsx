import { AnimatePresence, motion } from 'framer-motion'

const MenuToggle: React.FC<{
  onClick: () => void
  menuVisibility: string
}> = ({ onClick, menuVisibility }) => (
  <button
    type="button"
    className="appearance-none focus:outline-none border-solid border-2 border-white text-white uppercase text-sm p-2 rounded-full"
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
  </button>
)

export default MenuToggle
