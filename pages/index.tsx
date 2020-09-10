import { PageWrapper, AnimatedName, Divider, FlashText } from 'components/home'
import Link from 'next/link'
import { motion } from 'framer-motion'
import Button from 'components/Button'

const Home: React.FC = () => {
  const buttonText = `Let's have a chat!`
  return (
    <PageWrapper>
      <div className="container relative">
        <div className="text-white text-center uppercase">
          <FlashText isTop />
          <AnimatedName text="Paul Simon" />
          <Divider />
          <AnimatedName text="Ongpin" inverted />
          <FlashText isTop={false} />
        </div>

        <motion.p
          initial={{ opacity: 0, y: '100%' }}
          animate={{
            opacity: 1,
            y: '0%',
            transition: { duration: 0.7, ease: 'easeInOut', delay: 2 },
          }}
          className="text-center mt-8"
        >
          <Link href="/contact">
            <a>
              <Button className="text-lg font-semibold">{buttonText}</Button>
            </a>
          </Link>
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: '100%' }}
          animate={{
            opacity: 1,
            y: '0%',
            transition: { duration: 0.7, ease: 'easeInOut', delay: 2.3 },
          }}
          className="text-center mt-4"
        >
          <Link href="/">
            <a className="text-white hover:underline">
              Know more about me &#8594;
            </a>
          </Link>
        </motion.p>
      </div>
    </PageWrapper>
  )
}

export default Home
