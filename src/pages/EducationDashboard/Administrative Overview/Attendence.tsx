import React, { FC } from "react";
import { Card, Col, Layout, Row, Image } from "antd";
import "./index.css";
import { Content } from "antd/es/layout/layout";
import Title from "antd/es/typography/Title";
import schools from "../../assets/schools.png";
import statistics from "../../assets/thumb_stats.png";
import performance from "../../assets/thumb_performance.png";
import enrollment from "../../assets/thumb_enrollment.png";
import attendance from "../../assets/thumb_attendance.png";
import learning from "../../assets/thumb_learning.png";
import assessments from "../../assets/thumb_assessments.png";

import FooterLogo from "../../assets/footer_logo.png";
import FooterRightLogo from "../../assets/footer_Samarth_Himachal_logo.png";

import { ArrowRightOutlined } from "@ant-design/icons";
import "./index.css";
import { NavLink } from "react-router-dom";

import students from "../../assets/students.png";
import teachers from "../../assets/teachers.png";

import { Button } from "antd/lib/radio";

const sample_data = {
  schools: {
    GPS: 10601,
    GMS: 1947,
    GHS: 932,
    GSSS: 1868,
  },
};

const Attendence: FC = () => (
  <Layout>
    <Content>
      <Col span={24}>
        <Row>
          <Col span={24}>
            <div className="NIPUNheading">Attendance</div>
          </Col>
        </Row>
        <Row>
          <Col span={24} style={{ display: "flex" }}>
            <iframe
              src="http://167.71.234.32:3000/public/question/619e56ff-1773-4bfc-a7cf-61e3e5af277b"
              frameBorder="0"
              width="50%"
              height="200"
              allowTransparency
            ></iframe>
            <iframe
              src="http://167.71.234.32:3000/public/question/433c038e-fc79-422c-9a1a-d350ba08799e"
              frameBorder="0"
              width="50%"
              height="200"
              allowTransparency
            ></iframe>
          </Col>
          {/* <Col span={24} style={{ display: "flex" }}>
            <iframe
              src="http://167.71.234.32:3000/public/question/52fa4f11-2197-4306-8107-5e3716ee9d49"
              frameBorder="0"
              width="50%"
              height="180"
              allowTransparency
            ></iframe>
            <iframe
              src="http://167.71.234.32:3000/public/question/7ce3d9ca-bc8e-4eff-a962-f9fb50c02f93"
              frameBorder="0"
              width="50%"
              height="180"
              allowTransparency
            ></iframe>
          </Col> */}
        </Row>
        <Row>
          <Col span={24}>
            <iframe
              src="http://167.71.234.32:3000/public/question/48a0c31c-efe0-4f78-800a-6accc9948d09"
              frameBorder="0"
              width="100%"
              height="580"
              allowTransparency
            ></iframe>
          </Col>
          <Button className="navButtonSelected">
            District wise Average Monthly Attendance
          </Button>
          <Col span={24}>
            <iframe
              src="http://167.71.234.32:3000/public/question/3d6db0e4-4923-4a94-8e21-de2b769059a9"
              frameBorder="0"
              width="100%"
              height="600"
              allowTransparency
            ></iframe>
          </Col>
          <Button className="navButtonSelected">
            Percentage Schools Recording Attendance on e-Samwad
          </Button>
        </Row>
        <Row>
          <Col span={24}>
            <iframe
              src="http://167.71.234.32:3000/public/question/99432b69-51c2-43b6-a2c6-f3b7d7b7f419"
              frameBorder="0"
              width="100%"
              height="580"
              allowTransparency
            ></iframe>
          </Col>
          <Col span={24}>
            <Button className="navButtonSelected">
              Month wise Average Student Attendance and Compliance
            </Button>
          </Col>
          <Col span={24}>
            <iframe
              src="http://167.71.234.32:3000/public/question/b806cfd2-d04a-4bdd-9220-04503fbcbd86"
              frameBorder="0"
              width="100%"
              height="400"
              allowTransparency
            ></iframe>
          </Col>
          <Col span={24}>
            <Button className="navButtonSelected">
              Daily Average Student Attendance and Compliance
            </Button>
          </Col>
        </Row>
      </Col>
    </Content>
  </Layout>
);

export default Attendence;
