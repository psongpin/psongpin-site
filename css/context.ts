import { createContext, Dispatch, SetStateAction } from 'react'
import { ThemeMode } from '../types/theme'

interface ContextValues {
  themeMode: ThemeMode
  setThemeMode: Dispatch<SetStateAction<ThemeMode>>
}

const ThemeModeContext = createContext({} as ContextValues)

export default ThemeModeContext
