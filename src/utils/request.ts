import { Result } from '@/types/api';
import { message } from 'antd';
import axios from 'axios';
import { hideLoading, showLoading } from './loading';

console.log(import.meta.env);
const instance = axios.create({
    baseURL: import.meta.env.VITE_BASE_API,
    timeout: 8000
});

export default {
    get<T>(url: string, params?: any): Promise<T> {
        return instance.get(url, { params });
    },

    post<T>(url: string, params?: any): Promise<T> {
        return instance.post(url, params);
    }
};

// 请求拦截器
instance.interceptors.request.use(
    config => {
        showLoading();
        console.log('interceptors');
        const token = 'ddd';
        if (token) {
            config.headers.Authorization = 'Token:' + token;
        }
        return { ...config };
    },
    e => {
        return Promise.reject(e);
    }
);

// 响应拦截器
instance.interceptors.response.use(
    response => {
        const data: Result = response.data;
        hideLoading();
				// 判断下 code，500001 代表 token 失效
        if (data.code === 500001) {
            message.error(data.msg);
            location.href = '/login';
        } else if (data.code != 0) {
            message.error(data.msg);
            return Promise.reject(data);
        }
        return data.data;
    },
    error => {
        hideLoading();
        message.error(error.message);
        return Promise.reject(error.message);
    }
);
