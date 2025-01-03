import { Breadcrumb, Switch, Dropdown } from 'antd'
import { MenuUnfoldOutlined } from '@ant-design/icons'
import { useState } from 'react'
import style from './NavHeader.module.less'
import type { MenuProps } from 'antd'
import useStore from '@/store/index'
import storage from '@/utils/storage'
function NavHeader() {
  const userInfo = useStore(store => store.userInfo)
  const [items] = useState([
    {
      title: '首页',
    },
    {
      title: '工作台',
    },
  ])
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
