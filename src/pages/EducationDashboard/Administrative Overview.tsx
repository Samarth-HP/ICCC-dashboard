import React, { FC, useState } from "react";
import { Card, Col, Layout, Row, Divider, Image, Select } from "antd";
import { ArrowRightOutlined } from "@ant-design/icons";
import "./index.css";
import { Content } from "antd/es/layout/layout";
import Title from "antd/es/typography/Title";
import { NavLink } from "react-router-dom";

import schools from "../../assets/schools.png";
import students from "../../assets/students.png";
import teachers from "../../assets/teachers.png";

import FooterLogo from "../../assets/footer_logo.png";
import FooterRightLogo from "../../assets/footer_Samarth_Himachal_logo.png";
import { Button } from "antd/lib/radio";
import MapComponent from "../../components/MapComponent/MapComponent.jsx";
import Attendence from "./Administrative Overview/Attendence";
import ReviewAndMonitoring from "./Administrative Overview/Review And Monitoring";
import SchoolStatisticsAndEnrolment from "./Administrative Overview/School-statistics-and-enrolment";

const sample_data = {
  schools: {
    GPS: 10601,
    GMS: 1947,
    GHS: 932,
    GSSS: 1868,
  },
};

const AdministrativeOverview: FC = (props: any) => {
  const [selectedButton, setSelectedButton] = useState(1);
  const [marker, setMarker] = useState("Districts");
  const onButtonClick = (id: any) => {
    // console.log(id);
    setSelectedButton(id);
  };
  const onSetMarker = (id: any) => {
    // console.log(id);
    setMarker(id);
  };
  return (
    <Layout
      className={"layout-wrapper home-wrapper"}
      style={{ display: props.active ? "block" : "none" }}
    >
      <Content style={{ padding: "10px" }}>
        <Row>
          <Col span={10}>
            <SchoolStatisticsAndEnrolment
              //@ts-ignore
              markerData={props.markerData}
              getMarkerData={props.getMarkerData}
              active={props.active}
           
            />
          </Col>
          <Col span={8}>
            <Attendence></Attendence>
          </Col>
          <Col span={6}>
            <ReviewAndMonitoring />
          </Col>
        </Row>
      </Content>
    </Layout>
  );
};

export default AdministrativeOverview;
