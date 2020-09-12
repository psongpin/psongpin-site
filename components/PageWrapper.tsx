import { motion } from 'framer-motion'

type Props = {
  className: string
}

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

const PageWrapper: React.FC<Props> = ({ children, className }) => (
  <motion.div
    variants={pageVariants}
    initial="initial"
    animate="start"
    exit="exit"
    className={className}
  >
    {children}
  </motion.div>
)

export default PageWrapper
