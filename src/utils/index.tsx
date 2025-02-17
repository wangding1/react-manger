import { items as routers } from '@/components/MyMenu/MyMenu'

// 格式化金额
export const formatMoney = (num?: number | string) => {
  if (!num) return '0.00'
  const a = parseFloat(num.toString())
  return a.toLocaleString('zh-CN', { style: 'currency', currency: 'CNY' })
}

// 格式化数字
export const formatNum = (num?: number | string) => {
  if (!num) return 0
  const a = num.toString()
  if (a.indexOf('.') > -1) return a.replace(/(\d)(?=(\d{3})+\.)/g, '$1,')
  return a.replace(/(\d)(?=(\d{3})+$)/g, '$1,')
}

// 格式化日期
export const toLocalDate = (date?: Date, rule?: string) => {
  let curDate = new Date()
  if (date) curDate = date
  if (rule === 'yyyy-MM-dd') return curDate.toLocaleDateString().replace(/\//g, '-')
  if (rule === 'HH:mm:ss') return curDate.toLocaleTimeString().replace(/\//g, '-')
  return curDate.toLocaleString().replace(/\//g, '-')
}

// 格式化日期
export const formatDate = (date?: Date | string, rule?: string) => {
  let curDate = new Date()
  if (date instanceof Date) curDate = date
  else if (date) curDate = new Date(date)

  let fmt = rule || 'yyyy-MM-dd HH:mm:ss'
  fmt = fmt.replace(/(y+)/, curDate.getFullYear().toString())
  type OType = {
    [key: string]: number
  }
  const O: OType = {
    'M+': curDate.getMonth() + 1,
    'd+': curDate.getDate(),
    'H+': curDate.getHours(),
    'm+': curDate.getMinutes(),
    's+': curDate.getSeconds(),
  }
  for (const k in O) {
    fmt = fmt.replace(new RegExp(`(${k})`), O[k] > 9 ? O[k].toString() : '0' + O[k].toString())
  }
  return fmt
}

// 用户状态转换
export const formatState = (state: number) => {
  if (state === 1) return '在职'
  if (state === 2) return '试用期'
  if (state === 3) return '离职'
}

export function formateMobile(mobile?: string) {
  if (!mobile) return null
  return mobile.replace(/(\d{3})\d{4}(\d{4})/, '$1****$2')
}

export function findTreeNode(pathname: string) {
  const arr: { title: JSX.Element | string }[] = []
  getTree(routers, pathname, arr)
  return arr
}

function getTree(data: any[], pathname: string, result: any[], before: any[] = []) {
  data.forEach(item => {
    if (item.key === pathname) {
      let arr = [
        ...before,
        {
          title: item.label,
        },
      ]
      result.push(...arr)
    }
    if (item.children) {
      getTree(item.children, pathname, result, [
        ...before,
        {
          title: item.label,
        },
      ])
    }
  })
}
