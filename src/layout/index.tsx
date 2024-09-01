import SideMenu from '@/components/menu';
import NavHeader from '@/components/nav_header';
import { Layout, Watermark } from 'antd';
import React from 'react';
import { Outlet } from 'react-router-dom';
import style from './index.module.less';

const { Content, Footer, Sider } = Layout;

const App: React.FC = () => {
    return (
        <Watermark content='hello'>
            <Layout>
                <Sider>
                    <SideMenu />
                </Sider>
                <Layout>
                    <NavHeader />
                    <Content className={style.content}>
                        <div className={style.wrapper}>
                            <Outlet />
                        </div>

                        <Footer style={{ textAlign: 'center' }}>
                            Ant Design ©{new Date().getFullYear()} Created by
                            Ant UED
                        </Footer>
                    </Content>
                </Layout>
            </Layout>
        </Watermark>
    );
};

export default App;
