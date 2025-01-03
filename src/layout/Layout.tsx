import React, { useEffect } from 'react'
import { Layout, Watermark } from 'antd'
import NavHeader from '@/components/NavHeader/NavHeader'
import NavFooter from '@/components/NavFooter/NavFooter'
import MyMenu from '@/components/MyMenu/MyMenu'
import { Outlet } from 'react-router-dom'
import style from './Layput.module.less'
import { getUserInfo } from '@/api/index'
import useStore from '@/store/index'

const { Content, Sider } = Layout

const App: React.FC = () => {
  const store = useStore()
  useEffect(() => {
    getUserInfo().then(res => {
      store.updateUserInfo(res)
    })
  }, [])

  return (
    <Watermark content='Ant Design'>
      <Layout>
        <Sider>
          <MyMenu></MyMenu>
        </Sider>
        <Layout>
          <NavHeader />
          <Content className={style.content}>
            <div className={style.wrapper}>
              <Outlet />
            </div>
            <NavFooter />
          </Content>
        </Layout>
      </Layout>
    </Watermark>
  )
}

export default App
