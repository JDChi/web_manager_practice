import { MenuFoldOutlined } from '@ant-design/icons';
import { Breadcrumb, Dropdown, MenuProps, Switch } from 'antd';
import style from './index.module.less';

const NavHeader = () => {
    const breadList = [
        {
            title: '首页'
        },
        {
            title: '工作台'
        }
    ];

    const items: MenuProps['items'] = [
        {
            key: '1',
            label: '邮箱: jdchi@163.com'
        },
        {
            key: '2',
            label: '退出'
        }
    ];

    return (
        <div className={style.navHeader}>
            <div className={style.left}>
                <MenuFoldOutlined />
                <Breadcrumb style={{ marginLeft: '10px' }} items={breadList} />
            </div>
            <div className={style.right}>
                <Switch
                    checkedChildren='暗黑'
                    unCheckedChildren='默认'
                    style={{ marginRight: '10px' }}
                />
                <Dropdown menu={{ items }} trigger={['click']}>
                    <span className={style.nickname}>JDChi</span>
                </Dropdown>
            </div>
        </div>
    );
};

export default NavHeader;
