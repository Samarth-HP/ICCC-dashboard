import React, { FC } from "react";
import { Card, Col, Layout, Row, Image, Button } from "antd";
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

const ReviewAndMonitoring: FC = () => (
  <Layout>
    <Content>
      <Col span={24}>
        <Row>
          <Col span={24}>
            <div className="NIPUNheading">Review and Monitoring</div>
          </Col>
        </Row>
        <Row>
          <Col span={24} style={{ display: "flex" }}>
            <iframe
              src="http://167.71.234.32:3000/public/question/0630ad97-a64c-48d4-9322-2979ff344f27"
              frameBorder="0"
              width="33%"
              height="200"
              allowTransparency
            ></iframe>
            <iframe
              src="http://167.71.234.32:3000/public/question/ba53c81c-c5ae-49f7-bde9-967084114d89"
              frameBorder="0"
              width="33%"
              height="200"
              allowTransparency
            ></iframe>
            <iframe
              src="http://167.71.234.32:3000/public/question/8b641d97-2137-4b5a-9325-8f70185606fa"
              frameBorder="0"
              width="33%"
              height="200"
              allowTransparency
            ></iframe>
          </Col>
        </Row>
        
        <Row>
          <Col span={24} style={{ display: "flex" }}>
            <iframe
              src="http://167.71.234.32:3000/public/question/2b682cd1-db71-4fba-95c8-ebee2351a2a4"
              frameBorder="0"
              width="50%"
              height="400"
              allowTransparency
              ></iframe>
                <iframe
              src="http://167.71.234.32:3000/public/question/d764205f-8c67-4611-87d8-095608392a61"
              frameBorder="0"
              width="50%"
              height="400"
              allowTransparency
              ></iframe>
          </Col>
          <Col span={24}>
            <iframe
              src="http://167.71.234.32:3000/public/question/0688da0c-ce09-4fd1-81c9-51bf14811e1a"
              frameBorder="0"
              width="100%"
              height="400"
              allowTransparency
            ></iframe>
          </Col>
     
        </Row>
        <Row>
          <Col span={24}>
            <iframe
              src="http://167.71.234.32:3000/public/question/e1d61bf9-b2c5-4437-9df5-3311a9501758"
              frameBorder="0"
              width="100%"
              height="400"
              allowTransparency
            ></iframe>
          </Col>
        </Row>
        <Row>
          <Col span={24}>
            <Button className="navButtonSelected">
              Month-wise Review Meeting Compliance
            </Button>
          </Col>
        </Row>
        <Row>
          <Col span={12}>
            <iframe
              src="http://167.71.234.32:3000/public/question/99c4a5f0-134f-40fd-9f0c-baf594095579"
              frameBorder="0"
              width="100%"
              height="200"
              allowTransparency
            ></iframe>
          </Col>
          <Col span={12}>
            <iframe
              src="http://167.71.234.32:3000/public/question/d13982ac-3e11-4a93-84d6-590f21bae135"
              frameBorder="0"
              width="100%"
              height="200"
              allowTransparency
            ></iframe>
          </Col>
        </Row>
        <Row>
          <Col span={24}>
            <iframe
              src="http://167.71.234.32:3000/public/question/da660fbb-ca75-49c5-bbe0-5f15a035a094"
              frameBorder="0"
              width="100%"
              height="428"
              allowTransparency
            ></iframe>
          </Col>
          <Col span={24}>
            <iframe
              src="http://167.71.234.32:3000/public/question/ffe6c4f2-1436-432f-9f92-fceaa44b1af2"
              frameBorder="0"
              width="100%"
              height="428"
              allowTransparency
            ></iframe>
          </Col>
        </Row>
      </Col>
    </Content>
  </Layout>
);

const NavItem: FC = (props: any) => {
  return (
    <div
      style={{
        margin: 24,
      }}
    >
      {/*@ts-ignore*/}
      <Col align="middle">
        <img alt={"broken"} src={props.thumbnail} className="thumbnail-large" />

        <Title level={4}>
          {props.titleEN}
          <div className="subtitle">{props.titleHI}</div>
        </Title>
      </Col>
    </div>
  );
};

const Tile: FC = (props: any) => {
  return (
    <Card hoverable bordered className="tile">
      {/*@ts-ignore*/}
      <Col align="middle">
        <img alt={"broken"} src={props.thumbnail} className="tile-logo" />
        <Title
          level={5}
          className="title"
          style={{
            marginBottom: -12,
          }}
        >
          {props.titleEN}
          <div className="subtitle">{props.titleHI}</div>
        </Title>
      </Col>
    </Card>
  );
};

export default ReviewAndMonitoring;
