import { User } from '@/types/api'
import { create } from 'zustand'

const store = create<{
  token: string
  userInfo: User.UserItem
  updateToken: (token: string) => void
  updateUserInfo: (userInfo: User.UserItem) => void
}>(set => ({
  token: '',
  userInfo: {
    _id: '',
    userId: 0,
    userName: '',
    userEmail: '',
    deptId: '',
    state: 0,
    mobile: '',
    job: '',
    role: 0,
    roleList: '',
    createId: 0,
    deptName: '',
    userImg: '',
  },
  updateToken: (token: string) => set({ token }),
  updateUserInfo: (userInfo: User.UserItem) => set({ userInfo }),
}))

export default store
