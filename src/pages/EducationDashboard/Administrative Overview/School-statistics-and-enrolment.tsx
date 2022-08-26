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

const SchoolStatisticsAndEnrolment: FC = () => (
  <Layout>
    <Content>
      <Row>
        <Col span={24}>
          <Row>
            <Col span={12}>
              <iframe
                src="http://167.71.234.32:3000/public/question/5b7445a3-7080-4809-a155-1f80c8ec11d5"
                frameBorder="0"
                width="100%"
                height="300"
                allowTransparency
              ></iframe>
              <div className="Districtwice">
                District wise students practising atleast twice a month
              </div>
            </Col>
            <Col span={12}>
              <iframe
                src="http://167.71.234.32:3000/public/question/a5f088e7-ab7f-4597-90ed-f08601603341"
                frameBorder="0"
                width="100%"
                height="300"
                allowTransparency
              ></iframe>
              <div className="Districtwice">
                District wise students practising atleast twice a month
              </div>
            </Col>
          </Row>
          <Row>
            <Col span={12}>
              <iframe
                src="http://167.71.234.32:3000/public/question/d3262f4f-6ff9-445d-8ad6-8011031b4f9d"
                frameBorder="0"
                width="100%"
                height="300"
                allowTransparency
              ></iframe>
              <div className="Districtwice">
                District wise students practising atleast twice a month
              </div>
            </Col>
            <Col span={12}>
              <iframe
                src="http://167.71.234.32:3000/public/question/405d95a9-16c0-4a92-bbcf-3d3f41e1752e"
                frameBorder="0"
                width="100%"
                height="300"
                allowTransparency
              ></iframe>
              <div className="Districtwice">
                District wise students practising atleast twice a month
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
      {/* <Row>
        <Col span={24}>
          <iframe
            src="http://167.71.234.32:3000/public/dashboard/3fad5d69-c0ae-4b85-b500-52640bbc69b9"
            frameBorder="0"
            width="100%"
            height="2000"
            allowTransparency
          ></iframe>
          <div className="Districtwice">
            District wise students practising atleast twice a month
          </div>
        </Col>
      </Row> */}
    </Content>
  </Layout>
);

export default SchoolStatisticsAndEnrolment;
