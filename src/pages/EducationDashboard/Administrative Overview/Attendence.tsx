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
import QuestionWithIframe from "../../../components/QuestionWIthIframe";

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
            <QuestionWithIframe questionId={55} width="50%" height="200"/>
            <QuestionWithIframe questionId={57} width="50%" height="200" />
          </Col>
        </Row>
        <Row>
          <Col span={24}>
            <QuestionWithIframe questionId={56} width="100%" height="580" />
          </Col>
          <Button className="navButtonSelected">
            District wise Average Monthly Attendance
          </Button>
          <Col span={24}>
            <QuestionWithIframe questionId={58} width="100%" height="600" />
          </Col>
          <Button className="navButtonSelected">
            Percentage Schools Recording Attendance on e-Samwad
          </Button>
        </Row>
        <Row>
          <Col span={24}>
            <QuestionWithIframe questionId={59} width="100%" height="580" />
          </Col>
          <Col span={24}>
            <Button className="navButtonSelected">
              Month wise Average Student Attendance and Compliance
            </Button>
          </Col>
          <Col span={24}>
            <QuestionWithIframe questionId={60} width="100%" height="400" />
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
