import React, { FC, useEffect, useState } from "react";
import { Card, Col, Layout, Row, Divider, Image, Select } from "antd";
import { ArrowRightOutlined } from "@ant-design/icons";
import { Content } from "antd/es/layout/layout";
import { NavLink } from "react-router-dom";
import { Button } from "antd/lib/radio";
import "./index.css";
import Title from "antd/es/typography/Title";
import MapComponent from "../../components/MapComponent/MapComponent.jsx";
import config from "./config.json";
import QuestionWithIframe from "../../components/QuestionWIthIframe";

const questions = [4];
const sample_data = {
  schools: {
    GPS: 10601,
    GMS: 1947,
    GHS: 932,
    GSSS: 1868,
  },
};

const StudentAssessmentPerformanceGrade1_3 = (props: any) => {
  const [selectedButton, setSelectedButton] = useState(1);
  const [marker, setMarker] = useState("district");
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
          <Col span={6}>
            <Row>
              <Col span={8}>
                {/* <Button
                  className={
                    selectedButton == 1 ? "navButtonSelected" : "navButton"
                  }
                  onClick={() => {
                    onButtonClick(1);
                  }}
                >
                  Student Assessment Performance (Grade 4-8)
                </Button> */}
              </Col>
              <Col span={8}>
                {/* <Button
                  className={
                    selectedButton == 2 ? "navButtonSelected" : "navButton"
                  }
                  onClick={() => {
                    onButtonClick(2);
                  }}
                >
                  Student Assessment Performance (Grade 1-3)
                </Button> */}
              </Col>
              <Col
                span={8}
                onClick={() => {
                  onButtonClick(3);
                }}
              >
                {/* <Button
                  className={
                    selectedButton == 3 ? "navButtonSelected" : "navButton"
                  }
                >
                  Administrative Overview
                </Button> */}
              </Col>
            </Row>
            <Row>
              <Col span={12}>
                <div>
                  <QuestionWithIframe
                    questionId={80}
                    width="100%"
                    height="300"
                  />
                </div>
              </Col>
              <Col span={12}>
                <div>
                  <QuestionWithIframe
                    questionId={81}
                    width="100%"
                    height="300"
                  />
                </div>
              </Col>
            </Row>
            <Row>
              <Col span={12}>
                <div>
                  <QuestionWithIframe
                    questionId={118}
                    width="100%"
                    height="300"
                  />
                </div>
              </Col>
              <Col span={12}>
                <div>
                  <QuestionWithIframe
                    questionId={119}
                    width="100%"
                    height="300"
                  />
                </div>
              </Col>
            </Row>
            <Row>
              <Col span={24}>
                <div className="NIPUNheading">
                  District-wise Assessment Performance (SA 1 & SA2)
                </div>
              </Col>
            </Row>
            <Row>
              <Col span={24}>
                <QuestionWithIframe
                  questionId={102}
                  width="100%"
                  height="650"
                />
                <Button className="navButtonSelected">
                  Districts with highest jump in scores
                </Button>
              </Col>
            </Row>
            <Row>
              <Col span={24}>
                <QuestionWithIframe
                  questionId={103}
                  width="100%"
                  height="650"
                />
                <Button className="navButtonSelected">
                  Districts with highest fall in scores
                </Button>
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
                        props.getMarkerData("Districts");
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
                        props.getMarkerData("Blocks");
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
                        props.getMarkerData("Districts");
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
                        props.getMarkerData("Schools");
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
                      <MapComponent
                        config={config}
                        markers={props.markerData}
                      ></MapComponent>
                    </div>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Col>
          <Col span={6}>
            <Row>
              <Col span={9}>
                <Row>
                  <Col>
                    
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
                  <div className="NIPUNheading">
                    Class-wise Assessment Performance
                  </div>
                  <QuestionWithIframe
                    questionId={106}
                    width="100%"
                    height="250"
                  />
                  <Button className="navButtonSelected">
                    Average Grade-wise Performance distribution (SA-1 & SA-2)
                  </Button>
                  <Col span={24} style={{ display: "flex" }}>
                    <Col span={12}>
                      <QuestionWithIframe
                        questionId={120}
                        width="100%"
                        height="250"
                      />
                      <Button className="navButtonSelected">Class 1</Button>
                    </Col>
                    <Col span={12}>
                      <QuestionWithIframe
                        questionId={121}
                        width="100%"
                        height="250"
                      />
                      <Button className="navButtonSelected">Class 2</Button>
                    </Col>
                  </Col>
                  <Col span={24}>
                    <QuestionWithIframe
                      questionId={122}
                      width="100%"
                      height="250"
                    />
                    <Button className="navButtonSelected">Class 3</Button>
                  </Col>
                </div>
              </Col>
            </Row>
            <Row>
              <Col span={24}>
                <QuestionWithIframe
                  questionId={104}
                  width="100%"
                  height="250"
                />
                <Button className="navButtonSelected">
                  Comparative Performance in SA-1 and SA-2 (Class 4)
                </Button>
              </Col>
            </Row>
            <Row>
              <Col span={24}>
                <QuestionWithIframe
                  questionId={105}
                  width="100%"
                  height="250"
                />
                <Button className="navButtonSelected">
                  Comparative Performance in SA-1 and SA-2 (Class 5)
                </Button>
              </Col>
            </Row>
            <Row>
              <Col span={24}>
                <QuestionWithIframe
                  questionId={107}
                  width="100%"
                  height="250"
                />
                <Button className="navButtonSelected">
                  Comparative Performance in SA-1 and SA-2 (Class 6)
                </Button>
              </Col>
            </Row>
            <Row>
              <Col span={24}>
                <QuestionWithIframe
                  questionId={108}
                  width="100%"
                  height="250"
                />
                <Button className="navButtonSelected">
                  Comparative Performance in SA-1 and SA-2 (Class 7)
                </Button>
              </Col>
            </Row>
            <Row>
              <Col span={24}>
                <QuestionWithIframe
                  questionId={110}
                  width="100%"
                  height="250"
                />
                <Button className="navButtonSelected">
                  Comparative Performance in SA-1 and SA-2 (Class 8)
                </Button>
              </Col>
            </Row>
            <Row>
              <Col span={24}>
                <div>
                  {/*<iframe*/}
                  {/*  src="http://167.71.234.32:3000/public/question/c17c54f7-ba27-4f0d-83dd-2236bc48fd9a"*/}
                  {/*  frameBorder="0"*/}
                  {/*  width="100%"*/}
                  {/*  height="500"*/}
                  {/*  allowTransparency*/}
                  {/*></iframe>*/}
                  {/*Hello*/}
                  <QuestionWithIframe
                    questionId={5}
                    width="100%"
                    height="300"
                  />
                </div>
              </Col>
            </Row>
          </Col>
          <Col span={6}>
            <Row>
              <Col span={24}>
                <div className="NIPUNheading">
                  Subject-wise Assessment Performance
                </div>
              </Col>
            </Row>
            <Row>
              <Col span={24}>
                <QuestionWithIframe
                  questionId={117}
                  width="100%"
                  height="460"
                />
                <Button className="navButtonSelected">
                  Subject wise change in average score across SAs
                </Button>
              </Col>
              <Col span={24}>
                <QuestionWithIframe
                  questionId={111}
                  width="100%"
                  height="400"
                />
                <Button className="navButtonSelected">
                  Subject wise average score across SAs (Class 4)
                </Button>
              </Col>
              <Col span={24}>
                <QuestionWithIframe
                  questionId={112}
                  width="100%"
                  height="400"
                />
                <Button className="navButtonSelected">
                  Subject wise average score across SAs (Class 5)
                </Button>
              </Col>
              <Col span={24}>
                <QuestionWithIframe
                  questionId={113}
                  width="100%"
                  height="400"
                />
                <Button className="navButtonSelected">
                  Subject wise average score across SAs (Class 6)
                </Button>
              </Col>
              <Col span={24}>
                <QuestionWithIframe
                  questionId={111}
                  width="100%"
                  height="400"
                />
                <Button className="navButtonSelected">
                  Subject wise average score across SAs (Class 7)
                </Button>
              </Col>
              <Col span={24}>
                <QuestionWithIframe
                  questionId={115}
                  width="100%"
                  height="400"
                />
                <Button className="navButtonSelected">
                  Subject wise average score across SAs (Class 8)
                </Button>
              </Col>
            </Row>
          </Col>
          <Col span={6}>
            <Row>
              <Col span={24}>
                <div className="NIPUNheading">NIPUN Lakshya Analysis</div>
              </Col>
            </Row>
            <Row>
              <Col span={24} style={{ display: "flex" }}>
                <QuestionWithIframe questionId={133} width="50%" height="200" />
                <QuestionWithIframe questionId={136} width="50%" height="200" />
              </Col>
              <Col span={24} style={{ display: "flex" }}>
                <QuestionWithIframe questionId={134} width="50%" height="200" />
                <QuestionWithIframe questionId={135} width="50%" height="200" />
              </Col>
            </Row>
            <Row>
              <Col style={{ display: "flex" }}>
                <Col span={7}>
                <QuestionWithIframe questionId={138} width="100%" height="400" />
                  <div className="Districtwice">
                    District wise students practising atleast once a month
                  </div>
                </Col>
                <Col span={7}>
                <QuestionWithIframe questionId={137} width="100%" height="400" />
                  <div style={{ padding: "19.1px" }} className="Districtwice">
                    District wise NIPUN Students
                  </div>
                </Col>
                <Col span={10}>
                <QuestionWithIframe questionId={139} width="100%" height="400" />
                  <Button className="navButtonSelected">
                    Class-wise NIPUN Students
                  </Button>
                  <Col offset={10} span={14}>
                    <div className="District-wise-div">
                      District wise trends
                    </div>
                    <QuestionWithIframe questionId={143} width="100%" height="200" />
                  </Col>

                </Col>
              </Col>
            </Row>
            <Row style={{ display: "inlineGrid" }}>
              <Col span={9}>
                <div className="District-wise-div">
                  Oral Reading Fluency Analysis
                </div>
                {/*<iframe*/}
                {/*  src="http://167.71.234.32:3000/public/question/76b143a0-9def-4b74-ae45-5db83b69b754"*/}
                {/*  frameBorder="0"*/}
                {/*  width="100%"*/}
                {/*  height="200"*/}
                {/*  allowTransparency*/}
                {/*></iframe>*/}
              </Col>
              <Col span={9}>
                <div
                  style={{ padding: "22.6px" }}
                  className="District-wise-div"
                >
                  Numeracy Analysis
                </div>
                <QuestionWithIframe questionId={140} width="100%" height="180" />
              </Col>
              <Col span={6}>
                <Button
                  style={{ height: "60px" }}
                  className="navButtonSelected"
                >
                  Top Districts (Class-1)
                </Button>
                <QuestionWithIframe questionId={144} width="100%" height="200" />
              </Col>
              <Col span={9}>
                <div
                  style={{ padding: "22.6px" }}
                  className="navButtonSelected"
                >
                  Oral Reading Fluency Analysis
                </div>
                {/*<iframe*/}
                {/*  src="http://167.71.234.32:3000/public/question/76264e81-566f-4f0f-8553-aa84a7d9bc3c"*/}
                {/*  frameBorder="0"*/}
                {/*  width="100%"*/}
                {/*  height="200"*/}
                {/*  allowTransparency*/}
                {/*></iframe>*/}
              </Col>
              <Col span={9}>
                <div
                  style={{ padding: "22.6px" }}
                  className="navButtonSelected"
                >
                  Numeracy Analysis
                </div>
                <QuestionWithIframe questionId={141} width="100%" height="200" />
              </Col>
              <Col span={6}>
                <Button
                  style={{ height: "60px" }}
                  className="navButtonSelected"
                >
                  Bottom Districts (Class-1)
                </Button>
                <QuestionWithIframe questionId={145} width="100%" height="200" />
              </Col>

              <Col span={9}>
                <div
                  style={{ padding: "22.6px" }}
                  className="navButtonSelected"
                >
                  Oral Reading Fluency Analysis
                </div>
                {/*<iframe*/}
                {/*  src="http://167.71.234.32:3000/public/question/c69907f9-ba78-4aa1-86e8-4c90e121be95"*/}
                {/*  frameBorder="0"*/}
                {/*  width="100%"*/}
                {/*  height="200"*/}
                {/*  allowTransparency*/}
                {/*></iframe>*/}
              </Col>
              <Col span={9}>
                <div
                  style={{ padding: "22.6px" }}
                  className="navButtonSelected"
                >
                  Numeracy Analysis
                </div>
                <QuestionWithIframe questionId={142} width="100%" height="200" />
              </Col>
              <Col span={6}>
                <Button
                  style={{ height: "60px" }}
                  className="navButtonSelected"
                >
                  Top Districts (Class-2)
                </Button>
                <QuestionWithIframe questionId={146} width="100%" height="200" />
                <Button
                  style={{ height: "60px" }}
                  className="navButtonSelected"
                >
                  Bottom Districts (Class-2)
                </Button>
                <QuestionWithIframe questionId={148} width="100%" height="200" />
                <Button
                  style={{ height: "60px" }}
                  className="navButtonSelected"
                >
                  Top Districts (Class-3)
                </Button>
                <QuestionWithIframe questionId={149} width="100%" height="200" />
                <Button
                  style={{ height: "60px" }}
                  className="navButtonSelected"
                >
                  Bottom Districts (Class-3)
                </Button>
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

export default StudentAssessmentPerformanceGrade1_3;
