// import { request } from '@/utils/request'
import { Login } from '@/types/api'
import { User, Dashboard } from '@/types/api'

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

export function getLineData(): Promise<Dashboard.LineData> {
  return new Promise(resolve => {
    resolve({
      label: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      order: [120, 200, 150, 230, 220, 180, 250],
      money: [300, 400, 350, 430, 420, 380, 450],
    })
  })
}

export function getPieCityData(): Promise<Dashboard.PieData[]> {
  return new Promise(resolve => {
    resolve([
      { value: 100, name: 'Beijing' },
      { value: 200, name: 'Shanghai' },
      { value: 150, name: 'Guangzhou' },
      { value: 230, name: 'Shenzhen' },
      { value: 220, name: 'Chengdu' },
      { value: 180, name: 'Wuhan' },
      { value: 250, name: 'Xian' },
    ])
  })
}

export function getPieAgeData(): Promise<Dashboard.PieData[]> {
  return new Promise(resolve => {
    resolve([
      { value: 100, name: '18-24' },
      { value: 200, name: '25-30' },
      { value: 150, name: '31-35' },
      { value: 230, name: '36-40' },
      { value: 220, name: '41-45' },
      { value: 180, name: '46-50' },
      { value: 250, name: '51-55' },
    ])
  })
}

export function getRadarData(): Promise<Dashboard.RadarData> {
  return new Promise(resolve => {
    resolve({
      indicator: [
        { name: '销售', max: 6500 },
        { name: '管理', max: 16000 },
        { name: '信息技术', max: 30000 },
        { name: '客服', max: 38000 },
        { name: '研发', max: 52000 },
        { name: '市场', max: 25000 },
      ],
      data: [
        { name: '王某某', value: [4300, 10000, 28000, 35000, 50000, 19000] },
        { name: '李某某', value: [5000, 14000, 28000, 31000, 42000, 21000] },
      ],
    })
  })
}
