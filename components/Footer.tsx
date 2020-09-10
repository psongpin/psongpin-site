// import { useRouter } from 'next/router'
import { motion } from 'framer-motion'

const Footer: React.FC = () => {
  // const router = useRouter()
  return (
    <footer className="z-10">
      <div className="container text-center text-white py-6 text-sm">
        <motion.p
          animate={{ opacity: [0, 1] }}
          transition={{ duration: 1.2, ease: 'easeInOut' }}
        >
          {`Made by `}
          <span className="font-bold">Paul Simon Ongpin</span>
          {` using `}
          <a
            href="https://nextjs.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline font-bold"
          >
            Next.js
          </a>
          {` and `}
          <a
            href="https://reactjs.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline font-bold"
          >
            React
          </a>
          .
        </motion.p>
      </div>
    </footer>
  )
}
export default Footer
