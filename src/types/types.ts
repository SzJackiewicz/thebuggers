import { User } from '@/interfaces/User'
import { ReactNode } from 'react'

export type Action = { type: 'login_user'; userData: User } | { type: 'logout' } | { type: 'toggle_login_switch' } | {type: 'locale'; locale: string}

export type Provider = {
  children: ReactNode
}
