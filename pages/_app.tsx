import { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import Head from 'next/head'
import { AnimatePresence } from 'framer-motion'
import styled from 'styled-components'

import Header from 'components/Header'
import Footer from 'components/Footer'
import ParticlesBg from 'components/ParticlesBg'

import 'styles/tailwind.css'

const AppWrapper = styled.div`
  background-color: #f89b9e;
  background-image: linear-gradient(315deg, #f89b9e 0%, #c9d9ff 74%);

  grid-template-rows: auto 1fr auto;
`

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  const router = useRouter()
  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <AppWrapper className="min-h-screen relative grid">
        <Header />
        <main className="z-10 relative">
          <AnimatePresence exitBeforeEnter>
            <Component key={router.asPath} {...pageProps} />
          </AnimatePresence>
        </main>
        <Footer />
        <ParticlesBg />
      </AppWrapper>
    </>
  )
}

export default App
