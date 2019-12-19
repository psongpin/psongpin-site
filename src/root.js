import React, { useState, createContext } from "react"
import { Normalize } from "styled-normalize"

import Layout from "./components/layout"

const ThemeModeContext = createContext()

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
      {children}
    </ThemeModeContext.Provider>
  )
}

export default Root
