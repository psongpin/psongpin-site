import React, { useState } from "react"
import { Normalize } from "styled-normalize"
import { ThemeProvider, createGlobalStyle } from "styled-components"
import { library } from "@fortawesome/fontawesome-svg-core"
// import { fab } from '@fortawesome/free-brands-svg-icons'
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons"

import Layout from "./components/layout"
import theme from "./theme"
import { ThemeModeContext } from "./context"

library.add(faBars, faTimes)

const GlobalStyle = createGlobalStyle`
  html, body {
    font-family: 'Lato', sans-serif;
  }
`

const Root = ({ element }) => {
  return (
    <>
      <Normalize />
      <ThemeModeContextProvider>
        <Layout>{element}</Layout>
      </ThemeModeContextProvider>
    </>
  )
}

const ThemeModeContextProvider = ({ children }) => {
  // theme could be one of 'light' or 'dark'
  const [themeMode, setThemeMode] = useState("light")

  return (
    <ThemeModeContext.Provider value={{ themeMode, setThemeMode }}>
      <ThemeProvider theme={theme[themeMode]}>
        <GlobalStyle />
        {children}
      </ThemeProvider>
    </ThemeModeContext.Provider>
  )
}

export default Root
