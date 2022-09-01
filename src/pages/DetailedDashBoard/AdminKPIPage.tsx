import React, { FC } from "react";
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

import Enrolment from "../../assets/Enrolment.svg";
import StudentAttendance from "../../assets/StudentAttendance.svg";
import SchoolMonitoringVisits from "../../assets/SchoolMonitoringVisits.svg";
import Infrastructure from "../../assets/Infrastructure.svg";
import ReviewMeetingScorecards from "../../assets/ReviewMeetingScorecards.svg";
import FooterRightLogo from "../../assets/footer_Samarth_Himachal_logo.png";
import Login_Img from "../../assets/Login_Img.png";
import Side_Img from "../../assets/image 135.png";
import { useHistory } from "react-router-dom";

const AdminKPIPage: FC = () => {
  const history = useHistory();
  const goBack = () => {
    history.push("/detailed-dashboard");
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
                  <b className="headingb">Administrative KPIs</b>
                </div>
                <div style={{display:'flex',flexDirection:'column'}}>
                <Button className="DetailsButton" onClick={() => {window.location.href='https://samarthhp-metabase.in/public/dashboard/e08ae997-520a-42a7-99e8-96a9483546e7'}}>
                   <Row style={{display:'flex'}}>
                    <Col span={3}><img
                      src={Enrolment}
                      alt=""
                    /></Col>
                    <Col offset={6}>Enrolment</Col>
                    </Row>
                </Button>
                <Button className="DetailsButton" onClick={() => {window.location.href='https://samarthhp-metabase.in/public/dashboard/7310f340-ba25-44ed-a59f-59400bda2a11?date=2022-08-04'}}>
                   <Row style={{display:'flex'}}>
                    <Col span={3}><img
                      src={StudentAttendance}
                      alt=""
                    /></Col>
                    <Col offset={3}>Student Attendance</Col>
                    </Row>
                </Button>
                <Button className="DetailsButton" onClick={() => {window.location.href='https://samarthhp-metabase.in/public/dashboard/ccbc316f-e5be-4e95-985d-744511d40884'}}>
                  <Row style={{display:'flex'}}>
                    <Col span={3}><img
                      src={SchoolMonitoringVisits}
                      alt=""
                    /></Col>
                    <Col offset={2}>School Monitoring Visits</Col>
                    </Row>
                </Button>
                <Button className="DetailsButton" onClick={() => {window.location.href='https://samarthhp-metabase.in/public/dashboard/81073842-f423-4a7f-b473-93d89ded0e45'}}>
                   <Row style={{display:'flex'}}>
                    <Col span={3}><img
                      src={ReviewMeetingScorecards}
                      alt=""
                    /></Col>
                    <Col offset={4}>Review Meetings</Col>
                    </Row>
                </Button>
                </div>
                {/*<Button className="DetailsButton">
                   <Row style={{display:'flex'}}>
                    <Col span={3}><img
                      src={Infrastructure}
                      alt=""
                    /></Col>
                    <Col offset={6}>Infrastructure</Col>
                    </Row>
                </Button>*/}
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
export default AdminKPIPage;
