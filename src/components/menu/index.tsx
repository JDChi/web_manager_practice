import {
    AppstoreOutlined,
    DesktopOutlined,
    MenuOutlined,
    SettingOutlined,
    TeamOutlined,
    UserOutlined
} from '@ant-design/icons';
import { Menu } from 'antd';
import { ItemType, MenuItemType } from 'antd/es/menu/interface';
import { useNavigate } from 'react-router-dom';
import style from './index.module.less';

const SideMenu = () => {
    const items: ItemType<MenuItemType>[] = [
        {
            label: '工作台',
            key: '1',
            icon: <DesktopOutlined />
        },
        {
            label: '系统管理',
            key: '2',
            icon: <SettingOutlined />,
            children: [
                {
                    label: '用户管理',
                    key: '2-1',
                    icon: <TeamOutlined />
                },
                {
                    label: '菜单管理',
                    key: '2-2',
                    icon: <MenuOutlined />
                },
                {
                    label: '角色管理',
                    key: '2-3',
                    icon: <UserOutlined />
                }
            ]
        },
        {
            label: '订单管理',
            key: '3',
            icon: <AppstoreOutlined />,
            children: [
                {
                    label: '用户管理',
                    key: '3-1',
                    icon: <TeamOutlined />
                },
                {
                    label: '菜单管理',
                    key: '3-2',
                    icon: <TeamOutlined />
                },
                {
                    label: '角色管理',
                    key: '3-3',
                    icon: <TeamOutlined />
                }
            ]
        }
    ];

    const nav = useNavigate();
    function handleClickTitle(): void {
        nav('/welcome');
    }

    return (
        <div>
            <div className={style.menuTitle} onClick={handleClickTitle}>
                <span>管理后台</span>
            </div>
            <Menu
                defaultSelectedKeys={['1']}
                mode='inline'
                theme='dark'
                items={items}
            />
        </div>
    );
};

export default SideMenu;
