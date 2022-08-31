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
import QuestionWithIframe from "../../components/QuestionWIthIframe";

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

const StudentAssessmentPerformanceGrade4_8: FC = () => {
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
                  <QuestionWithIframe
                    questionId={84}
                    width="100%"
                    height="300"
                  />
                </div>
              </Col>
              <Col span={12}>
                <div>
                  <QuestionWithIframe
                    questionId={85}
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
                    questionId={86}
                    width="100%"
                    height="300"
                  />
                </div>
              </Col>
              <Col span={12}>
                <div>
                  <QuestionWithIframe
                    questionId={87}
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
              <Col span={12}>
                <div>
                  <QuestionWithIframe
                    questionId={97}
                    width="100%"
                    height="400"
                  />
                  <Button className="navButtonSelected">Class-4</Button>
                </div>
              </Col>
              <Col span={12}>
                <div>
                  <QuestionWithIframe
                    questionId={98}
                    width="100%"
                    height="400"
                  />
                  <Button className="navButtonSelected">Class 5</Button>
                </div>
              </Col>
            </Row>
            <Row>
              <Col span={12}>
                <div>
                  <QuestionWithIframe
                    questionId={99}
                    width="100%"
                    height="400"
                  />
                  <Button className="navButtonSelected">Class 6</Button>
                </div>
              </Col>
              <Col span={12}>
                <div>
                  <QuestionWithIframe
                    questionId={100}
                    width="100%"
                    height="400"
                  />
                  <Button className="navButtonSelected">Class 7</Button>
                </div>
              </Col>
            </Row>
            <Row>
              <Col span={24}>
                <QuestionWithIframe
                  questionId={101}
                  width="100%"
                  height="400"
                />
                <Button className="navButtonSelected">Class 8</Button>
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
                      <MapComponent
                        config={config}
                        markers={undefined}
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
          <Col span={8}>
            <Row>
              <Col span={24}>
                <div className="NIPUNheading">NIPUN Lakshya Analysis</div>
              </Col>
            </Row>
            <Row>
              <Col span={24} style={{ display: "flex" }}>
                <iframe
                  src="http://167.71.234.32:3000/public/question/4fee588d-5411-41a2-991a-24c02cbbec55"
                  frameBorder="0"
                  width="50%"
                  height="180"
                  allowTransparency
                ></iframe>
                <iframe
                  src="http://167.71.234.32:3000/public/question/9f349098-91f6-49b2-9b11-095f75350009"
                  frameBorder="0"
                  width="50%"
                  height="180"
                  allowTransparency
                ></iframe>
              </Col>
              <Col span={24} style={{ display: "flex" }}>
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
              </Col>
            </Row>
            <Row>
              <Col style={{ display: "flex" }}>
                <Col span={7}>
                  <iframe
                    src="http://167.71.234.32:3000/public/question/e9b4fb3f-4c30-4e21-86a1-9cfe9ba9e8e0"
                    frameBorder="0"
                    width="100%"
                    height="500"
                    allowTransparency
                  ></iframe>
                  <div className="Districtwice">
                    District wise students practising atleast twice a month
                  </div>
                </Col>
                <Col span={7}>
                  <iframe
                    src="http://167.71.234.32:3000/public/question/5ada1998-8b3c-48e0-a35b-a882a14c5086"
                    frameBorder="0"
                    width="100%"
                    height="500"
                    allowTransparency
                  ></iframe>
                  <div style={{ padding: "19.1px" }} className="Districtwice">
                    District wise NIPUN Students
                  </div>
                </Col>
                <Col span={10}>
                  <iframe
                    src="http://167.71.234.32:3000/public/question/71705c36-c213-47f5-830d-cbb7186fa897"
                    frameBorder="0"
                    width="100%"
                    height="300"
                    allowTransparency
                  ></iframe>
                  <Button className="navButtonSelected">
                    Class-wise NIPUN Students
                  </Button>
                  <Col offset={10} span={14}>
                    <div className="District-wise-div">
                      District wise trends
                    </div>
                    <iframe
                      src="http://167.71.234.32:3000/public/question/91f6d2a5-dd27-4404-9a78-3e20f46091a6"
                      frameBorder="0"
                      width="100%"
                      height="200"
                      allowTransparency
                    ></iframe>
                  </Col>

                  {/* <Col offset={6} span={18}>
                    <div className="District-wise-div">
                      District wise trends
                    </div>
                    <div>
                      <iframe
                        src="http://167.71.234.32:3000/public/question/91f6d2a5-dd27-4404-9a78-3e20f46091a6"
                        frameBorder="0"
                        width="100%"
                        height="200"
                        allowTransparency
                      ></iframe>
                      <Button className="navButtonSelected">Top Districts (Class-1)</Button>
                      <iframe
                        src="http://167.71.234.32:3000/public/question/02e65177-2908-4478-82cf-ebe6e6e8719d"
                        frameBorder="0"
                        width="100%"
                        height="200"
                        allowTransparency
                      ></iframe>
                      <Button className="navButtonSelected">Bottom Districts (Class-1)</Button>
                      <iframe
                        src="http://167.71.234.32:3000/public/question/730d8c5b-e248-4a7f-af24-412ca87042ff"
                        frameBorder="0"
                        width="100%"
                        height="200"
                        allowTransparency
                      ></iframe>
                      <Button className="navButtonSelected">Top Districts (Class-2)</Button>
                      <iframe
                        src="http://167.71.234.32:3000/public/question/3ec7a9bc-c587-4fb8-ad8f-e4fb3f728cd6"
                        frameBorder="0"
                        width="100%"
                        height="200"
                        allowTransparency
                      ></iframe>
                      <Button className="navButtonSelected">Bottom Districts (Class-2)</Button>
                      <iframe
                        src="http://167.71.234.32:3000/public/question/39c7afb6-9f14-492b-89ca-39f2a0b13dff"
                        frameBorder="0"
                        width="100%"
                        height="200"
                        allowTransparency
                      ></iframe>
                      <Button className="navButtonSelected">Top Districts (Class-3)</Button>
                      <iframe
                        src="http://167.71.234.32:3000/public/question/8239aab9-23aa-4f60-b661-fbfcde29263a"
                        frameBorder="0"
                        width="100%"
                        height="200"
                        allowTransparency
                      ></iframe>
                      <Button className="navButtonSelected">Bottom Districts (Class-3)</Button>
                    </div>
                  </Col> */}
                </Col>
              </Col>
            </Row>
            <Row style={{ display: "inlineGrid" }}>
              <Col span={9}>
                <div className="District-wise-div">
                  Oral Reading Fluency Analysis
                </div>
                <iframe
                  src="http://167.71.234.32:3000/public/question/76b143a0-9def-4b74-ae45-5db83b69b754"
                  frameBorder="0"
                  width="100%"
                  height="200"
                  allowTransparency
                ></iframe>
              </Col>
              <Col span={9}>
                <div
                  style={{ padding: "22.6px" }}
                  className="District-wise-div"
                >
                  Numeracy Analysis
                </div>
                <iframe
                  src="http://167.71.234.32:3000/public/question/5e5d0c47-3259-4b40-a3e1-674464fc3abc"
                  frameBorder="0"
                  width="100%"
                  height="200"
                  allowTransparency
                ></iframe>
              </Col>
              <Col span={6}>
                <Button
                  style={{ height: "60px" }}
                  className="navButtonSelected"
                >
                  Top Districts (Class-1)
                </Button>
                <iframe
                  src="http://167.71.234.32:3000/public/question/02e65177-2908-4478-82cf-ebe6e6e8719d"
                  frameBorder="0"
                  width="100%"
                  height="200"
                  allowTransparency
                ></iframe>
              </Col>

              {/* <Col span={6}>
                <div>
            
             
       
                </div>
              </Col> */}
              <Col span={9}>
                <div
                  style={{ padding: "22.6px" }}
                  className="navButtonSelected"
                >
                  Oral Reading Fluency Analysis
                </div>
                <iframe
                  src="http://167.71.234.32:3000/public/question/76264e81-566f-4f0f-8553-aa84a7d9bc3c"
                  frameBorder="0"
                  width="100%"
                  height="200"
                  allowTransparency
                ></iframe>
              </Col>
              <Col span={9}>
                <div
                  style={{ padding: "22.6px" }}
                  className="navButtonSelected"
                >
                  Numeracy Analysis
                </div>
                <iframe
                  src="http://167.71.234.32:3000/public/question/a87d0fac-42e5-4b68-88c1-984ebc12cdd9"
                  frameBorder="0"
                  width="100%"
                  height="200"
                  allowTransparency
                ></iframe>
              </Col>
              <Col span={6}>
                <Button
                  style={{ height: "60px" }}
                  className="navButtonSelected"
                >
                  Bottom Districts (Class-1)
                </Button>
                <iframe
                  src="http://167.71.234.32:3000/public/question/730d8c5b-e248-4a7f-af24-412ca87042ff"
                  frameBorder="0"
                  width="100%"
                  height="200"
                  allowTransparency
                ></iframe>
              </Col>

              <Col span={9}>
                <div
                  style={{ padding: "22.6px" }}
                  className="navButtonSelected"
                >
                  Oral Reading Fluency Analysis
                </div>
                <iframe
                  src="http://167.71.234.32:3000/public/question/c69907f9-ba78-4aa1-86e8-4c90e121be95"
                  frameBorder="0"
                  width="100%"
                  height="200"
                  allowTransparency
                ></iframe>
              </Col>
              <Col span={9}>
                <div
                  style={{ padding: "22.6px" }}
                  className="navButtonSelected"
                >
                  Numeracy Analysis
                </div>
                <iframe
                  src="http://167.71.234.32:3000/public/question/9edfc3fd-d460-4c70-a477-afd5b79b756e"
                  frameBorder="0"
                  width="100%"
                  height="200"
                  allowTransparency
                ></iframe>
              </Col>
              <Col span={6}>
                <Button
                  style={{ height: "60px" }}
                  className="navButtonSelected"
                >
                  Top Districts (Class-2)
                </Button>
                <iframe
                  src="http://167.71.234.32:3000/public/question/3ec7a9bc-c587-4fb8-ad8f-e4fb3f728cd6"
                  frameBorder="0"
                  width="100%"
                  height="200"
                  allowTransparency
                ></iframe>
                <Button
                  style={{ height: "60px" }}
                  className="navButtonSelected"
                >
                  Bottom Districts (Class-2)
                </Button>
                <iframe
                  src="http://167.71.234.32:3000/public/question/39c7afb6-9f14-492b-89ca-39f2a0b13dff"
                  frameBorder="0"
                  width="100%"
                  height="200"
                  allowTransparency
                ></iframe>
                <Button
                  style={{ height: "60px" }}
                  className="navButtonSelected"
                >
                  Top Districts (Class-3)
                </Button>
                <iframe
                  src="http://167.71.234.32:3000/public/question/8239aab9-23aa-4f60-b661-fbfcde29263a"
                  frameBorder="0"
                  width="100%"
                  height="200"
                  allowTransparency
                ></iframe>
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

export default StudentAssessmentPerformanceGrade4_8;
