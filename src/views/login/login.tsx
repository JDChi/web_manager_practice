import api from '@/api';
import { LoginNS } from '@/types/api';
import storage from '@/utils/storage';
import { Button, Form, Input, message } from 'antd';
import style from './index.module.less';

export default function Login() {
    const onFinish = async (value: LoginNS.params) => {
        const data = await api.login(value);

        storage.set('token', data);
        message.success('登录成功');
        console.log('data', data);

        // 做一个登录后的跳转
        const params = new URLSearchParams(location.search);
        location.href = params.get('callback') || '/welcome';
    };

    // const onFinishFailed: FormProps<FieldType>['onFinishFailed'] =
    //     errorInfo => {
    //         console.log('Failed:', errorInfo);
    //     };
    return (
        <div className={style.login}>
            <div className={style.loginWrapper}>
                <div className={style.title}>系统登录</div>
                <Form
                    name='basic'
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                    // onFinishFailed={onFinishFailed}
                    autoComplete='off'
                >
                    <Form.Item
                        name='username'
                        rules={[
                            {
                                required: true,
                                message: 'Please input your username!'
                            }
                        ]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        name='password'
                        rules={[
                            {
                                required: true,
                                message: 'Please input your password!'
                            }
                        ]}
                    >
                        <Input.Password />
                    </Form.Item>

                    <Form.Item
                        name='remember'
                        valuePropName='checked'
                        wrapperCol={{ offset: 8, span: 16 }}
                    ></Form.Item>

                    <Form.Item>
                        <Button type='primary' block htmlType='submit'>
                            登录
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </div>
    );
}
