// import { request } from '@/utils/request'
import { User, Dashboard, ResultData, Login, Dept } from '@/types/api'

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

export function getReportData(): Promise<Dashboard.ReportData> {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({
        driverCount: 100,
        totalMoney: 100000,
        orderCount: 1000,
        cityNum: 7,
      })
    }, 100)
  })
}

export function getUserList(params: User.Params): Promise<ResultData<User.UserItem>> {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({
        list: [
          {
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
          },
          {
            _id: '1234567891',
            userId: 2,
            userName: 'user1',
            userEmail: 'user1@user1.com',
            deptId: '1234567891',
            state: 1,
            mobile: '13800138001',
            job: 'user',
            role: 2,
            roleList: 'user',
            createId: 2,
            deptName: 'user',
            userImg: 'https://www.baidu.com/img/bd_logo1.png',
          },
          {
            _id: '1234567892',
            userId: 3,
            userName: 'user2',
            userEmail: 'user2@user2.com',
            deptId: '1234567892',
            state: 1,
            mobile: '13800138002',
            job: 'user',
            role: 2,
            roleList: 'user',
            createId: 3,
            deptName: 'user',
            userImg: 'https://www.baidu.com/img/bd_logo1.png',
          },
          {
            _id: '1234567893',
            userId: 4,
            userName: 'user3',
            userEmail: 'user3@user3.com',
            deptId: '1234567893',
            state: 1,
            mobile: '13800138003',
            job: 'user',
            role: 2,
            roleList: 'user',
            createId: 4,
            deptName: 'user',
            userImg: 'https://www.baidu.com/img/bd_logo1.png',
          },
          {
            _id: '1234567894',
            userId: 5,
            userName: 'user4',
            userEmail: 'user4@user4.com',
            deptId: '1234567894',
            state: 1,
            mobile: '13800138004',
            job: 'user',
            role: 2,
            roleList: 'user',
            createId: 5,
            deptName: 'user',
            userImg: 'https://www.baidu.com/img/bd_logo1.png',
          },
          {
            _id: '1234567895',
            userId: 6,
            userName: 'user5',
            userEmail: 'user5@user5.com',
            deptId: '1234567895',
            state: 1,
            mobile: '13800138005',
            job: 'user',
            role: 2,
            roleList: 'user',
            createId: 6,
            deptName: 'user',
            userImg: 'https://www.baidu.com/img/bd_logo1.png',
          },
          {
            _id: '1234567896',
            userId: 7,
            userName: 'user6',
            userEmail: 'user6@user6.com',
            deptId: '1234567896',
            state: 1,
            mobile: '13800138006',
            job: 'user',
            role: 2,
            roleList: 'user',
            createId: 7,
            deptName: 'user',
            userImg: 'https://www.baidu.com/img/bd_logo1.png',
          },
          {
            _id: '1234567897',
            userId: 8,
            userName: 'user7',
            userEmail: 'user7@user7.com',
            deptId: '1234567897',
            state: 1,
            mobile: '13800138007',
            job: 'user',
            role: 2,
            roleList: 'user',
            createId: 8,
            deptName: 'user',
            userImg: 'https://www.baidu.com/img/bd_logo1.png',
          },
          {
            _id: '1234567898',
            userId: 9,
            userName: 'user8',
            userEmail: 'user8@user8.com',
            deptId: '1234567898',
            state: 1,
            mobile: '13800138008',
            job: 'user',
            role: 2,
            roleList: 'user',
            createId: 9,
            deptName: 'user',
            userImg: 'https://www.baidu.com/img/bd_logo1.png',
          },
          {
            _id: '1234567899',
            userId: 10,
            userName: 'user9',
            userEmail: 'user9@user9.com',
            deptId: '1234567899',
            state: 1,
            mobile: '13800138009',
            job: 'user',
            role: 2,
            roleList: 'user',
            createId: 10,
            deptName: 'user',
            userImg: 'https://www.baidu.com/img/bd_logo1.png',
          },
          {
            _id: '1234567810',
            userId: 11,
            userName: 'user10',
            userEmail: 'user10@user10.com',
            deptId: '1234567810',
            state: 1,
            mobile: '13800138010',
            job: 'user',
            role: 2,
            roleList: 'user',
            createId: 11,
            deptName: 'user',
            userImg: 'https://www.baidu.com/img/bd_logo1.png',
          },
          {
            _id: '1234567811',
            userId: 12,
            userName: 'user11',
            userEmail: 'user11@user11.com',
            deptId: '1234567811',
            state: 1,
            mobile: '13800138011',
            job: 'user',
            role: 2,
            roleList: 'user',
            createId: 12,
            deptName: 'user',
            userImg: 'https://www.baidu.com/img/bd_logo1.png',
          },
        ],
        page: {
          pageNum: 1,
          pageSize: 10,
          total: 12,
        },
      })
    })
  })
}

