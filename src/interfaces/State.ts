import { User } from './User'

export interface State {
  userData: User | null
  loginSwitch: boolean
  locale: string
}
