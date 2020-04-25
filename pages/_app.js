/* eslint-disable react/prop-types */
import { useState } from 'react'
import { ThemeProvider } from 'styled-components'
import { library, config } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'

import GlobalFontStyle from '../css/font'
import ThemeModeContext from '../css/context'
import theme from '../css/theme'
import Header from '../components/Header'
import Footer from '../components/Footer'

import '@fortawesome/fontawesome-svg-core/styles.css'
import '../css/tailwind.css'

config.autoAddCss = false
library.add(fab, fas)

function App({ Component, pageProps }) {
  const [themeMode, setThemeMode] = useState('dark')
  return (
    <>
      <ThemeModeContext.Provider value={{ themeMode, setThemeMode }}>
        <GlobalFontStyle />
        <ThemeProvider theme={theme[themeMode]}>
          <Header />
          <main
            css={`
              // 1vh - header + footer height
              min-height: calc(100vh - 9rem);
              background-color: ${scprops => scprops.theme.colors.bg};
            `}
          >
            <Component {...pageProps} />
          </main>
          <Footer />
        </ThemeProvider>
      </ThemeModeContext.Provider>
    </>
  )
}

export default App
