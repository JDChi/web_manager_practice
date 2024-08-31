import { Button, Form, FormProps, Input } from 'antd';
import style from './index.module.less';

export default function Login() {
    type FieldType = {
        username?: string;
        password?: string;
        remember?: string;
    };

    const onFinish: FormProps<FieldType>['onFinish'] = values => {
        console.log('Success:', values);
    };

    const onFinishFailed: FormProps<FieldType>['onFinishFailed'] =
        errorInfo => {
            console.log('Failed:', errorInfo);
        };
    return (
        <div className={style.login}>
            <div className={style.loginWrapper}>
                <div className={style.title}>系统登录</div>
                <Form
                    name='basic'
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete='off'
                >
                    <Form.Item<FieldType>
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

                    <Form.Item<FieldType>
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

                    <Form.Item<FieldType>
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
