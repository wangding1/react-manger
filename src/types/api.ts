export interface IConfig {
  showLoading?: boolean
  showError?: boolean
}

export interface Result<T = any> {
  code: number
  data: T
  msg: string
}
export namespace Login {
  export interface params {
    userName: string
    userPwd: string
  }
}

export namespace User {
  export interface UserItem {
    _id: string
    userId: number
    userName: string
    userEmail: string
    deptId: string
    state: number
    mobile: string
    job: string
    role: number
    roleList: string
    createId: number
    deptName: string
    userImg: string
  }
}

export namespace Dashboard {
  export interface LineData {
    label: string[]
    order: number[]
    money: number[]
  }
  export interface PieData {
    value: number
    name: string
  }
  export interface RadarData {
    indicator: Array<{ name: string; max: number }>
    data: {
      name: string
      value: number[]
    }[]
  }
}
