import Error404 from '@/views/404'
import Login from '@/views/login'
import { createBrowserRouter, Navigate } from 'react-router-dom'

const router = [
    {
        path: '/login',
        element: Login()
    },
    {
        path: '*',
        element: <Navigate to={'/404'}></Navigate>
    },
    {
        path: '/404',
        element: Error404()
    }
]

export default createBrowserRouter(router)
