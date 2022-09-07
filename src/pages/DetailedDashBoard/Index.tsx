import React, { FC } from "react";
import { useHistory } from "react-router-dom";
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

import AdministrativeKPI from "../../assets/AdministrativeKPI.svg";
import ReviewMeetingScorecards from "../../assets/ReviewMeetingScorecards.svg";
import AcademicKPI from "../../assets/AcademicKPI.svg";
import Login_Img from "../../assets/Login_Img.png";
import Side_Img from "../../assets/image 135.png";

const DetailedDashboard: FC = () => {
  const history = useHistory();
  const goBack = () => {
    history.push("/");
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
                // alignItems: "center",
                flexDirection: "column",
                // display:'table-caption'
              }}
            >
              <Col>
                <div className="goBackArrow2">
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
                  <b
                    onClick={() => {
                      history.push("/");
                    }}
                    className="headingb"
                  >
                    View Detailed Dashboards
                  </b>
                </div>
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <Button className="DetailsButton">
                    <Row
                      onClick={() => {
                        history.push("/detailed-academic");
                      }}
                      style={{ display: "flex" }}
                    >
                      <Col span={3}>
                        <img src={AcademicKPI} alt="" />
                      </Col>
                      <Col className="responsiveHeader" offset={4}>
                        Academic KPIs
                      </Col>
                    </Row>
                  </Button>
                  <Button className="DetailsButton">
                    <Row
                      onClick={() => {
                        history.push("/detailed-administrative");
                      }}
                      style={{ display: "flex" }}
                    >
                      <Col span={3}>
                        <img src={AdministrativeKPI} alt="" />
                      </Col>
                      <Col className="responsiveHeader" offset={3}>
                        {" "}
                        Administrative KPIs
                      </Col>
                    </Row>
                  </Button>
                  <Button className="DetailsButton">
                    {/*<Row onClick={()=>{history.push('/administrative-kpis/review-meetings')}} style={{display:'flex'}}>*/}
                    <Row
                      onClick={() =>
                        history.push("/link/ReviewMeetingsScorecards")
                      }
                      style={{ display: "flex" }}
                    >
                      <Col span={3}>
                        <img src={ReviewMeetingScorecards} alt="" />
                      </Col>
                      <Col className="responsiveHeader" offset={1}>
                        Review Meeting Scorecards
                      </Col>
                    </Row>
                  </Button>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Content>
    </Layout>
  );
};

export default DetailedDashboard;
