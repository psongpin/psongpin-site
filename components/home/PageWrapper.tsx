import { motion } from 'framer-motion'

const pageVariants = {
  initial: { opacity: 0 },
  start: {
    opacity: 1,
    transition: { opacity: { ease: 'easeInOut', duration: 0.5 } },
  },
  exit: {
    opacity: 0,
    transition: { opacity: { ease: 'easeInOut', duration: 0.2 } },
  },
}

const PageWrapper: React.FC = ({ children }) => (
  <motion.div
    variants={pageVariants}
    initial="initial"
    animate="start"
    exit="exit"
    className="min-h-screen flex items-center"
  >
    {children}
  </motion.div>
)

export default PageWrapper
