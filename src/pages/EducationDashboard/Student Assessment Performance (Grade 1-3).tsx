import React, { FC, useEffect, useState } from "react";
import { Card, Col, Layout, Row, Divider, Image, Select } from "antd";
import { ArrowRightOutlined } from "@ant-design/icons";
import { Content } from "antd/es/layout/layout";
import { NavLink } from "react-router-dom";
import { Button } from "antd/lib/radio";
import "./index.css";
import Title from "antd/es/typography/Title";
import MapComponent from "../../components/MapComponent/MapComponent.jsx";
import QuestionWithIframe from "../../components/QuestionWIthIframe";
import boyIcon from "../../assets/boyIcon.svg";
import girlIcon from "../../assets/girlIcon.svg";
import parameters from "../../services/parameters";

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
  const [loadCount, setLoadCount] = useState(0);
  const [marker, setMarker] = useState("Districts");
  const [selected, setSelected] = useState("SA1");
  const [academicYear, setAcademicYear] = useState("2021-2022");
  // const [academicYear, setAcademicYear] = useState("2022-23");
  const [config, setConfig] = useState([]);
  const onButtonClick = (id: any) => {
    // console.log(id);
    setSelectedButton(id);
  };
  const getConfig = () => {
    if (config.length) {
      return;
    }

    fetch("/educationDashboardConfig.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (configJson) {
        setConfig(configJson);
      });
  };

  const onSetMarker = (id: any) => {
    // console.log(id);
    setMarker(id);
  };
  useEffect(() => {
    getConfig();
    props.getMarkerData("Districts");
  }, []);
  const handleSetLoad = () => {
    // setLoadCount(loadCount + 1);
    setLoadCount((prev: any) => {
      return ++prev;
    });
  };
  console.log(props.markerData, "hi");

  return (
    <Layout
      className={"layout-wrapper home-wrapper"}
      style={{ display: props.active ? "block" : "none" }}
    >
      <Content style={{ padding: "10px" }}>
        <Row>
          <Col span={7}>
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
              <Col span={14}>
                <QuestionWithIframe
                  handleLoadCounter={handleSetLoad}
                  questionId={80}
                  width="100%"
                  height="330"
                  nonDownloadable={true}
                />
              </Col>
              <Col span={10}>
                <QuestionWithIframe
                  handleLoadCounter={handleSetLoad}
                  questionId={81}
                  width="100%"
                  height="330"
                  nonDownloadable={true}
                />
              </Col>
            </Row>
            <Row>
              <Col span={12}>
                <div>
                  {loadCount > 7 && (
                    <QuestionWithIframe
                      handleLoadCounter={handleSetLoad}
                      questionId={118}
                      width="100%"
                      height="330"
                      nonDownloadable={true}
                    />
                  )}
                </div>
              </Col>
              <Col span={12}>
                <div>
                  {loadCount > 7 && (
                    <QuestionWithIframe
                      handleLoadCounter={handleSetLoad}
                      questionId={119}
                      width="100%"
                      height="330"
                      nonDownloadable={true}
                    />
                  )}
                </div>
              </Col>
            </Row>
            <Row>
              <Col span={24}>
                <div className="NIPUNheading">
                  District-wise Assessment Performance
                  <br /> (SA1 & SA2)
                </div>
              </Col>
            </Row>
            <Row>
              <Col span={24}>
                <div style={{ height: "1310px" }}>
                  {loadCount > 13 && (
                    <QuestionWithIframe
                      handleLoadCounter={handleSetLoad}
                      questionId={120}
                      width="100%"
                      height="1310"
                    />
                  )}
                </div>
                <div className="navButtonSelected">
                  <p>Class 1</p>
                </div>
              </Col>
            </Row>
            <Row>
              <Col span={24}>
                <div style={{ height: "1310px" }}>
                  {loadCount > 21 && (
                    <QuestionWithIframe
                      handleLoadCounter={handleSetLoad}
                      questionId={121}
                      width="100%"
                      height="1310"
                    />
                  )}
                </div>
                <div className="navButtonSelected">
                  <p>Class 2</p>
                </div>
              </Col>
              <Col span={24}>
                <div style={{ height: "1310px" }}>
                  {loadCount > 27 && (
                    <QuestionWithIframe
                      handleLoadCounter={handleSetLoad}
                      questionId={122}
                      width="100%"
                      height="1310"
                    />
                  )}
                </div>
                <div className="navButtonSelected">
                  <p>Class 3</p>
                </div>
              </Col>
            </Row>
            <Row>
              <Col span={24}>
                <Row>
                  <Col span={6}>
                    {/* <Select
                      onSelect={(e: any) => setSelected(e)}
                      defaultValue={"SA1"}
                      style={{ width: "100%" }}
                    >
                      <Select.Option value={"SA1"}>{"SA-1"}</Select.Option>
                      <Select.Option value={"SA2"}>{"SA-2"}</Select.Option>
                    </Select> */}
                    <select
                      className="forSelect"
                      onSelect={(e: any) => {
                        setSelected(e);
                        props.setSelectedAssessment(e);
                      }}
                      defaultValue={"SA1"}
                      style={{ width: "100%" }}
                    >
                      <option className="myOption" value={"SA1"}>
                        {"SA-1"}
                      </option>
                      <option className="myOption" value={"SA2"}>
                        {"SA-2"}
                      </option>
                    </select>
                  </Col>
                  <Col span={6}>
                    <Button
                      style={{ height: "50px" }}
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
                      <p style={{ lineHeight: "1.2" }}>Districts</p>
                    </Button>
                  </Col>
                  <Col span={6}>
                    <Button
                      style={{ height: "50px" }}
                      className={
                        marker == "Blocks" ? "navButtonSelected" : "navButton"
                      }
                      onClick={() => {
                        props.getMarkerData("Blocks");
                        setMarker("Blocks");
                      }}
                    >
                      <p style={{ lineHeight: "1.2" }}>Blocks</p>
                    </Button>
                  </Col>
                  <Col span={6}>
                    <Button
                      style={{ height: "50px" }}
                      className={
                        marker == "Schools" ? "navButtonSelected" : "navButton"
                      }
                      onClick={() => {
                        props.getMarkerData("Schools");
                        setMarker("Schools");
                      }}
                    >
                      <p style={{ lineHeight: "1.2" }}>Schools</p>
                    </Button>
                  </Col>
                </Row>
                <Row>
                  <Col span={24}>
                    <div style={{ width: "100%" }}>
                      {props.active && (
                        <MapComponent
                          at={selected}
                          config={config}
                          type={1}
                          ay={academicYear}
                          markers={props?.markerData}
                        ></MapComponent>
                      )}
                    </div>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Col>
          <Col span={4}>
            <Row>
              <Col style={{ textAlign: "center" }} span={24}>
                <img src={boyIcon} alt="" />
              </Col>
              {/* <Col>
                <Select
                  onSelect={(e: any) => setAcademicYear(e)}
                  defaultValue={academicYear}
                >
                  <Select.Option value={academicYear}>
                    {academicYear}
                  </Select.Option>
                </Select>
              </Col> */}

              <Row>
                <Col span={24}>
                  {loadCount > 1 && (
                    <QuestionWithIframe
                      handleLoadCounter={handleSetLoad}
                      questionId={82}
                      width="100%"
                      height="200"
                      nonDownloadable={true}
                    />
                  )}
                </Col>
                <Col style={{ textAlign: "center" }} span={24}>
                  <img src={girlIcon} alt="" />
                </Col>
                <Col span={24}>
                  {loadCount > 1 && (
                    <QuestionWithIframe
                      handleLoadCounter={handleSetLoad}
                      questionId={83}
                      width="100%"
                      height="200"
                      nonDownloadable={true}
                    />
                  )}
                </Col>
                <Col span={24}>
                  <div className="NIPUNheading">
                    Districts With Highest <br /> Jump in Scores
                  </div>
                  <div style={{ height: "550px" }}>
                    {loadCount > 9 && (
                      <QuestionWithIframe
                        handleLoadCounter={handleSetLoad}
                        questionId={123}
                        width="100%"
                        height="550"
                      />
                    )}
                  </div>
                </Col>
                <Col>
                  <div className="NIPUNheading">
                    Districts With Highest Fall in Scores
                  </div>
                  <div style={{ height: "697px" }}>
                    {loadCount > 15 && (
                      <QuestionWithIframe
                        handleLoadCounter={handleSetLoad}
                        questionId={124}
                        width="100%"
                        height="697"
                      />
                    )}
                  </div>
                </Col>
              </Row>
            </Row>
          </Col>
          <Col span={4}>
            <Row>
              {/* <Col
                span={24}
                style={{ textAlign: "center" }}
                className={"refrences"}
              >
                <div>{"Reference "}</div>
                <div>{"Grade A: >=80%  Grade B: 65-80%"}</div>
                <div>{"Grade C: 50-65% Grade D: 35-50%"}</div>
                <div>{"Grade E: <35%"}</div>
              </Col> */}

              <Col span={24}>
                <div className="NIPUNheading">
                  Class-wise Assessment <br />
                  Performance
                </div>
                <div style={{ height: "700px" }}>
                  {loadCount > 3 && (
                    <QuestionWithIframe
                      handleLoadCounter={handleSetLoad}
                      questionId={125}
                      width="100%"
                      height="700"
                    />
                  )}
                </div>
                <div className="navButtonSelected">
                  <p>
                    Average Grade-wise Performance <br /> Distribution (SA1 &
                    SA2)
                  </p>
                </div>

                <Col span={24}>
                  <div style={{ height: "545px" }}>
                    {loadCount > 9 && (
                      <QuestionWithIframe
                        handleLoadCounter={handleSetLoad}
                        questionId={126}
                        width="100%"
                        height="545"
                      />
                    )}
                  </div>
                  <div className="navButtonSelected">
                    <p>
                      {" "}
                      Comparative Performance in <br /> SA1 & SA-2 (Class 1)
                    </p>
                  </div>
                </Col>
                <Col span={24}>
                  <div style={{ height: "480px" }}>
                    {loadCount > 17 && (
                      <QuestionWithIframe
                        handleLoadCounter={handleSetLoad}
                        questionId={127}
                        width="100%"
                        height="480"
                      />
                    )}
                  </div>
                  <div className="navButtonSelected">
                    <p>
                      Comparative Performance in <br /> SA-1 & SA-2 (Class 2)
                    </p>
                  </div>
                </Col>
                <Col span={24}>
                  <div style={{ height: "490px" }}>
                    {loadCount > 19 && (
                      <QuestionWithIframe
                        handleLoadCounter={handleSetLoad}
                        questionId={104}
                        width="100%"
                        height="490"
                      />
                    )}
                  </div>
                  <div className="navButtonSelected">
                    <p>
                      Comparative Performance in <br /> SA-1 & SA-2 (Class 3)
                    </p>
                  </div>
                </Col>
              </Col>
              <Col span={24}>
                <div className="NIPUNheading">District Wise Trends</div>
              </Col>
              <Col span={24}>
                <Col span={24}>
                  <div style={{ height: "510px" }}>
                    {loadCount > 25 && (
                      <QuestionWithIframe
                        handleLoadCounter={handleSetLoad}
                        questionId={143}
                        width="100%"
                        height="510"
                      />
                    )}
                  </div>
                  <div className="navButtonSelected">
                    <p>Top Districts (Class-1)</p>
                  </div>
                </Col>
                <Col span={24}>
                  <div style={{ height: "528px" }}>
                    {loadCount > 29 && (
                      <QuestionWithIframe
                        handleLoadCounter={handleSetLoad}
                        questionId={144}
                        width="100%"
                        height="528"
                      />
                    )}
                  </div>
                  <div className="navButtonSelected">
                    <p>
                      Bottom Districts <br /> (Class-1)
                    </p>
                  </div>
                </Col>
              </Col>
              <Col span={24}>
                <Col span={24}>
                  <div style={{ height: "550px" }}>
                    {loadCount > 31 && (
                      <QuestionWithIframe
                        handleLoadCounter={handleSetLoad}
                        questionId={145}
                        width="100%"
                        height="550"
                      />
                    )}
                  </div>
                  <div className="navButtonSelected">
                    <p>
                      Top Districts <br /> (Class-2)
                    </p>
                  </div>
                </Col>
                <Col span={24}>
                  <div style={{ height: "550px" }}>
                    {loadCount > 33 && (
                      <QuestionWithIframe
                        handleLoadCounter={handleSetLoad}
                        questionId={146}
                        width="100%"
                        height="550"
                      />
                    )}
                  </div>
                  <div className="navButtonSelected">
                    <p>
                      Bottom Districts <br /> (Class-2)
                    </p>
                  </div>
                </Col>
              </Col>
              <Col span={24}>
                <Col span={24}>
                  <div style={{ height: "550px" }}>
                    {loadCount > 35 && (
                      <QuestionWithIframe
                        handleLoadCounter={handleSetLoad}
                        questionId={148}
                        width="100%"
                        height="550"
                      />
                    )}
                  </div>
                  <div className="navButtonSelected">
                    <p>
                      Top Districts <br /> (Class-3)
                    </p>
                  </div>
                </Col>
              </Col>
            </Row>
            {/* <Row>
              <Col span={24}>
              {loadCount > 0 && (  
              <QuestionWithIframe questionId={5} width="100%" height="500" />
              <  handleLoadCounter={handleSetLoad}/Col>
            </Row> */}
          </Col>
          <Col span={4}>
            <Row>
              <Col span={24}>
                <div className="NIPUNheading">
                  Subject-wise Assessment <br /> Performance
                </div>
              </Col>
            </Row>
            <Row>
              <Col span={24}>
                <div style={{ height: "700px" }}>
                  {loadCount > 3 && (
                    <QuestionWithIframe
                      handleLoadCounter={handleSetLoad}
                      questionId={129}
                      width="100%"
                      height="700"
                    />
                  )}
                </div>
                <div className="navButtonSelected">
                  <p>
                    Subject wise change in average <br /> score across SAs
                  </p>
                </div>
              </Col>
              <Col span={24}>
                <div style={{ height: "545px" }}>
                  {loadCount > 11 && (
                    <QuestionWithIframe
                      handleLoadCounter={handleSetLoad}
                      questionId={130}
                      width="100%"
                      height="545"
                    />
                  )}
                </div>
                <div className="navButtonSelected">
                  <p>
                    Comparative Performance Subject-
                    <br />
                    wise (Class 1)
                  </p>
                </div>
              </Col>
              <Col span={24}>
                <div style={{ height: "480px" }}>
                  {loadCount > 17 && (
                    <QuestionWithIframe
                      handleLoadCounter={handleSetLoad}
                      questionId={150}
                      width="100%"
                      height="480"
                    />
                  )}
                </div>
                <div className="navButtonSelected">
                  <p>
                    Comparative Performance Subject-
                    <br />
                    wise (Class 2)
                  </p>
                </div>
              </Col>
              <Col span={24}>
                <div style={{ height: "490px" }}>
                  {loadCount > 19 && (
                    <QuestionWithIframe
                      handleLoadCounter={handleSetLoad}
                      questionId={132}
                      width="100%"
                      height="490"
                    />
                  )}
                </div>
                <div className="navButtonSelected">
                  <p>
                    Comparative Performance Subject-
                    <br />
                    wise(Class 3)
                  </p>
                </div>
              </Col>
              <Col span={24}>
                <div className="NIPUNheading">NIPUN Lakshya Analysis</div>
              </Col>
              <Col span={24}>
                <div style={{ height: "510px" }}>
                  {loadCount > 21 && (
                    <QuestionWithIframe
                      handleLoadCounter={handleSetLoad}
                      questionId={139}
                      width="100%"
                      height="510"
                    />
                  )}
                </div>
                <div className="navButtonSelected">
                  <p>Class-wise NIPUN Students</p>
                </div>
              </Col>
              <Col span={24}>
                <div style={{ height: "528px" }}>
                  {loadCount > 23 && (
                    <QuestionWithIframe
                      handleLoadCounter={handleSetLoad}
                      questionId={140}
                      width="100%"
                      height="528"
                    />
                  )}
                </div>
                <div className="navButtonSelected">
                  <p>
                    Percentage Students NIPUN in <br /> Maths(Class- 1)
                  </p>
                </div>
              </Col>
              <Col span={24}>
                <div style={{ height: "550px" }}>
                  {loadCount > 23 && (
                    <QuestionWithIframe
                      handleLoadCounter={handleSetLoad}
                      questionId={141}
                      width="100%"
                      height="550"
                    />
                  )}
                </div>
                <div className="navButtonSelected">
                  <p>
                    Percentage Students NIPUN in <br /> Maths(Class- 2)
                  </p>
                </div>
              </Col>
              <Col span={24}>
                <div style={{ height: "550px" }}>
                  {loadCount > 25 && (
                    <QuestionWithIframe
                      handleLoadCounter={handleSetLoad}
                      questionId={142}
                      width="100%"
                      height="550"
                    />
                  )}
                </div>
                <div className="navButtonSelected">
                  <p>
                    Percentage Students NIPUN in <br /> Maths(Class- 3)
                  </p>
                </div>
              </Col>
              <Col span={24}>
                <div style={{ height: "550px" }}>
                  {loadCount > 35 && (
                    <QuestionWithIframe
                      handleLoadCounter={handleSetLoad}
                      questionId={149}
                      width="100%"
                      height="550"
                    />
                  )}
                </div>
                <div className="navButtonSelected">
                  <p>
                    Bottom Districts <br /> (Class-3)
                  </p>
                </div>
              </Col>
            </Row>
          </Col>
          <Col span={5}>
            <Row>
              <Col span={24}>
                <div className="NIPUNheading">
                  NIPUN Lakshya <br /> Analysis
                </div>
              </Col>
            </Row>
            <Row>
              <Col span={24} style={{ display: "flex" }}>
                {loadCount > 5 && (
                  <QuestionWithIframe
                    handleLoadCounter={handleSetLoad}
                    questionId={133}
                    width="49%"
                    height="280"
                    nonDownloadable={true}
                  />
                )}
                {loadCount > 5 && (
                  <QuestionWithIframe
                    handleLoadCounter={handleSetLoad}
                    questionId={136}
                    width="51%"
                    height="280"
                    nonDownloadable={true}
                  />
                )}
              </Col>
              <Col span={24} style={{ display: "flex" }}>
                {loadCount > 11 && (
                  <QuestionWithIframe
                    handleLoadCounter={handleSetLoad}
                    questionId={134}
                    width="50%"
                    height="280"
                    nonDownloadable={true}
                  />
                )}
                {loadCount > 13 && (
                  <QuestionWithIframe
                    handleLoadCounter={handleSetLoad}
                    questionId={135}
                    width="50%"
                    height="280"
                    nonDownloadable={true}
                  />
                )}
              </Col>
            </Row>
            <Row>
              <Col span={24}>
                <div style={{ height: "2048px" }}>
                  {loadCount > 15 && (
                    <QuestionWithIframe
                      handleLoadCounter={handleSetLoad}
                      questionId={138}
                      width="100%"
                      height="2048"
                    />
                  )}
                </div>
                <div className="navButtonSelected">
                  <p>
                    District Wise Students Practising Atleast
                    <br /> Once a Month
                  </p>
                </div>
              </Col>
              <Col span={24}>
                <div style={{ height: "1192px" }}>
                  {loadCount > 27 && (
                    <QuestionWithIframe
                      handleLoadCounter={handleSetLoad}
                      questionId={137}
                      width="100%"
                      height="1192"
                    />
                  )}
                </div>
                <div className="navButtonSelected">
                  <p>
                    District wise NIPUN <br /> Students
                  </p>
                </div>
              </Col>
            </Row>
            <Row style={{ display: "flex" }}>
              <Col span={24}>
                {/* <div className="NIPUNheading">
                  Oral Reading Fluency Analysis
                </div> */}
                <div style={{ height: "550px" }}>
                  {loadCount > 29 && (
                    <QuestionWithIframe
                      handleLoadCounter={handleSetLoad}
                      questionId={15}
                      width="100%"
                      height="550"
                    />
                  )}
                </div>
                <div className="navButtonSelected">
                  <p>
                    Word Bucket Performance <br /> (Class-1)
                  </p>
                </div>
              </Col>
              <Col span={24}>
                <div style={{ height: "550px" }}>
                  {loadCount > 31 && (
                    <QuestionWithIframe
                      handleLoadCounter={handleSetLoad}
                      questionId={16}
                      width="100%"
                      height="550"
                    />
                  )}
                </div>

                <div className="navButtonSelected">
                  <p>
                    Word Bucket Performance <br /> (Class-2)
                  </p>
                </div>
              </Col>
              <Col span={24}>
                <div style={{ height: "550px" }}>
                  {loadCount > 33 && (
                    <QuestionWithIframe
                      handleLoadCounter={handleSetLoad}
                      questionId={16}
                      width="100%"
                      height="550"
                    />
                  )}
                </div>
                <div className="navButtonSelected">
                  <p>
                    Word Bucket Performance <br /> (Class-3)
                  </p>
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

export default StudentAssessmentPerformanceGrade1_3;
