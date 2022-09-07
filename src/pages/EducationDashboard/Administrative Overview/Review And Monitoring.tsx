import React, { FC } from "react";
import { Card, Col, Layout, Row, Image, Button, Input } from "antd";
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
          <Col span={8} style={{ display: "flex" }}>
            {" "}
            <Input />{" "}
          </Col>
          <Col span={8} style={{ display: "flex" }}>
            <select className="forSelect" defaultValue={""}>
              <option value={""} selected>
                Quarter
              </option>
              <option onSelect={(e) => console.log(e)} value={"1"}>
                1
              </option>
              <option value={"1"}>2</option>
              <option value={"1"}>3</option>
              <option value={"1"}>4</option>
            </select>
          </Col>
        </Row>
        <Row>
          <Col span={24} style={{ display: "flex" }}>
            <QuestionWithIframe
              questionId={62}
              width="33%"
              height="200"
              nonDownloadable={true}
            />

            <QuestionWithIframe
              questionId={64}
              width="34%"
              height="200"
              nonDownloadable={true}
            />

            <QuestionWithIframe
              questionId={70}
              width="33%"
              height="200"
              nonDownloadable={true}
            />
          </Col>
        </Row>

        <Row>
          <Col span={24}>
            <QuestionWithIframe questionId={63} width="100%" height="1251" />
            <div className="navButtonSelected">
              <p style={{ lineHeight: "2.6" }}>District-wise DRM Compliance</p>
            </div>
          </Col>
          <Col span={24}>
            <QuestionWithIframe questionId={69} width="100%" height="1270" />
            <div className="navButtonSelected">
              <p style={{ lineHeight: "2.5" }}>District-wise BRM Compliance</p>
            </div>
          </Col>
          <Col span={24}>
            <QuestionWithIframe questionId={71} width="100%" height="1409" />
            <div className="navButtonSelected">
              <p style={{ lineHeight: "2.5" }}>District-wise CRM Compliance</p>
            </div>
          </Col>
        </Row>

        <Row>
          <Col span={24}>
            <QuestionWithIframe questionId={72} width="100%" height="808" />
            <div className="navButtonSelected">
              <p style={{ lineHeight: "2.5" }}>
                Month-wise Review Meeting Compliance
              </p>
            </div>
          </Col>
        </Row>
        <Row></Row>
        <Row>
          <Col span={12}>
            <QuestionWithIframe
              questionId={73}
              width="100%"
              height="200"
              nonDownloadable={true}
            />
          </Col>
          <Col span={12}>
            <QuestionWithIframe
              questionId={76}
              width="100%"
              height="200"
              nonDownloadable={true}
            />
          </Col>
        </Row>
        <Row>
          <Col span={24}>
            <QuestionWithIframe
              questionId={75}
              width="100%"
              height="1682"
              params={{ Quarter: [3] }}
            />
            <div className="navButtonSelected">
              <p style={{ lineHeight: "2.5" }}>District-wise BRCC Visits</p>
            </div>
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
