import Error404 from '@/views/404';
import Login from '@/views/login';
import Welcome from '@/views/welcome';
import { Navigate, useRoutes } from 'react-router-dom';

const router = [
    {
        path: '/',
        element: <Welcome />
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
