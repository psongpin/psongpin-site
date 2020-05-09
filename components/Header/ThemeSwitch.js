import { useContext } from 'react'
import styled, { css } from 'styled-components'

import ThemeModeContext from '../../css/context'

const Switch = styled.button`
  ${({ themeMode }) => {
    const isSwitched = themeMode === 'dark'
    return css`
      width: 80px;
      height: 20px;
      background-color: ${isSwitched ? '#ffffff' : '#1C1C1C'};
      border-radius: 10px;

      > div {
        top: 2px;
        left: ${isSwitched ? '40px' : '2px'};
        width: 38px;
        height: 16px;
        background-color: ${isSwitched ? '#1C1C1C' : '#ffffff'};
        border-radius: 8px;
        line-height: 16px;
        color: ${isSwitched ? '#ffffff' : '#1C1C1C'};
      }
    `
  }}
`

const ThemeSwitch = () => {
  const { themeMode, setThemeMode } = useContext(ThemeModeContext)

  return (
    <Switch
      className="relative p-0 border-none shadow-none outline-none focus:outline-none transition-all duration-200 ease-in-out"
      themeMode={themeMode}
      onClick={() => setThemeMode(themeMode === 'light' ? 'dark' : 'light')}
    >
      <div className="absolute text-center text-xs transition-all duration-200 ease-in-out">
        {themeMode}
      </div>
    </Switch>
  )
}
export default ThemeSwitch
