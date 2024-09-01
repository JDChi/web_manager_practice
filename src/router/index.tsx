import MyLayout from '@/layout';
import Error404 from '@/views/404';
import Login from '@/views/login/login';
import Welcome from '@/views/welcome';
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
