import { Form, Input, Modal } from 'antd';

export default function CreateUser() {
    const [form] = Form.useForm();
    const handleSubmit = async () => {
        throw new Error('Function not implemented.');
    };

    const handleCancel = () => {
        throw new Error('Function not implemented.');
    };

    return (
        <Modal
            title='创建用户'
            width={800}
            open={true}
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
                    <Input placeholder='请输入用户名称'></Input>
                </Form.Item>
                <Form.Item
                    label='用户邮箱'
                    name='userEmail'
                    rules={[{ required: true, message: '请输入用户邮箱' }]}
                >
                    <Input placeholder='请输入用户邮箱'></Input>
                </Form.Item>
                <Form.Item label='用户手机号' name='mobile'>
                    <Input type='number' placeholder='请输入用户手机号'></Input>
                </Form.Item>
            </Form>
        </Modal>
    );
}
