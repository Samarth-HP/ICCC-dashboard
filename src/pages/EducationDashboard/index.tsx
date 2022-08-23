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
import config from "./config.json";

const sample_data = {
  schools: {
    GPS: 10601,
    GMS: 1947,
    GHS: 932,
    GSSS: 1868,
  },
};

const EducationPortal: FC = () => {
  const [selectedButton, setSelectedButton] = useState(1);
  const [marker, setMarker] = useState("Districts");
  const onButtonClick = (id: any) => {
    console.log(id);
    setSelectedButton(id);
  };
  const onSetMarker = (id: any) => {
    console.log(id);
    setMarker(id);
  };
  return (
    <Layout className={"layout-wrapper home-wrapper"}>
      <Content style={{ padding: "10px" }}>
        <Row>
          <Col span={10}>
            <Row>
              <Col span={8}>
                <Button
                  className={
                    selectedButton == 1 ? "navButtonSelected" : "navButton"
                  }
                  onClick={() => {
                    onButtonClick(1);
                  }}
                >
                  Student Assessment Performance (Grade 4-8)
                </Button>
              </Col>
              <Col span={8}>
                <Button
                  className={
                    selectedButton == 2 ? "navButtonSelected" : "navButton"
                  }
                  onClick={() => {
                    onButtonClick(2);
                  }}
                >
                  Student Assessment Performance (Grade 1-3)
                </Button>
              </Col>
              <Col
                span={8}
                onClick={() => {
                  onButtonClick(3);
                }}
              >
                <Button
                  className={
                    selectedButton == 3 ? "navButtonSelected" : "navButton"
                  }
                >
                  Administrative Overview
                </Button>
              </Col>
            </Row>
            <Row>
              <Col span={12}>
                <div>
                  <iframe
                    src="http://167.71.234.32:3000/public/question/54d3b5b0-7208-4dfd-bba3-b587962ffbcd"
                    frameBorder="0"
                    width="100%"
                    height="300"
                    allowTransparency
                  ></iframe>
                </div>
              </Col>
              {/* <Col span={8}>
                <div>
                  <iframe
                    src="http://167.71.234.32:3000/public/question/7caa8a88-838e-4db0-922b-4667d8a60d89"
                    frameBorder="0"
                    width="100%"
                    height="300"
                    allowTransparency
                  ></iframe>
                </div>
              </Col> */}
              <Col span={12}>
                <div>
                  <iframe
                    src="http://167.71.234.32:3000/public/question/772cc6d7-b68e-46af-8737-92d5e56c482c"
                    frameBorder="0"
                    width="100%"
                    height="300"
                    allowTransparency
                  ></iframe>
                </div>
              </Col>
              {/* <Col span={6}>
                <div>
                  <iframe
                    src="http://167.71.234.32:3000/public/question/54d3b5b0-7208-4dfd-bba3-b587962ffbcd"
                    frameBorder="0"
                    width="100%"
                    height="300"
                    allowTransparency
                  ></iframe>
                </div>
              </Col> */}
            </Row>
            <Row>
              <Col span={24}>
                <div>
                  <iframe
                    src="http://167.71.234.32:3000/public/question/1633059a-6848-46a9-b783-84cc810f3e5b"
                    frameBorder="0"
                    width="100%"
                    height="300"
                    allowTransparency
                  ></iframe>
                </div>
              </Col>
            </Row>
            <Row>
              <Col span={24}>
                <Row>
                  <Col span={4}>
                    <Select defaultValue={"SA-1"} style={{ width: "100%" }}>
                      <Select.Option value={"SA-1"}>{"SA-1"}</Select.Option>
                      <Select.Option value={"SA-2"}>{"SA-2"}</Select.Option>
                    </Select>
                  </Col>
                  <Col span={5}>
                    <Button
                      className={
                        marker == "Districts"
                          ? "navButtonSelected"
                          : "navButton"
                      }
                      onClick={() => {
                        setMarker("Districts");
                      }}
                    >
                      Districts
                    </Button>
                  </Col>
                  <Col span={5}>
                    <Button
                      className={
                        marker == "Blocks" ? "navButtonSelected" : "navButton"
                      }
                      onClick={() => {
                        setMarker("Blocks");
                      }}
                    >
                      Blocks
                    </Button>
                  </Col>
                  <Col span={5}>
                    <Button
                      className={
                        marker == "Clusters" ? "navButtonSelected" : "navButton"
                      }
                      onClick={() => {
                        setMarker("Clusters");
                      }}
                    >
                      Clusters
                    </Button>
                  </Col>
                  <Col span={5}>
                    <Button
                      className={
                        marker == "Schools" ? "navButtonSelected" : "navButton"
                      }
                      onClick={() => {
                        setMarker("Schools");
                      }}
                    >
                      Schools
                    </Button>
                  </Col>
                </Row>
                <Row>
                  <Col span={24}>
                    <div style={{ width: "100%" }}>
                      <MapComponent config={config}></MapComponent>
                    </div>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Col>
          <Col span={14}>
            <Row>
              <Col span={9}>
                <Row>
                  <Col>
                    <Button>VIEW DETAILED DASHBOARDS</Button>
                  </Col>
                  <Col>
                    <Select defaultValue={"2022-2023"}>
                      <Select.Option value={"2022-2023"}>
                        {"2022-2023"}
                      </Select.Option>
                    </Select>
                  </Col>
                </Row>
              </Col>
              <Col className={"refrences"} span={15}>
                <Row style={{ justifyContent: "space-evenly" }}>
                  <Col span={6}>{"Reference - Grade A: >=80%"}</Col>
                  <Col span={4}>{"Grade B: 65-80%"}</Col>
                  <Col span={4}>{"Grade C: 50-65%"}</Col>
                  <Col span={4}>{"Grade D: 35-50%"}</Col>
                  <Col span={4}>{"Grade E: <35%"}</Col>
                </Row>
              </Col>
            </Row>
            <Row>
              <Col span={24}>
                <div>
                  <iframe
                    src="http://167.71.234.32:3000/public/question/e1d454d3-3424-45ef-aeb5-780595140cb8"
                    frameBorder="0"
                    width="100%"
                    height="500"
                    allowTransparency
                  ></iframe>
                </div>
              </Col>
            </Row>
            <Row>
              <Col span={24}>
                <div>
                  <iframe
                    src="http://167.71.234.32:3000/public/question/c17c54f7-ba27-4f0d-83dd-2236bc48fd9a"
                    frameBorder="0"
                    width="100%"
                    height="500"
                    allowTransparency
                  ></iframe>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Content>
      {/* <Content>
          <Row justify={'center'} align={'middle'} className="container">
            <Title level={3}>INTEGRATED EDUCATION DASHBOARD</Title>
            <Divider>एकीकृत शिक्षा डैशबोर्</Divider>
            <Row gutter={30}>
              <Col> */}
      {/*@ts-ignore*/}
      {/* <Tile thumbnail={schools} titleEN="SCHOOLS" titleHI="विद्यालय" data={sample_data.schools} count={15330} />
              </Col>
              <Col> */}
      {/*@ts-ignore*/}
      {/* <Tile thumbnail={students} titleEN="STUDENTS" titleHI="विद्यालय" data={sample_data.schools} count={15330} />
              </Col>
              <Col> */}
      {/*@ts-ignore*/}
      {/* <Tile thumbnail={teachers} titleEN="TEACHERS" titleHI="विद्यालय" data={sample_data.schools} count={15330} />
              </Col>
            </Row>
          </Row>
        </Content>
        <Row align="middle" justify="space-between" className="footer">
          <Image src={FooterLogo} height={"50px"} />
          <Image src={FooterRightLogo} height={"50px"} />
        </Row> */}
    </Layout>
  );
};

const Tile: FC = (props: any) => {
  return (
    <Card hoverable bordered className="card">
      <Row gutter={20} align="middle">
        <Col>
          <img alt={"broken"} src={props.thumbnail} className="thumbnail" />
        </Col>
        <Col>
          <Title level={3}>
            {props.titleEN}
            <div className="subtitle">{props.titleHI}</div>
          </Title>
        </Col>
      </Row>
      <Divider dashed className="divider" />
      <Title level={2}>
        <div className="count">{props.count}</div>
      </Title>
      <Row gutter={20} justify="space-between">
        {Object.keys(props.data).map((i, index) => (
          //@ts-ignore
          <Col key={index} align="middle">
            <b>{i}</b>
            <div>{props.data[i]}</div>
          </Col>
        ))}
      </Row>
      <br />
      <Row justify="end">
        <NavLink to="/education-dashboard">
          <u>View More</u> <ArrowRightOutlined />
        </NavLink>
      </Row>
    </Card>
  );
};

export default EducationPortal;
