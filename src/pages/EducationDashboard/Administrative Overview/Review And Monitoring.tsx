import React, { FC, useEffect, useState } from "react";
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
  const [month, setMonth] = useState("June");
  const [Quarter, setQuarter] = useState(3);
  const handleSetLoad = () => {
    // setLoadCount(loadCount + 1);
    setLoadCount((prev: any) => {
      return ++prev;
    });
  };
  const monthValue = (e: any) => {
    setMonth(e.target.value);
  };
  const quarterValue = (e: any) => {
    setQuarter(e.target.value);
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
              <select
                onChange={(e) => {
                  monthValue(e);
                }}
                className="forSelect"
                defaultValue={""}
              >
                <option value={""} disabled selected hidden>
                  Months
                </option>
                {ml.map((obj) => {
                  return <option value={obj}>{obj}</option>;
                })}
              </select>
            </Col>
            <Col span={8} style={{ display: "flex" }}>
              <select
                onChange={(e) => {
                  quarterValue(e);
                }}
                // value={"1"}
                className="forSelect"
                defaultValue={""}
              >
                <option value={""} disabled selected hidden>
                  Quarter
                </option>
                <option value={"1"}>1</option>
                <option value={"2"}>2</option>
                <option value={"3"}>3</option>
                <option value={"4"}>4</option>
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
                params={{ month }}
              />

              {loadCount > 0 && (
                <QuestionWithIframe
                  handleLoadCounter={handleSetLoad}
                  questionId={64}
                  width="34%"
                  height="200"
                  nonDownloadable={true}
                  params={{ month }}
                />
              )}

              {loadCount > 1 && (
                <QuestionWithIframe
                  handleLoadCounter={handleSetLoad}
                  questionId={70}
                  width="33%"
                  height="200"
                  nonDownloadable={true}
                  params={{ month }}
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
                    params={{ month }}
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
                    params={{ month }}
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
                    params={{ month }}
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
          <Row>
            <Col span={12}>
              {loadCount > 6 && (
                <QuestionWithIframe
                  questionId={73}
                  width="100%"
                  height="200"
                  nonDownloadable={true}
                  params={{ Quarter }}
                />
              )}
            </Col>
            {loadCount > 6 && (
              <Col span={12}>
                <QuestionWithIframe
                  questionId={76}
                  width="100%"
                  height="200"
                  nonDownloadable={true}
                  params={{ Quarter }}
                />
              </Col>
            )}
          </Row>
          <Row>
            <Col span={24}>
              <div style={{ height: "1474px" }}>
                {loadCount > 6 && (
                  <QuestionWithIframe
                    handleLoadCounter={handleSetLoad}
                    questionId={75}
                    width="100%"
                    height="1474"
                    params={{ Quarter }}
                  />
                )}
              </div>
              <div className="navButtonSelected">
                <p style={{ lineHeight: "2.5" }}>District-wise BRCC Visits</p>
              </div>
            </Col>
            <Col span={24}>
              <div style={{ height: "1170px" }}>
                {loadCount > 7 && (
                  <QuestionWithIframe
                    handleLoadCounter={handleSetLoad}
                    questionId={77}
                    width="100%"
                    height="1170"
                    params={{ Quarter }}
                  />
                )}
              </div>
              <div className="navButtonSelected">
                <p style={{ lineHeight: "2.5" }}>District-wise CRCC Visits</p>
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
