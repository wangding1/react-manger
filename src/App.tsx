import { RouterProvider } from 'react-router-dom'
import { ConfigProvider, App as AntdApp } from 'antd'
import router from './router/index'
import './App.less'
import AntdGlobal from '@/utils/AntdGlobal'

function App() {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#ed6c00',
        },
      }}
    >
      <AntdApp>
        <AntdGlobal />
        <RouterProvider router={router}></RouterProvider>
      </AntdApp>
    </ConfigProvider>
  )
}

export default App
