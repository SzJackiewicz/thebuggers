import { StoreContext } from '@/providers/Store'
import { useContext } from 'react'

export const useStore = () => {
  return useContext(StoreContext)
}
