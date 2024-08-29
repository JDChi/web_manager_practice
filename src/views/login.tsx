import request from '@/utils/request';
import { useEffect } from 'react';

export default function Login() {
    useEffect(() => {
        request
            .get('/userinfo', {
                user_id: 1
            })
            .then(res => {
                console.log(res);
            })
            .catch(e => {
                console.log('error: ', e);
            });
    }, []);

    return <div>Login</div>;
}
