import { Breadcrumb, Switch, Dropdown } from 'antd'
import { MenuUnfoldOutlined } from '@ant-design/icons'
import { useEffect, useState } from 'react'
import style from './NavHeader.module.less'
import type { MenuProps } from 'antd'
import useStore from '@/store/index'
import storage from '@/utils/storage'
import { useLocation } from 'react-router-dom'
import { findTreeNode } from '@/utils'
function NavHeader() {
  const { pathname } = useLocation()
  const userInfo = useStore(store => store.userInfo)
  const [items, setItems] = useState<{ title: JSX.Element | string }[]>([
    {
      title: <a href='/welcome'>首页</a>,
    },
  ])
  useEffect(() => {
    const arr = findTreeNode(pathname)
    setItems([
      {
        title: <a href='/welcome'>首页</a>,
      },
      ...arr,
    ])
  }, [pathname])
  const menu: MenuProps['items'] = [
    {
      key: 'email',
      label: '邮箱：' + userInfo.userEmail,
    },
    {
      key: 'logout',
      label: '退出',
    },
  ]
  const onClick: MenuProps['onClick'] = ({ key }) => {
    if (key === 'logout') {
      storage.remove('token')
      location.href = '/login?callback=' + encodeURIComponent(location.href)
    }
  }
  return (
    <div className={style.navHeader}>
      <div className={style.left}>
        <MenuUnfoldOutlined style={{ cursor: 'pointer' }} />
        <Breadcrumb style={{ marginLeft: '10px' }} items={items}></Breadcrumb>
      </div>
      <div className={style.right}>
        <Switch />
        <Dropdown trigger={['click']} menu={{ items: menu, onClick }}>
          <span style={{ marginLeft: '10px' }}>{userInfo.userName}</span>
        </Dropdown>
      </div>
    </div>
  )
}

export default NavHeader
