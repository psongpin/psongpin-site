const theme = {
  light: {
    colors: {
      primary: "#FF3B3F",
      mainBackground: "#FFFFFF",
      base: "#BFBFBF",
      highlighted: "#969696",
      headerShadow: "#969696",
    },
    contentPadding: "1.429rem",
  },

  dark: {
    colors: {
      primary: "#FFDC12",
      mainBackground: "#292929",
      base: "#FFFFFF",
      highlighted: "#FFFFFF",
      headerShadow: "#000000",
    },
    contentPadding: "1.429rem",
  },
}

const breakpoints = [576, 768, 992, 1200]
export const mediaQuery = breakpoints.map(bp => `@media (min-width: ${bp}px)`)

export default theme
