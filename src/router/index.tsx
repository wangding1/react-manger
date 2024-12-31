import { createHashRouter, Navigate } from 'react-router-dom'
import Error404 from '@/views/404'
import Error403 from '@/views/403'

const routes = [
  {
    path: '/',
    element: <div>Home</div>,
  },
  {
    path: '/login',
    element: <div>Login</div>,
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

export default createHashRouter(routes)
