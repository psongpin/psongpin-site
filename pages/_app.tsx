import type { AppProps } from 'next/app'
import { IdProvider } from '@radix-ui/react-id'

import AppFrame from 'components/AppFrame'
import Navigation from 'components/Navigation'
import Footer from 'components/Footer'

import globalStyles from 'utils/styles/global'

const MainApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  globalStyles()

  return (
    <IdProvider>
      <AppFrame>
        <Navigation />
        <Component {...pageProps} />
        <Footer />
      </AppFrame>
    </IdProvider>
  )
}
export default MainApp
