import { motion } from 'framer-motion'
import styled from 'styled-components'

const Line = styled(motion.span)`
  height: 2px;
`

const Divider: React.FC = () => (
  <p className="flex items-center justify-center my-2">
    <Line
      initial={{ width: 0 }}
      animate={{ width: 100 }}
      transition={{ duration: 0.7, ease: 'easeInOut' }}
      className="block bg-white"
    />
    <motion.span
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.7, ease: 'easeInOut' }}
      className="mx-4 text-3xl font-medium leading-none"
    >
      &times;
    </motion.span>
    <Line
      initial={{ width: 0 }}
      animate={{ width: 100 }}
      transition={{ duration: 0.7, ease: 'easeInOut' }}
      className="block bg-white"
    />
  </p>
)

export default Divider
