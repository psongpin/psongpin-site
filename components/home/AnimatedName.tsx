import { motion } from 'framer-motion'
import cx from 'clsx'

type Props = {
  text: string
  inverted?: boolean
}

const AnimatedName: React.FC<Props> = ({ text, inverted = false }) => (
  <motion.p
    initial={{ opacity: 0, y: inverted ? '100%' : '-100%' }}
    animate={{ opacity: 1, y: '0%' }}
    transition={{ duration: 0.7, ease: 'easeInOut' }}
    className={cx('font-medium text-2xl', {
      'mb-6': inverted,
      'mt-6': !inverted,
    })}
  >
    {text}
  </motion.p>
)

export default AnimatedName
