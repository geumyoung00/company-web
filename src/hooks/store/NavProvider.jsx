import React, { useReducer } from 'react'
import NavContext from './nav-context'

const navReducer = (state, action) => {}

export const NavProvider = ({ children }) => {
  const [navState, dispatchNav] = useReducer(navReducer, {})
  const value = {}
  return (
    <>
      <NavContext.Provider value={value}>{children}</NavContext.Provider>
    </>
  )
}
