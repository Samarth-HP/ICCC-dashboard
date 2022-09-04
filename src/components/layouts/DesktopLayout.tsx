import React from "react";
import { Layout, Menu } from "antd";
import "./index.less";
import { Route, Switch } from "react-router-dom";
import Sider from "antd/es/layout/Sider";
import { Content } from "antd/es/layout/layout";
import DownloadPage from "../../pages/Download";

// @ts-ignore
const DesktopLayout = () => {
  const handleClick = (e: any) => {
    // console.log('click ', e);
  };

  return (
    <Layout className={"layout-wrapper"}>
      <Sider width={250} theme={"light"}>
        <Menu
          onClick={handleClick}
          style={{ width: 250 }}
          defaultSelectedKeys={["/"]}
          mode="inline"
        >
          <Menu.Item key="/">Home</Menu.Item>
          <Menu.Item key="/download">Download</Menu.Item>
        </Menu>
      </Sider>
      <Content>
        <Switch>
          <Route path="/download" exact component={DownloadPage} />
        </Switch>
      </Content>
    </Layout>
  );
};

export default DesktopLayout;
