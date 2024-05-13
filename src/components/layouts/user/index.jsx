import { Fragment, useEffect, useState } from "react";
import { NavLink, Outlet, useLocation } from "react-router-dom";

import { Layout, Menu } from "antd";

import {
  CalendarOutlined,
  DashboardOutlined,
  DesktopOutlined,
  PicLeftOutlined,
} from "@ant-design/icons";

import useScreenSize from "./../../../utils/useScreen";

import "./style.scss";

const { Header, Content, Footer, Sider } = Layout;
function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}

const items = [
  getItem(
    <NavLink to="/dashboard">Dashboard</NavLink>,
    "/dashboard",
    <DashboardOutlined />
  ),
  getItem(<NavLink to="/rsa">RSA</NavLink>, "/rsa", <DesktopOutlined />),
  getItem(
    <NavLink to="/rsa-deshifr">RSA deshifr</NavLink>,
    "/rsa-deshifr",
    <PicLeftOutlined />
  ),
  getItem(
    <NavLink to="/rsa-rasshifirovka">RSA RasShifirovka</NavLink>,
    "/rsa-rasshifirovka",
    <CalendarOutlined />
  ),
];

const UserLayout = () => {
  const location = useLocation();
  const screen = useScreenSize();
  const [collapsed, setCollapsed] = useState(false);

  useEffect(() => {
    if (screen < 550) {
      setCollapsed(true);
    } else {
      setCollapsed(false);
    }
  }, [screen]);

  return (
    <Fragment>
      <Layout
        style={{
          minHeight: "100vh",
        }}
      >
        <Sider
          collapsible
          collapsed={collapsed}
          onCollapse={(value) => setCollapsed(value)}
        >
          <div className="demo-logo-vertical">
            {!collapsed ? <h1>731-22 Group</h1> : <h1>731</h1>}
          </div>
          <Menu
            theme="dark"
            defaultSelectedKeys={[location.pathname]}
            mode="inline"
            items={items}
          />
        </Sider>
        <Layout>
          <Header
            style={{
              padding: 0,
              background: "#001529",
              margin: "0 10px",
              marginBottom: "10px",
              borderRadius: "10px",
            }}
          >
            <h1></h1>
          </Header>
          <Content
            style={{
              margin: "0 16px",
              background: "linear-gradient(#2E9AFF, #001529,  #F498AD)",
              borderRadius: "10px",
            }}
          >
            <div
              style={{
                padding: 12,
              }}
            >
              <Outlet />
            </div>
          </Content>
          <Footer
            style={{
              textAlign: "center",
              color: "white",
              background: "#001529",
              marginTop: "10px",
              marginLeft: "10px",
              marginRight: "10px",
              borderRadius: "10px",
            }}
          >
            TUIT ©2023 maked by Juniors Group
          </Footer>
        </Layout>
      </Layout>
    </Fragment>
  );
};

export default UserLayout;
