import { motion } from 'framer-motion'

type Props = {
  isTop: boolean
}

const topTexts = ['Simply', 'Front-end']
const bottomTexts = ['Awesome', 'Developer']

const FlashText: React.FC<Props> = ({ isTop }) => {
  const textToMap = isTop ? topTexts : bottomTexts
  return (
    <motion.div
      transition={{ staggerChildren: 0.07, delayChildren: 0.2 }}
      className="relative h-24 overflow-y-hidden"
    >
      {textToMap.map((text, index) => {
        const isLastItem = index === textToMap.length - 1
        return (
          <motion.p
            key={text}
            animate={{
              opacity: isLastItem ? [0, 1] : [0, 1, 1, 0],
              y: isLastItem
                ? [isTop ? '-100%' : '100%', '0%']
                : [
                    isTop ? '-100%' : '100%',
                    '0%',
                    '0%',
                    isTop ? '100%' : '-100%',
                  ],
              transition: {
                ease: 'easeInOut',
                duration: isLastItem ? 2 * 0.3 : 2,
                delay: index * 2,
                times: isLastItem ? [0, 1] : [0, 0.3, 0.7, 1],
              },
            }}
            transition={{ duration: 1, ease: 'easeInOut' }}
            className="text-6xl font-bold font-heading absolute inset-0"
          >
            {text}
          </motion.p>
        )
      })}
    </motion.div>
  )
}

export default FlashText
