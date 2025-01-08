import { MutableRefObject } from 'react'
import { User } from './api'

export type IAction = 'create' | 'edit' | 'delete'

export interface IModalProp<T = User.UserItem> {
  mRef: MutableRefObject<
    | {
        open: (type: IAction, data?: T) => void
      }
    | undefined
  >
  update: () => void
}

export interface IModalDetailProp<T = User.UserItem> {
  mRef: MutableRefObject<
    | {
        open: (data: T) => void
      }
    | undefined
  >
}
