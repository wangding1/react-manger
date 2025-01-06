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

export interface PageParams {
  pageNum: number
  pageSize?: number
}

export interface ResultData<T = any> {
  list: T[]
  page: {
    pageNum: number
    pageSize: number
    total: number | 0
  }
}

export namespace User {
  export interface SearchParams {
    userId?: number
    userName?: string
    state?: number
  }
  export interface Params extends PageParams {
    userId?: number
    userName?: string
    state?: number
  }

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
  export interface CreateParams {
    userName: string
    userEmail: string
    mobile?: number
    deptId: string
    job?: string
    state?: number
    roleList: string[]
    userImg: string
  }

  export interface EditParams extends CreateParams {
    userId: number
  }
}

export namespace Dashboard {
  export interface ReportData {
    driverCount: number
    totalMoney: number
    orderCount: number
    cityNum: number
  }
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

export namespace Dept {
  export interface DeptItem {
    _id: string
    createTime: string
    updateTime: string
    deptName: string
    parentId: string
    userName: string
    children: DeptItem[]
  }
}