export function createUser(params: User.CreateParams) {
  return new Promise(resolve => {
    resolve(1)
  })
}

export function getDeptList(params: Dept.Params): Promise<Dept.DeptItem[]> {
  return new Promise(resolve => {
    resolve([
      {
        _id: '1234567890',
        createTime: '2021-01-01',
        updateTime: '2021-01-01',
        deptName: '总公司',
        parentId: '',
        userName: 'admin',
        children: [
          {
            _id: '1234567891',
            createTime: '2021-01-01',
            updateTime: '2021-01-01',
            deptName: '分公司1',
            parentId: '1234567890',
            userName: 'admin',
            children: [
              {
                _id: '1234567892',
                createTime: '2021-01-01',
                updateTime: '2021-01-01',
                deptName: '部门1',
                parentId: '1234567891',
                userName: 'admin',
                children: [],
              },
              {
                _id: '1234567893',
                createTime: '2021-01-01',
                updateTime: '2021-01-01',
                deptName: '部门2',
                parentId: '1234567891',
                userName: 'admin',
                children: [],
              },
            ],
          },
          {
            _id: '1234567894',
            createTime: '2021-01-01',
            updateTime: '2021-01-01',
            deptName: '分公司2',
            parentId: '1234567890',
            userName: 'admin',
            children: [
              {
                _id: '1234567895',
                createTime: '2021-01-01',
                updateTime: '2021-01-01',
                deptName: '部门3',
                parentId: '1234567894',
                userName: 'admin',
                children: [],
              },
              {
                _id: '1234567896',
                createTime: '2021-01-01',
                updateTime: '2021-01-01',
                deptName: '部门4',
                parentId: '1234567894',
                userName: 'admin',
                children: [],
              },
            ],
          },
        ],
      },
    ])
  })
}

export function editUser(params: User.EditParams) {
  return new Promise(resolve => {
    resolve(1)
  })
}

export function delUser(userId: number[]) {
  return new Promise(resolve => {
    resolve(1)
  })
}

export function deleteDept(params: Dept.DelParams) {
  return new Promise(resolve => {
    resolve(1)
  })
}

