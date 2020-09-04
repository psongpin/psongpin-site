import { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import Head from 'next/head'
import { AnimatePresence } from 'framer-motion'
import styled from 'styled-components'

import 'styles/tailwind.css'

const AppWrapper = styled.div`
  background: linear-gradient(
    45deg,
    rgb(123, 198, 226) 0%,
    rgb(253, 182, 198) 50%,
    rgb(255, 190, 116) 100%
  );
`

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  const router = useRouter()
  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,600;0,700;0,800;1,300;1,400;1,600;1,700;1,800&family=Raleway:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <AppWrapper className="min-h-screen">
        <main>
          <AnimatePresence exitBeforeEnter>
            <Component key={router.asPath} {...pageProps} />
          </AnimatePresence>
        </main>
      </AppWrapper>
    </>
  )
}

export default App
