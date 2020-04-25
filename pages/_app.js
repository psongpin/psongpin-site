/* eslint-disable react/prop-types */
import { useState } from 'react'
import { ThemeProvider } from 'styled-components'
import { library, config } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'

import GlobalFontStyle from '../css/font'
import Header from '../components/Header'
import theme from '../css/theme'
import ThemeModeContext from '../css/context'

import '../css/tailwind.css'
import '@fortawesome/fontawesome-svg-core/styles.css'

config.autoAddCss = false
library.add(fab, fas)

function App({ Component, pageProps }) {
  const [themeMode, setThemeMode] = useState('dark')
  return (
    <>
      <GlobalFontStyle />
      <ThemeModeContext.Provider value={{ themeMode, setThemeMode }}>
        <ThemeProvider theme={theme[themeMode]}>
          <Header />
          <Component {...pageProps} />
          <footer>footer</footer>
        </ThemeProvider>
      </ThemeModeContext.Provider>
    </>
  )
}

export default App
