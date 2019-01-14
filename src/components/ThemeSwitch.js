import React from 'react'
import { css } from '@emotion/core'

const styles = {
  switch: css`
    position: relative;
    width: 80px;
    height: 20px;
    background: #969696;
    border-radius: 10px;
    padding: 0;
    border: 0;
    box-shadow: none;
    outline: 0;
  `,
  slider: css`
    position: absolute;
    top: 2px;
    left: 2px;
    width: 38px;
    height: 16px;
    background: #ffffff;
    border-radius: 8px;
  `,
}

const ThemeSwitch = ({ onChangeTheme, theme }) => {
  return (
    <button
      css={styles.switch}
      onClick={() => onChangeTheme(theme === 'light' ? 'dark' : 'light')}
      type="button"
    >
      <div css={styles.slider} />
    </button>
  )
}

export default ThemeSwitch
