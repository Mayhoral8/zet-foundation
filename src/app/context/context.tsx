'use client'
import {createContext, useRef} from 'react'
import Navbar from '../navbar'
import Home from '../page'

interface ContextTypes {
    ref1: React.RefObject<HTMLDivElement>
    ref2: React.RefObject<HTMLDivElement>

}

export const ContextCreate = createContext({} as ContextTypes)
const ContextComp: React.FC<{ children: React.ReactNode }> = (props) => {
    const ref1 = useRef<HTMLDivElement>(null)
    const ref2 = useRef<HTMLDivElement>(null)

  return (
    <ContextCreate.Provider
         value ={{
          ref1,
          ref2
        }}>
  {props.children}
    </ContextCreate.Provider>
  )
}

export  {ContextComp}