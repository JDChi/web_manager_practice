import { IAction, ICreateUserModel } from '@/types/modal';
import { Form, Input, Modal } from 'antd';
import { forwardRef, Ref, useImperativeHandle, useState } from 'react';

// 创建用户的弹窗
const CreateUserModal = forwardRef<ICreateUserModel>(
    (_, ref: Ref<ICreateUserModel>) => {
        // 设置能暴露出现的方法
        useImperativeHandle(ref, () => ({
            display
        }));

        const [visible, setVisible] = useState(false);
        const [action, setAction] = useState<IAction>('create');
        const [data, setData] = useState<string>('');

        const display = (type: IAction, data: string) => {
            console.log('type: ', type, 'data: ', data);
            setVisible(true);
            setAction(type);
            setData(data);
        };

        const [form] = Form.useForm();
        const handleSubmit = async () => {
            const valid = await form.validateFields();
            console.log('valid: ', valid);
        };

        const handleCancel = () => {
            throw new Error('Function not implemented.');
        };

        return (
            <Modal
                title='创建用户'
                width={800}
                open={visible}
                onOk={handleSubmit}
                onCancel={handleCancel}
                okText='确认'
                cancelText='取消'
            >
                <Form form={form} labelCol={{ span: 4 }}>
                    <Form.Item
                        label='用户名称'
                        name='userName'
                        rules={[{ required: true, message: '请输入用户名称' }]}
                    >
                        <Input
                            placeholder='请输入用户名称'
                            defaultValue={data}
                        ></Input>
                    </Form.Item>
                    <Form.Item
                        label='用户邮箱'
                        name='userEmail'
                        rules={[{ required: true, message: '请输入用户邮箱' }]}
                    >
                        <Input placeholder='请输入用户邮箱'></Input>
                    </Form.Item>
                    <Form.Item label='用户手机号' name='mobile'>
                        <Input
                            type='number'
                            placeholder='请输入用户手机号'
                        ></Input>
                    </Form.Item>
                </Form>
            </Modal>
        );
    }
);

export default CreateUserModal;