export function getAllUserList(params: User.SearchParams): Promise<User.UserItem[]> {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve([
        {
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
        },
        {
          _id: '1234567891',
          userId: 2,
          userName: 'user1',
          userEmail: 'user1@user1.com',
          deptId: '1234567891',
          state: 1,
          mobile: '13800138001',
          job: 'user',
          role: 2,
          roleList: 'user',
          createId: 2,
          deptName: 'user',
          userImg: 'https://www.baidu.com/img/bd_logo1.png',
        },
        {
          _id: '1234567892',
          userId: 3,
          userName: 'user2',
          userEmail: 'user2@user2.com',
          deptId: '1234567892',
          state: 1,
          mobile: '13800138002',
          job: 'user',
          role: 2,
          roleList: 'user',
          createId: 3,
          deptName: 'user',
          userImg: 'https://www.baidu.com/img/bd_logo1.png',
        },
        {
          _id: '1234567893',
          userId: 4,
          userName: 'user3',
          userEmail: 'user3@user3.com',
          deptId: '1234567893',
          state: 1,
          mobile: '13800138003',
          job: 'user',
          role: 2,
          roleList: 'user',
          createId: 4,
          deptName: 'user',
          userImg: 'https://www.baidu.com/img/bd_logo1.png',
        },
        {
          _id: '1234567894',
          userId: 5,
          userName: 'user4',
          userEmail: 'user4@user4.com',
          deptId: '1234567894',
          state: 1,
          mobile: '13800138004',
          job: 'user',
          role: 2,
          roleList: 'user',
          createId: 5,
          deptName: 'user',
          userImg: 'https://www.baidu.com/img/bd_logo1.png',
        },
        {
          _id: '1234567895',
          userId: 6,
          userName: 'user5',
          userEmail: 'user5@user5.com',
          deptId: '1234567895',
          state: 1,
          mobile: '13800138005',
          job: 'user',
          role: 2,
          roleList: 'user',
          createId: 6,
          deptName: 'user',
          userImg: 'https://www.baidu.com/img/bd_logo1.png',
        },
        {
          _id: '1234567896',
          userId: 7,
          userName: 'user6',
          userEmail: 'user6@user6.com',
          deptId: '1234567896',
          state: 1,
          mobile: '13800138006',
          job: 'user',
          role: 2,
          roleList: 'user',
          createId: 7,
          deptName: 'user',
          userImg: 'https://www.baidu.com/img/bd_logo1.png',
        },
        {
          _id: '1234567897',
          userId: 8,
          userName: 'user7',
          userEmail: 'user7@user7.com',
          deptId: '1234567897',
          state: 1,
          mobile: '13800138007',
          job: 'user',
          role: 2,
          roleList: 'user',
          createId: 8,
          deptName: 'user',
          userImg: 'https://www.baidu.com/img/bd_logo1.png',
        },
        {
          _id: '1234567898',
          userId: 9,
          userName: 'user8',
          userEmail: 'user8@user8.com',
          deptId: '1234567898',
          state: 1,
          mobile: '13800138008',
          job: 'user',
          role: 2,
          roleList: 'user',
          createId: 9,
          deptName: 'user',
          userImg: 'https://www.baidu.com/img/bd_logo1.png',
        },
        {
          _id: '1234567899',
          userId: 10,
          userName: 'user9',
          userEmail: 'user9@user9.com',
          deptId: '1234567899',
          state: 1,
          mobile: '13800138009',
          job: 'user',
          role: 2,
          roleList: 'user',
          createId: 10,
          deptName: 'user',
          userImg: 'https://www.baidu.com/img/bd_logo1.png',
        },
        {
          _id: '1234567810',
          userId: 11,
          userName: 'user10',
          userEmail: 'user10@user10.com',
          deptId: '1234567810',
          state: 1,
          mobile: '13800138010',
          job: 'user',
          role: 2,
          roleList: 'user',
          createId: 11,
          deptName: 'user',
          userImg: 'https://www.baidu.com/img/bd_logo1.png',
        },
        {
          _id: '1234567811',
          userId: 12,
          userName: 'user11',
          userEmail: 'user11@user11.com',
          deptId: '1234567811',
          state: 1,
          mobile: '13800138011',
          job: 'user',
          role: 2,
          roleList: 'user',
          createId: 12,
          deptName: 'user',
          userImg: 'https://www.baidu.com/img/bd_logo1.png',
        },
      ])
    })
  })
}

export function createDept(params: Dept.CreateParams) {
  return new Promise(resolve => {
    resolve(1)
  })
}
export function editDept(params: Dept.EditParams) {
  return new Promise(resolve => {
    resolve(1)
  })
}
