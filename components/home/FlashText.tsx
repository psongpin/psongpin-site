import { motion } from 'framer-motion'
import styled from 'styled-components'

type Props = {
  isTop: boolean
}

const topTexts = ['Simply', 'Front-end']
const bottomTexts = ['Awesome', 'Developer']

const Frame = styled.div`
  height: 54px;

  @media (min-width: 1024px) {
    height: 96px;
  }
`

const FlashText: React.FC<Props> = ({ isTop }) => {
  const textToMap = isTop ? topTexts : bottomTexts
  return (
    <Frame className="relative overflow-y-hidden">
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
                duration: isLastItem ? 1.5 * 0.3 : 1.5,
                delay: index * 1.5,
                times: isLastItem ? [0, 1] : [0, 0.3, 0.7, 1],
              },
            }}
            transition={{ duration: 1, ease: 'easeInOut' }}
            className="text-4xl lg:text-6xl font-black absolute inset-0"
          >
            {text}
          </motion.p>
        )
      })}
    </Frame>
  )
}

export default FlashText
