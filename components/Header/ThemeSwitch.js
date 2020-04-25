import React, { useContext } from 'react'
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
      transition: all 0.2s ease-in-out;

      > div {
        top: 2px;
        left: ${isSwitched ? '40px' : '2px'};
        width: 38px;
        height: 16px;
        background-color: ${isSwitched ? '#1C1C1C' : '#ffffff'};
        border-radius: 8px;
        line-height: 16px;
        color: ${isSwitched ? '#ffffff' : '#1C1C1C'};
        transition: all 0.2s ease-in-out;
      }
    `
  }}
`

const ThemeSwitch = () => {
  const { themeMode, setThemeMode } = useContext(ThemeModeContext)

  return (
    <Switch
      className="relative p-0 border-none shadow-none outline-none focus:outline-none"
      themeMode={themeMode}
      onClick={() => setThemeMode(themeMode === 'light' ? 'dark' : 'light')}
    >
      <div className="absolute text-center text-xs">{themeMode}</div>
    </Switch>
  )
}
export default ThemeSwitch
