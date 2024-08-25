import Error404 from '@/views/404'
import Login from '@/views/login'
import { createBrowserRouter, Navigate } from 'react-router-dom'

const router = [
    {
        path: '/',
        element: <div>Welcomeddd</div>
    },
    {
        path: '/login',
        element: <Login /> // 要注意这里的组件写法，不要写成函数调用了
    },
    {
        path: '*',
        element: <Navigate to='404' />
    },
    {
        path: '/404',
        element: <Error404 />
    }
]

export default createBrowserRouter(router)
