import React, { FC, useState } from "react";
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

const ReviewAndMonitoring: FC = () => {
  const [selectedMonth, setSelectedMonth] = useState({ month: "" });
  const [selectedQuarter, setSelectedQuarter] = useState({ Quarter: [3] });
  const [ml, setMl] = useState([
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ]);
  const [loadCount, setLoadCount] = useState(0);
  const handleSetLoad = () => {
    // setLoadCount(loadCount + 1);
    setLoadCount((prev: any) => {
      return ++prev;
    });
  };
  return (
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
                handleLoadCounter={handleSetLoad}
                questionId={62}
                width="33%"
                height="200"
                nonDownloadable={true}
              />

              {loadCount > 0 && (
                <QuestionWithIframe
                  handleLoadCounter={handleSetLoad}
                  questionId={64}
                  width="34%"
                  height="200"
                  nonDownloadable={true}
                />
              )}

              {loadCount > 1 && (
                <QuestionWithIframe
                  handleLoadCounter={handleSetLoad}
                  questionId={70}
                  width="33%"
                  height="200"
                  nonDownloadable={true}
                />
              )}
            </Col>
          </Row>

          <Row>
            <Col span={24}>
              <div style={{ height: "1251px" }}>
                {loadCount > 2 && (
                  <QuestionWithIframe
                    handleLoadCounter={handleSetLoad}
                    questionId={63}
                    width="100%"
                    height="1251"
                  />
                )}
              </div>
              <div className="navButtonSelected">
                <p style={{ lineHeight: "2.6" }}>
                  District-wise DRM Compliance
                </p>
              </div>
            </Col>
            <Col span={24}>
              <div style={{ height: "1270px" }}>
                {loadCount > 3 && (
                  <QuestionWithIframe
                    handleLoadCounter={handleSetLoad}
                    questionId={69}
                    width="100%"
                    height="1270"
                  />
                )}
              </div>
              <div className="navButtonSelected">
                <p style={{ lineHeight: "2.5" }}>
                  District-wise BRM Compliance
                </p>
              </div>
            </Col>
            <Col span={24}>
              <div style={{ height: "1350px" }}>
                {loadCount > 4 && (
                  <QuestionWithIframe
                    handleLoadCounter={handleSetLoad}
                    questionId={71}
                    width="100%"
                    height="1350"
                  />
                )}
              </div>
              <div className="navButtonSelected">
                <p style={{ lineHeight: "2.5" }}>
                  District-wise CRM Compliance
                </p>
              </div>
            </Col>
          </Row>

          <Row>
            <Col span={24}>
              <div style={{ height: "808px" }}>
                {loadCount > 5 && (
                  <QuestionWithIframe
                    handleLoadCounter={handleSetLoad}
                    questionId={72}
                    width="100%"
                    height="808"
                  />
                )}
              </div>
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
              <div style={{ height: "200px" }}>
                {loadCount > 6 && (
                  <QuestionWithIframe
                    handleLoadCounter={handleSetLoad}
                    questionId={73}
                    width="100%"
                    height="200"
                    nonDownloadable={true}
                  />
                )}
              </div>
            </Col>
            <Col span={12}>
              <div style={{ height: "200px" }}>
                {loadCount > 7 && (
                  <QuestionWithIframe
                    handleLoadCounter={handleSetLoad}
                    questionId={76}
                    width="100%"
                    height="200"
                    nonDownloadable={true}
                  />
                )}
              </div>
              <QuestionWithIframe
                params={selectedQuarter}
                questionId={73}
                width="100%"
                height="200"
                nonDownloadable={true}
              />
            </Col>
            <Col span={12}>
              <QuestionWithIframe
                params={selectedQuarter}
                questionId={76}
                width="100%"
                height="200"
                nonDownloadable={true}
              />
            </Col>
          </Row>
          <Row>
            <Col span={24}>
              <div style={{ height: "1266px" }}>
                {loadCount > 8 && (
                  <QuestionWithIframe
                    handleLoadCounter={handleSetLoad}
                    questionId={75}
                    width="100%"
                    height="1266"
                    params={{ Quarter: [3] }}
                  />
                )}
              </div>
              <div className="navButtonSelected">
                <p style={{ lineHeight: "2.5" }}>District-wise BRCC Visits</p>
              </div>
            </Col>
          </Row>
        </Col>
      </Content>
    </Layout>
  );
};

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
