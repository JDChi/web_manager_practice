import { message } from 'antd';
import axios from 'axios';
import { hideLoading, showLoading } from './loading';

const instance = axios.create({
    baseURL: 'https://3cbd5ff2-323e-42ad-85ff-610e3371764a.mock.pstmn.io',
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
        const data = response.data;
        hideLoading();
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
