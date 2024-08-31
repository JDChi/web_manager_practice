import { LoginNS } from '@/types/api';
import request from '@/utils/request';

export default {
    login(params: LoginNS.params) {
        return request.post('/user/login', params);
    }
};
