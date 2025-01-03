// import { request } from '@/utils/request'
import { Login } from '@/types/api'
import { User } from '@/types/api'

export function login(params: Login.params) {
  return Promise.resolve('login success')
}
export function getUserInfo(): Promise<User.UserItem> {
  return new Promise(resolve => {
    resolve({
      _id: '1234567890',
      userId: 1,
      userName: 'admin',
      userEmail: 'admin@admin.com',
      deptId: '1234567890',
      state: 1,
      mobile: '13800138000',
      job: 'admin',
      role: 1,
      roleList: 'admin',
      createId: 1,
      deptName: 'admin',
      userImg: 'https://www.baidu.com/img/bd_logo1.png',
    })
  })
}
