import type { AppProps } from 'next/app'

const MainApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return <Component {...pageProps} />
}
export default MainApp
