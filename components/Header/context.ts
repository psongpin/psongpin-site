import { createContext, Dispatch, SetStateAction } from 'react'

interface ContextValues {
  isPageOnTop: boolean
  setIsPageOnTop: Dispatch<SetStateAction<boolean>>
}

const ScrollCheckContext = createContext({} as ContextValues)

export default ScrollCheckContext
