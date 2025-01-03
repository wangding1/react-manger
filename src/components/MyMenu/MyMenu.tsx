import { DesktopOutlined, MailOutlined, AppstoreOutlined } from '@ant-design/icons'
import { Menu } from 'antd'
import style from './MyMenu.module.less'

const items = [
  { key: '1', icon: <DesktopOutlined />, label: '工作台' },
  {
    key: 'sub1',
    label: 'Navigation One',
    icon: <MailOutlined />,
    children: [
      { key: '5', label: 'Option 5' },
      { key: '6', label: 'Option 6' },
      { key: '7', label: 'Option 7' },
      { key: '8', label: 'Option 8' },
    ],
  },
  {
    key: 'sub2',
    label: 'Navigation Two',
    icon: <AppstoreOutlined />,
    children: [
      { key: '9', label: 'Option 9' },
      { key: '10', label: 'Option 10' },
      {
        key: 'sub3',
        label: 'Submenu',
        children: [
          { key: '11', label: 'Option 11' },
          { key: '12', label: 'Option 12' },
        ],
      },
    ],
  },
]

const App: React.FC = () => {
  return (
    <div className={style.navSide}>
      <div className={style.logo}>
        <img className={style.img} src='/imgs/logo.png' alt='' />
        <span>慕慕货运</span>
      </div>
      <Menu defaultSelectedKeys={['1']} mode='inline' theme='dark' items={items} />
    </div>
  )
}

export default App
