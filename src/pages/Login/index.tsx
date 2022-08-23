import React, { FC } from "react";
import { Button, Col, Layout, Row, Input, Divider, Image } from "antd";
import {
  UserOutlined,
  LockOutlined,
  EyeInvisibleOutlined,
  EyeTwoTone,
} from "@ant-design/icons";
import "./login.css";
import { Content } from "antd/es/layout/layout";

import FooterLogo from "../../assets/footer_logo.png";
import FooterRightLogo from "../../assets/footer_Samarth_Himachal_logo.png";
import Login_Img from "../../assets/Login_Img.png";
import Side_Img from "../../assets/image 135.png";

const Login: FC = () => (
  <Layout className={"layout-wrapper home-wrapper"}>
    <Content style={{ backgroundColor: "#FFFFFF" }}>
      <Row>
        {/*@ts-ignore*/}
        <Col span={14} style={{ height: "90vh" }}>
          {/* <div style={{ display: "flex", height: "fit-content" }}> */}
          <img
            src={Login_Img}
            height="100%"
            width="100%"
            // style={{ display: "flex" }}
          ></img>
          <img
            src={Side_Img}
            style={{ marginLeft: "-25%" }}
            height="100%"
            width="25%"
          ></img>
          {/* </div> */}
        </Col>
        <Col span={10}>
          <Row
            className={"middle"}
            style={{
              justifyContent: "center",
              height: "100%",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <Col>
              <div className="title">
                <b>LOGIN</b>
                <Divider className="divider" type="vertical" />
                लॉगिन
              </div>
              <div className="form-container">
                <Input
                  className="input"
                  size="large"
                  placeholder="dhe_office"
                  prefix={<UserOutlined className="icon" />}
                />
                <Input.Password
                  className="input"
                  placeholder="password"
                  prefix={<LockOutlined className="icon" />}
                  iconRender={(visible) =>
                    visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                  }
                />
                <Button className="button" size="large" type="primary" block>
                  Click to Login
                </Button>
                <div style={{ display: "flex" }}>
                  <Button type="link" className="link">
                    Forgot Password
                  </Button>
                  <Button type="link" className="link">
                    <u>Click Here to Reset Password</u>
                  </Button>
                </div>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </Content>
    {/* <Row align="middle" justify="space-between" className="footer">
          <Image src={FooterLogo} height={"50px"} />
          <Image src={FooterRightLogo} height={"50px"} />
        </Row> */}
  </Layout>
);

export default Login;
