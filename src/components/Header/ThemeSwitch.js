import React, { useContext } from "react"
import styled, { css } from "styled-components"

import { ThemeModeContext } from "../../context"

import { mediaQuery } from "../../theme"

const Switch = styled.button`
  ${({ themeMode }) => {
    const isSwitched = themeMode === "dark"

    return css`
      position: relative;
      width: 80px;
      height: 20px;
      background-color: ${isSwitched ? "#ffffff" : "#1C1C1C"};
      border-radius: 10px;
      padding: 0;
      border: 0;
      box-shadow: none;
      outline: 0;
      order: 1;
      transition: all 0.2s ease-in-out;

      ${mediaQuery[1]} {
        margin-left: 30px;
        order: 3;
      }

      > div {
        position: absolute;
        top: 2px;
        left: ${isSwitched ? "40px" : "2px"};
        width: 38px;
        height: 16px;
        background-color: ${isSwitched ? "#1C1C1C" : "#ffffff"};
        border-radius: 8px;
        text-align: center;
        font-size: 12px;
        line-height: 16px;
        color: ${isSwitched ? "#ffffff" : "#1C1C1C"};
        transition: all 0.2s ease-in-out;
      }
    `
  }}
`

const ThemeSwitch = () => {
  const { themeMode, setThemeMode } = useContext(ThemeModeContext)

  return (
    <Switch
      themeMode={themeMode}
      onClick={() => setThemeMode(themeMode === "light" ? "dark" : "light")}
    >
      <div>{themeMode}</div>
    </Switch>
  )
}
export default ThemeSwitch
