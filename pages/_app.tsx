import type { AppProps } from 'next/app'

import AppFrame from 'components/AppFrame'
import Footer from 'components/Footer'

import globalStyles from 'utils/styles/global'
import Navigation from 'components/Navigation'

const MainApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  globalStyles()

  return (
    <>
      <AppFrame>
        <Navigation />
        <Component {...pageProps} />
        <Footer />
      </AppFrame>
    </>
  )
}
export default MainApp
