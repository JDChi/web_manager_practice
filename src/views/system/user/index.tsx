import { Button, Form, Input, Select, Space, Table } from 'antd';
import FormItem from 'antd/es/form/FormItem';
import CreateUser from './create_user';

export default function UserList() {
    const dataSource = [
        {
            key: '1',
            name: 'Mike',
            age: 32,
            address: '10 Downing Street'
        },
        {
            key: '2',
            name: 'John',
            age: 42,
            address: '10 Downing Street'
        }
    ];

    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name'
        },
        {
            title: 'Age',
            dataIndex: 'age',
            key: 'age'
        },
        {
            title: 'Address',
            dataIndex: 'address',
            key: 'address'
        },
        {
            title: 'Operation',
            dataIndex: 'operation',
            key: 'operation',
            render() {
                return (
                    <Space>
                        <Button type='text'>Edit</Button>
                        <Button type='text' danger>
                            Delete
                        </Button>
                    </Space>
                );
            }
        }
    ];

    return (
        <div className='userList'>
            <Form className='search-form' layout='inline'>
                <FormItem name='userId' label='用户id'>
                    <Input />
                </FormItem>
                <FormItem name='userName' label='用户名称'>
                    <Input />
                </FormItem>
                <FormItem name='state' label='状态'>
                    <Select defaultValue='所有' style={{ width: 120 }}>
                        <Select.Option value={0}>所有</Select.Option>
                        <Select.Option value={1}>在职</Select.Option>
                        <Select.Option value={2}>试用期</Select.Option>
                        <Select.Option value={3}>离职</Select.Option>
                    </Select>
                </FormItem>
            </Form>
            <div className='base-table'>
                <div className='header-wrapper'>
                    <div className='title'>用户列表</div>
                    <div className='action'>
                        <Button type='primary'>新增</Button>
                        <Button type='primary' danger>
                            批量删除
                        </Button>
                    </div>
                </div>
                <CreateUser />
                <Table dataSource={dataSource} columns={columns}></Table>
            </div>
        </div>
    );
}
