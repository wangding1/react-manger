import { createBrowserRouter, Navigate } from 'react-router-dom'
import Error404 from '@/views/404'
import Error403 from '@/views/403'
import Login from '@/views/login/Login'
import Welcome from '@/views/welcome/Welcome'
import Layout from '@/layout/Layout'
import Dashboard from '@/views/dashboard'
import React, { Suspense } from 'react'

// 懒加载组件
const UserList = React.lazy(() => import('@/views/system/user'))
const DeptList = React.lazy(() => import('@/views/system/dept'))
const OrderList = React.lazy(() => import('@/views/order/OrderList'))
const OrderCluster = React.lazy(() => import('@/views/order/OrderCluster'))

const routes = [
  {
    path: '/',
    element: <Navigate to='/welcome' />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    element: <Layout />,
    children: [
      {
        path: '/welcome',
        element: <Welcome />,
      },
      {
        path: '/dashboard',
        element: <Dashboard />,
      },
      {
        path: '/userList',
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <UserList />
          </Suspense>
        ),
      },
      {
        path: '/deptList',
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <DeptList />
          </Suspense>
        ),
      },
      {
        path: '/orderList',
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <OrderList />
          </Suspense>
        ),
      },
      {
        path: '/orderCluster',
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <OrderCluster />
          </Suspense>
        ),
      },
    ],
  },
  {
    path: '*',
    element: <Navigate to='/404' />,
  },
  {
    path: '/404',
    element: <Error404 />,
  },
  {
    path: '/403',
    element: <Error403 />,
  },
]

export default createBrowserRouter(routes)
