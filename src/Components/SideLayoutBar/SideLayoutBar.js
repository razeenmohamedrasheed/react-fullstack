import React, { useState } from 'react';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import { Button, Layout, Menu, theme } from 'antd';
import { Link, Outlet } from 'react-router-dom';
const { Header, Sider, Content } = Layout;

function SideLayoutBar() {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  const items =[
    {
      key: '0',
      icon: '',
      label: '',
    },
    {
      key: '1',
      icon: <UserOutlined />,
      label: 'Project 1',
      route:'/pages/todo1'
    },
    {
      key: '2',
      icon: <VideoCameraOutlined />,
      label: 'Project 2',
      route:'/pages/todo2'
    },

  ]

  return (
    <Layout>
    <Sider trigger={null} collapsible collapsed={collapsed} style={{height:'100vh'}}>
      <div className="demo-logo-vertical" />
      <Menu theme="dark" mode="inline"  defaultSelectedKeys={['1']}>
      {items.map((item) => (
                        <Menu.Item key={item.key} icon={item.icon} >
                            <Link to={item.route}>{item.label}</Link>
                        </Menu.Item>
                    ))}
       </Menu>
    </Sider>
    <Layout>
      <Header
        style={{
          padding: 0,
          background: colorBgContainer,
        }}
      >
        <Button
          type="text"
          icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
          onClick={() => setCollapsed(!collapsed)}
          style={{
            fontSize: '16px',
            width: 64,
            height: 64,
          }}
        />
      </Header>
      <Content
        style={{
          margin: '24px 16px',
          padding: 24,
          background: colorBgContainer,
          borderRadius: borderRadiusLG,
        }}
      >
        ,<Outlet/>
      </Content>
    </Layout>
  </Layout>
  )
}

export default SideLayoutBar