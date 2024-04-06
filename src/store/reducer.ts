import { State } from '@/interfaces/State'
import { Action } from '@/types/types'

export const initialState: State = {
  userData: {
    id: '924c3fb8-4529-4caa-8eec-6e4f8ce3131e',
    fullName: 'Simeon Graham',
    age: 28,
    email: 'simeon.graham@email.com',
    departmentId: '123',
    departmentName: 'HR',
  },
  loginSwitch: false,
  locale: 'pl_PL',
}

export const reducer = (state: State = initialState, action: Action) => {
  switch (action.type) {
    case 'login_user': {
      return {
        ...state,
        userData: {
          ...state.userData,
          departmentName: action.userData || 'HR',
        },
      }
    }

    case 'logout': {
      return {
        ...state,
        userData: null,
      }
    }

    case 'toggle_login_switch': {
      return {
        ...state,
        loginSwitch: !state.loginSwitch,
      }
    }

    case 'locale': {
      return {
        ...state,
        locale: action.locale,
      }
    }

    default:
      return state
  }
}
