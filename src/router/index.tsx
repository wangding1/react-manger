import { createBrowserRouter, Navigate } from 'react-router-dom'
import Error404 from '@/views/404'
import Error403 from '@/views/403'
import Login from '@/views/login/Login'
import Welcome from '@/views/welcome/Welcome'
import Layout from '@/layout/Layout'
import Dashboard from '@/views/dashboard'
import UserList from '@/views/system/user'
import DeptList from '@/views/system/dept'
import OrderList from '@/views/order/OrderList'

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
        element: <UserList />,
      },
      {
        path: '/deptList',
        element: <DeptList />,
      },
      {
        path: '/orderList',
        element: <OrderList />,
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
