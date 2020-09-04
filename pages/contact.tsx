/* eslint-disable react/jsx-curly-brace-presence */
import Link from 'next/link'
import { motion, Variants } from 'framer-motion'

import { PageWrapper } from 'components/contact'

const cardVariants: Variants = {
  initial: { y: -50, opacity: 0, overflow: 'hidden' },
  spread: { y: 0, opacity: 1 },
}

const socials = [
  {
    label: 'paulsimon.ongpin@gmail.com',
    link: 'mailto:paulsimon.ongpin@gmail.com',
  },
  {
    label: 'psongpin (Paul Simon Ongpin)',
    link: 'https://www.linkedin.com/in/psongpin/',
  },
  {
    label: 'psongpin',
    link: 'https://github.com/psongpin',
  },
]

const Contact: React.FC = () => {
  return (
    <PageWrapper>
      <div className="container">
        <motion.div
          variants={cardVariants}
          initial="initial"
          animate="spread"
          transition={{ ease: 'easeInOut', delay: 0.5, duration: 1 }}
          className="bg-white bg-opacity-50 lg:px-10 lg:py-16 px-4 py-8 rounded-lg mx-auto shadow-xl"
          style={{ maxWidth: 800 }}
        >
          <h2 className="text-lg lg:text-2xl text-gray-600">{`Oohh! So you're interested?`}</h2>
          <h1 className="text-3xl lg:text-5xl text-gray-700 font-bold mb-8">{`Let's have a chat!`}</h1>

          <div className="text-gray-600">
            <p className="mb-4 font-semibold text-lg">
              Get in touch with me through these contacts:
            </p>

            <ul className="mb-10">
              {socials.map(({ link, label }) => (
                <li key={link} className="mb-2">
                  <a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>

            <p className="mb-4">
              Hey! I am very grateful that you came to this page for my contact
              information. I am currently accepting offers for full-time /
              part-time remote postions as a Front-end Developer. Let me know if
              you’re interested, I will be more than happy to talk to you!
            </p>

            <p className="mb-4">
              Know more about me{' '}
              <Link href="/">
                <a className="underline">here</a>
              </Link>
              .
            </p>

            <p className="mb-8">Thank you,</p>

            <p>
              <strong>Paul Simon Ongpin</strong> - Frontend Developer
            </p>
          </div>
        </motion.div>
      </div>
    </PageWrapper>
  )
}

export default Contact
