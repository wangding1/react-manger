import { RouterProvider } from 'react-router-dom'
import router from './router/index'
import { showLoading, hideLoading } from './utils/loading/index'

function App() {
  console.log(import.meta.env)
  showLoading()
  return <RouterProvider router={router}></RouterProvider>
}

export default App
