import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Layout, Menu } from "antd";
import {
  UserOutlined,
  CaretRightOutlined,
  CaretLeftOutlined,
  VideoCameraOutlined,
  LogoutOutlined
} from "@ant-design/icons";

import Cookies from "js-cookie";
import Routes from "../../Routes";

function Sidebar() {
  const { Header, Content, Sider } = Layout;
  const [collapsed, setCollapsed] = useState(false);

  const toggle = () => {
    setCollapsed(!collapsed);
  };
  const logout = () => {
    Cookies.remove("token");
    window.location.pathname = '/login'
  }
  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="logo">LOGO</div>
        <div className="sidebar-container">
          <Menu mode="inline" defaultSelectedKeys={["1"]}>
            <Menu.Item key="1" icon={<UserOutlined />}>
              <Link to="/home">Dashboard</Link>
            </Menu.Item>
            <Menu.Item key="2" icon={<VideoCameraOutlined />}>
              <Link to="/lead-management">Lead Management</Link>
            </Menu.Item>
          </Menu>
          {React.createElement(
            collapsed ? CaretRightOutlined : CaretLeftOutlined,
            {
              className: "sidebar-trigger",
              onClick: toggle
            }
          )}
        </div>
      </Sider>

      <Layout className="site-layout">
        <Header className="site-layout-background site-header">
          <span onClick={logout} className="link"><LogoutOutlined /> Logout</span>
          {/* <Link to="/login">Logout</Link> */}
        </Header>
        <Content
          className="site-layout-background"
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280
          }}
        >
          <Routes />
        </Content>
      </Layout>
    </Layout>
  );
}

export default Sidebar;
