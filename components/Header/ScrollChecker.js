import { Scroll } from 'react-fns'
import { useEffect, useContext } from 'react'

import ScrollCheckContext from './context'

const ScrollChecker = () => <Scroll render={({ y }) => <Trigger y={y} />} />

const Trigger = ({ y = 0 }) => {
  const { isPageOnTop, setIsPageOnTop } = useContext(ScrollCheckContext)

  useEffect(() => {
    if (y > 0 && isPageOnTop) {
      setIsPageOnTop(false)
    }

    if (y <= 0 && !isPageOnTop) {
      setIsPageOnTop(true)
    }
  }, [y, isPageOnTop, setIsPageOnTop])
  return null
}

export default ScrollChecker
