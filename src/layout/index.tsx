import SideMenu from '@/components/menu';
import NavHeader from '@/components/nav_header';
import { Layout, theme, Watermark } from 'antd';
import React from 'react';

const { Header, Content, Footer, Sider } = Layout;

const App: React.FC = () => {
    const {
        token: { colorBgContainer, borderRadiusLG }
    } = theme.useToken();

    return (
        <Watermark content='hello'>
            <Layout>
                <Sider
                    breakpoint='lg'
                    collapsedWidth='0'
                    onBreakpoint={broken => {
                        console.log(broken);
                    }}
                    onCollapse={(collapsed, type) => {
                        console.log(collapsed, type);
                    }}
                >
                    <SideMenu />
                </Sider>
                <Layout>
                    <Header
                        style={{ padding: 0, background: colorBgContainer }}
                    >
                        <NavHeader />
                    </Header>
                    <Content style={{ margin: '24px 16px 0' }}>
                        <div
                            style={{
                                padding: 24,
                                minHeight: 360,
                                background: colorBgContainer,
                                borderRadius: borderRadiusLG
                            }}
                            id='content'
                        >
                            <span id='content-text'>content</span>
                        </div>
                    </Content>
                    <Footer style={{ textAlign: 'center' }}>
                        Ant Design ©{new Date().getFullYear()} Created by Ant
                        UED
                    </Footer>
                </Layout>
            </Layout>
        </Watermark>
    );
};

export default App;
