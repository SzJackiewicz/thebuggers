'use client'

import useCookie from '@/hooks/useCookie'
import { State } from '@/interfaces/State'
import { initialState, reducer } from '@/store/reducer'
import { Action, Provider } from '@/types/types'
import { cookies } from 'next/headers'
import { Dispatch, createContext, useEffect, useReducer } from 'react'

type StoreContextType = State & {
  dispatch: Dispatch<Action>
}

export const StoreContext = createContext<StoreContextType>({
  ...initialState,
  dispatch: () => {},
})

export const StoreProvider = ({ children }: Provider) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  const { get } = useCookie()

  useEffect(() => {
    const lang = get('lang')
    if (lang) {
      dispatch({ type: 'toggle_login_switch', loginSwitch: lang !== 'pl_PL' })
    }
  }, [])

  return <StoreContext.Provider value={{ ...state, dispatch }}>{children}</StoreContext.Provider>
}
