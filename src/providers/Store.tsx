'use client'

import { State } from '@/interfaces/State'
import { initialState, reducer } from '@/store/reducer'
import { Action, Provider } from '@/types/types'
import { Dispatch, createContext, useReducer } from 'react'

type StoreContextType = State & {
  dispatch: Dispatch<Action>
}

export const StoreContext = createContext<StoreContextType>({
  ...initialState,
  dispatch: () => {},
})

export const StoreProvider = ({ children }: Provider) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  return <StoreContext.Provider value={{ ...state, dispatch }}>{children}</StoreContext.Provider>
}
