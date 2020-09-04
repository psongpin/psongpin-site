import { motion } from 'framer-motion'
import cx from 'clsx'

const Button: React.FC<React.HTMLProps<HTMLButtonElement>> = ({
  children,
  className,
  onClick,
}) => (
  <motion.button
    whileHover={{
      scale: 1.05,
      backgroundColor: 'rgba(255, 255, 255, 1)',
      color: '#718096',
      transition: { duration: 0.5, ease: 'easeInOut' },
    }}
    whileTap={{
      scale: 1.05,
      backgroundColor: 'rgba(255, 255, 255, 1)',
      color: '#718096',
      transition: { duration: 0.5, ease: 'easeInOut' },
    }}
    initial={{
      scale: 1,
      backgroundColor: 'rgba(255, 255, 255, 0)',
      color: '#fff',
    }}
    onClick={onClick}
    className={cx(
      'appearance-none focus:outline-none inline-block border-solid border-2 border-white py-2 px-6 rounded-full',
      className
    )}
  >
    {children}
  </motion.button>
)

export default Button
