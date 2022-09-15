import React, { FC, useEffect, useState } from "react";
import { Button, Col, Layout, Row, Input, Divider, Image, Spin } from "antd";
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
import API_SERVICE from "../../services/api-service";
import { useHistory } from "react-router-dom";

const Login: FC = () => {
  const history = useHistory();
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [loader, setLoader] = useState(false);

  const handleLogin = async () => {
    setLoader(true);
    const params = {
      // loginId: "chaks",
      // password: "1234abcd",
      loginId: userName,
      password: password,
    };
    const res = await API_SERVICE.Login(params);
    const { user, refreshToken, token } = res?.data?.result?.data?.user;

    localStorage.setItem("user", JSON.stringify(user));

    sessionStorage.setItem(
      "user",
      JSON.stringify({
        refreshToken,
        token,
      })
    );
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker.ready.then((registration) => {
        console.log(`A service worker is active.....: ${registration.active}`);
        // history.push("");
        window.location.href = "/";
      });
    } else {
      console.error("Service workers are not supported.");
    }
    return <Spin style={{ height: "100rem", width: "500px" }} />;
  };

  return (
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
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                    prefix={<UserOutlined className="icon" />}
                  />
                  <Input.Password
                    className="input"
                    placeholder="password"
                    prefix={<LockOutlined className="icon" />}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    iconRender={(visible) =>
                      visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                    }
                  />
                  <Button
                    onClick={handleLogin}
                    className="button"
                    size="large"
                    type="primary"
                    block
                  >
                    Click to Login
                  </Button>
                  {loader && (
                    <div style={{ textAlign: "center" }}>
                      <Spin />
                    </div>
                  )}
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
};

export default Login;
