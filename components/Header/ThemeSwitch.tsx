import { useContext, FC } from 'react'
import styled from 'styled-components'

import ThemeModeContext from '../../css/context'
import { ThemeMode } from '../../types/theme'

interface SwitchProps {
  themeMode: ThemeMode
}

const Switch = styled.button<SwitchProps>`
  width: 80px;
  height: 20px;
  background-color: ${(props): string =>
    props.themeMode === 'dark' ? '#ffffff' : '#1C1C1C'};
  border-radius: 10px;

  > div {
    top: 2px;
    left: ${(props): string => (props.themeMode === 'dark' ? '40px' : '2px')};
    width: 38px;
    height: 16px;
    background-color: ${(props): string =>
      props.themeMode === 'dark' ? '#1C1C1C' : '#ffffff'};
    border-radius: 8px;
    line-height: 16px;
    color: ${(props): string =>
      props.themeMode === 'dark' ? '#ffffff' : '#1C1C1C'};
  }
`

const ThemeSwitch: FC<{}> = () => {
  const { themeMode, setThemeMode } = useContext(ThemeModeContext)

  return (
    <Switch
      className="relative p-0 border-none shadow-none outline-none focus:outline-none transition-all duration-200 ease-in-out"
      themeMode={themeMode}
      onClick={(): void =>
        setThemeMode(themeMode === 'light' ? 'dark' : 'light')
      }
    >
      <div className="absolute text-center text-xs transition-all duration-200 ease-in-out">
        {themeMode}
      </div>
    </Switch>
  )
}
export default ThemeSwitch
