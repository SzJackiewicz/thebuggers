import { useState } from 'react'
import { useCookies } from 'react-cookie'

export default function useCookie() {
  const [cookies, setCookie, removeCookie] = useCookies()

  const get = (name: string) => {
    return cookies[name]
  }

  const set = (setName: string, setValue: any) => {
    setCookie(setName!, setValue!)
  }

  const remove = (removeName: string) => {
    removeCookie(removeName!)
  }

  return {
    get,
    set,
    remove,
  }
}
