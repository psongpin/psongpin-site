import { AppProps } from 'next/app'
import styled from 'styled-components'

import 'styles/tailwind.css'

const AppWrapper = styled.div`
  grid-template-rows: auto 1fr auto;
`

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <AppWrapper className="grid min-h-screen">
      <header>header</header>
      <main>
        <Component {...pageProps} />
      </main>
      <footer>footer</footer>
    </AppWrapper>
  )
}

export default App
