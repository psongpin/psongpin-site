import React, { useState } from "react"
import { Normalize } from "styled-normalize"
import { ThemeProvider, createGlobalStyle } from "styled-components"
import { library } from "@fortawesome/fontawesome-svg-core"
import { fab } from "@fortawesome/free-brands-svg-icons"
import {
  faBars,
  faTimes,
  faArrowRight,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons"
import "react-typist/dist/Typist.css"

import Layout from "./components/layout"
import theme from "./theme"
import { ThemeModeContext } from "./context"

library.add(faBars, faTimes, faArrowRight, fab, faEnvelope)

const GlobalStyle = createGlobalStyle`
  html, body {
    font-family: 'Lato', sans-serif;
    font-size: 14px;
  }

  *, ::before, ::after {
    box-sizing: border-box;
    background-repeat: no-repeat;
  }

  p {
    line-height: 1.5;
  }
`

const Root = ({ element }) => {
  return (
    <ThemeModeContextProvider>
      <Layout>{element}</Layout>
    </ThemeModeContextProvider>
  )
}

// Context for controlling theme state

const ThemeModeContextProvider = ({ children }) => {
  // theme could be one of 'light' or 'dark'
  const [themeMode, setThemeMode] = useState("light")

  return (
    <ThemeModeContext.Provider value={{ themeMode, setThemeMode }}>
      <ThemeProvider theme={theme[themeMode]}>
        <Normalize />
        <GlobalStyle />
        {children}
      </ThemeProvider>
    </ThemeModeContext.Provider>
  )
}

export default Root
