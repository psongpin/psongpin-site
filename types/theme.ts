export type ThemeMode = 'dark' | 'light'

export type Themes = {
  [mode: string]: Theme
}

export type Theme = {
  colors: Colors
}

type Colors = {
  base: string
  primary: string
  bg: string
  bgOverlay: string
  headerIcon: string
  heading: string
}
