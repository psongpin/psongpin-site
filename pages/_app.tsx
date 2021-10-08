import type { AppProps } from 'next/app'

import AppFrame from 'components/AppFrame'

import globalStyles from 'utils/styles/global'

const MainApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  globalStyles()

  return (
    <>
      <AppFrame>
        <Component {...pageProps} />
      </AppFrame>
    </>
  )
}
export default MainApp
