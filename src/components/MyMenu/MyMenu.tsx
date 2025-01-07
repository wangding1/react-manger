import { DesktopOutlined, MailOutlined } from '@ant-design/icons'
import { Menu } from 'antd'
import style from './MyMenu.module.less'
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'

const items = [
  { key: '/dashboard', icon: <DesktopOutlined />, label: '工作台' },
  {
    key: 'sub1',
    label: '系统',
    icon: <MailOutlined />,
    children: [
      { key: '/userList', label: '用户管理' },
      { key: '/deptList', label: '部门管理' },
      { key: '/orderList', label: '订单管理' },
    ],
  },
]

const App: React.FC = () => {
  const navigate = useNavigate()
  const [selectedKeys, setSelectedKeys] = useState<string[]>(['/dashboard'])

  useEffect(() => {
    setSelectedKeys([location.pathname])
  }, [])

  function handleClickMenu({ key }: { key: string }) {
    navigate(key)
    setSelectedKeys([key])
  }
  return (
    <div className={style.navSide}>
      <div className={style.logo}>
        <img className={style.img} src='/imgs/logo.png' alt='' />
        <span>慕慕货运</span>
      </div>
      <Menu selectedKeys={selectedKeys} mode='inline' theme='dark' items={items} onClick={handleClickMenu} />
    </div>
  )
}

export default App
