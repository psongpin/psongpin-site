import { Scroll } from 'react-fns'
import { useEffect, useContext, FC } from 'react'

import ScrollCheckContext from './context'

interface Props {
  y: number
}

const ScrollChecker: FC<{}> = () => (
  <Scroll render={({ y }): JSX.Element => <Trigger y={y} />} />
)

const Trigger: FC<Props> = ({ y = 0 }) => {
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
