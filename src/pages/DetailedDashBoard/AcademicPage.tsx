import React, { FC, useState } from "react";
import { Button, Col, Layout, Row, Input, Divider, Image } from "antd";
import {
  UserOutlined,
  LockOutlined,
  EyeInvisibleOutlined,
  EyeTwoTone,
  ArrowLeftOutlined,
} from "@ant-design/icons";
import "./index.css";
import { Content } from "antd/es/layout/layout";

import Classroom from "../../assets/ClassroomInputs.svg";
import Mentoring from "../../assets/Mentoring.svg";
import TeacherTraining from "../../assets/TeacherTraining.svg";
import TeacherPerformance from "../../assets/TeacherPerformance.svg";
import StudentLearning from "../../assets/StudentLearning.svg";
import FooterRightLogo from "../../assets/footer_Samarth_Himachal_logo.png";
import Login_Img from "../../assets/Login_Img.png";
import IframeLink from "./FrameLink";
import Side_Img from "../../assets/image 135.png";
import { useHistory } from "react-router-dom";

const AcademicPage: FC = () => {
  const history = useHistory();
  const goBack = () => {
    history.push("/detailed-dashboard");
  };
  const [showLink, setShowLink] = useState(0);
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
                // alignItems: "center",
                flexDirection: "column",
              }}
            >
              <Col>
                <div className="goBackArrow">
                  <ArrowLeftOutlined
                    onClick={goBack}
                    style={{
                      fontSize: "13px",
                      marginTop: "4px",
                      cursor: "pointer",
                    }}
                  />
                  <span
                    onClick={goBack}
                    style={{
                      fontSize: "22px",
                      textDecoration: "underline",
                      fontWeight: "bold",
                      cursor: "pointer",
                      marginLeft: "8px",
                    }}
                  >
                    {" "}
                    Go Back
                  </span>
                </div>
                <div className="title">
                  <b className="headingb">Academic KPIs</b>
                </div>

                <Button className="DetailsButton">
                  <Row style={{ display: "flex" }}>
                    <Col span={3}>
                      <img src={Classroom} alt="" />
                    </Col>
                    <Col offset={3}>Classroom Inputs</Col>
                  </Row>
                </Button>

                <div style={{ display: "flex", flexDirection: "column" }}>
                  <Button
                    className="DetailsButton"
                    onClick={() => history.push("/link/mentoring")}
                  >
                    <Row style={{ display: "flex" }}>
                      <Col span={3}>
                        <img src={Mentoring} alt="" />
                      </Col>
                      <Col className="responsiveHeader" offset={6}>
                        Mentoring
                      </Col>
                    </Row>
                  </Button>

                  <Button
                    className="DetailsButton"
                    onClick={() => history.push("/link/teacherTraining")}
                  >
                    <Row style={{ display: "flex" }}>
                      <Col span={3}>
                        <img src={TeacherTraining} alt="" />
                      </Col>
                      <Col className="responsiveHeader" offset={4}>
                        Teacher Training
                      </Col>
                    </Row>
                  </Button>
                </div>
                <Button className="DetailsButton">
                  <Row style={{ display: "flex" }}>
                    <Col span={3}>
                      <img src={TeacherPerformance} alt="" />
                    </Col>
                    <Col offset={3}>Teacher Performance</Col>
                  </Row>
                </Button>
                <Button className="DetailsButton">
                  <Row style={{ display: "flex" }}>
                    <Col span={3}>
                      <img src={StudentLearning} alt="" />
                    </Col>
                    <Col offset={4}>Student Learning</Col>
                  </Row>
                </Button>
                {/* <div className="form-container">
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
              </div> */}
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
export default AcademicPage;
