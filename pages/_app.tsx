import type { AppProps } from 'next/app'

import globalStyles from 'utils/styles/reset'

const MainApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  globalStyles()

  return <Component {...pageProps} />
}
export default MainApp
