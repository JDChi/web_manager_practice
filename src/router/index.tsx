import MyLayout from '@/layout';
import Error404 from '@/views/404';
import Dashboard from '@/views/dashboard';
import Login from '@/views/login/index';
import UserList from '@/views/system/user';
import Welcome from '@/views/welcome/index';
import { Navigate, useRoutes } from 'react-router-dom';

const router = [
    {
        path: '/',
        element: <Navigate to={'/welcome'} />
    },
    {
        element: <MyLayout />,
        children: [
            {
                path: '/welcome',
                element: <Welcome />
            },
            {
                path: '/dashboard',
                element: <Dashboard />
            },
            {
                path: '/userlist',
                element: <UserList />
            }
        ]
    },
    {
        path: '/login',
        element: <Login /> // 要注意这里的组件写法，不要写成函数调用了
    },
    {
        path: '*',
        element: <Navigate to='/404' />
    },
    {
        path: '/404',
        element: <Error404 />
    }
];

// export default createBrowserRouter(router);

export default function Router() {
    return useRoutes(router);
}
