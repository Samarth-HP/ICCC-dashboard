import React, { FC, useEffect, useState } from "react";
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
import boyIcon from "../../assets/boyIcon.svg";
import girlIcon from "../../assets/girlIcon.svg";

import FooterLogo from "../../assets/footer_logo.png";
import FooterRightLogo from "../../assets/footer_Samarth_Himachal_logo.png";
import { Button } from "antd/lib/radio";
import MapComponent from "../../components/MapComponent/MapComponent.jsx";
import { useHistory } from "react-router-dom";
import parameters from "../../services/parameters";

const sample_data = {
  schools: {
    GPS: 10601,
    GMS: 1947,
    GHS: 932,
    GSSS: 1868,
  },
};

const StudentAssessmentPerformanceGrade4_8 = (props: any) => {
  const [selectedButton, setSelectedButton] = useState(1);
  const [loadCount, setLoadCount] = useState(0);
  const [selected, setSelected] = useState("SA1");
  const [marker, setMarker] = useState("Districts");
  const [config, setConfig] = useState([]);
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
  const onButtonClick = (id: any) => {
    // console.log(id);
    setSelectedButton(id);
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
  return (
    <Layout className={"layout-wrapper home-wrapper"}>
      <Content style={{ padding: "10px" }}>
        <Row>
          <Col span={9}>
            <Row>
              <Col span={24}>
                <div style={{ display: "flex" }}>
                  <QuestionWithIframe
                    questionId={84}
                    width="46%"
                    height="300"
                    nonDownloadable={true}
                    handleLoadCounter={handleSetLoad}
                  />
                  <QuestionWithIframe
                    questionId={85}
                    width="24%"
                    height="300"
                    nonDownloadable={true}
                    handleLoadCounter={handleSetLoad}
                  />
                  {loadCount > 1 && (
                    <>
                      <QuestionWithIframe
                        questionId={86}
                        width="15%"
                        height="300"
                        nonDownloadable={true}
                        handleLoadCounter={handleSetLoad}
                      />
                      <QuestionWithIframe
                        questionId={87}
                        width="15%"
                        height="300"
                        nonDownloadable={true}
                        handleLoadCounter={handleSetLoad}
                      />
                    </>
                  )}
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
                <div style={{ height: "1835px" }}>
                  {loadCount > 7 && (
                    <QuestionWithIframe
                      questionId={97}
                      width="100%"
                      height="1835"
                      handleLoadCounter={handleSetLoad}
                    />
                  )}
                </div>
                <div
                  style={{ lineHeight: "3.1" }}
                  className="navButtonSelected"
                >
                  <p>Class-4</p>
                </div>
              </Col>
              <Col span={12}>
                <div style={{ height: "1835px" }}>
                  {loadCount > 9 && (
                    <QuestionWithIframe
                      questionId={98}
                      width="100%"
                      height="1835"
                      handleLoadCounter={handleSetLoad}
                    />
                  )}
                </div>
                <div
                  style={{ lineHeight: "3.1" }}
                  className="navButtonSelected"
                >
                  <p>Class 5</p>
                </div>
              </Col>
            </Row>
            <Row>
              <Col span={12}>
                <div style={{ height: "1295px" }}>
                  {loadCount > 13 && (
                    <QuestionWithIframe
                      questionId={99}
                      width="100%"
                      height="1295"
                      handleLoadCounter={handleSetLoad}
                    />
                  )}
                </div>
                <div className="navButtonSelected">
                  <p style={{ lineHeight: "3.1" }}>Class 6</p>
                </div>
              </Col>
              <Col span={12}>
                <div style={{ height: "1295px" }}>
                  {loadCount > 13 && (
                    <QuestionWithIframe
                      questionId={100}
                      width="100%"
                      height="1295"
                      handleLoadCounter={handleSetLoad}
                    />
                  )}
                </div>
                <div className="navButtonSelected">
                  <p style={{ lineHeight: "3.1" }}>Class 7</p>
                </div>
              </Col>
            </Row>
            <Row>
              <Col span={24}>
                <div style={{ height: "1298px" }}>
                  {loadCount > 19 && (
                    <QuestionWithIframe
                      questionId={101}
                      width="100%"
                      height="1298"
                      handleLoadCounter={handleSetLoad}
                    />
                  )}
                </div>
                <div
                  style={{ lineHeight: "3.2" }}
                  className="navButtonSelected"
                >
                  <p>Class 8</p>
                </div>
              </Col>
            </Row>
            <Row>
              <Col span={24}>
                <Row>
                  <Col span={3}>
                    <select
                      className="forSelect"
                      onSelect={(e: any) => {
                        setSelected(e);
                        props.setSelectedAssessment(e);
                      }}
                      defaultValue={"SA1"}
                      style={{ width: "100%" }}
                    >
                      <option value={"SA1"}>{"SA-1"}</option>
                      <option value={"SA2"}>{"SA-2"}</option>
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
                  <Col span={7}>
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
                  {/* <Col span={5}>
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
                  </Col> */}
                  <Col span={7}>
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
                      <MapComponent
                        at={selected}
                        config={config}
                        markers={props.markerData}
                        type={2}
                      />
                    </div>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Col>
          <Col span={4}>
            <Row>
              <Col span={24}>
                <div className="NIPUNheading">
                  Districts with highest jump in <br /> scores
                </div>
              </Col>
            </Row>
            <Col style={{ textAlign: "center" }} span={24}>
              <img src={boyIcon} alt="" />
            </Col>
            <Row>
              <Col span={24}>
                {loadCount > 3 && (
                  <QuestionWithIframe
                    questionId={89}
                    width="100%"
                    height="200"
                    nonDownloadable={true}
                    handleLoadCounter={handleSetLoad}
                  />
                )}
              </Col>
              <Col style={{ textAlign: "center" }} span={24}>
                <img src={girlIcon} alt="" />
              </Col>
              <Col span={24}>
                {loadCount > 3 && (
                  <QuestionWithIframe
                    questionId={91}
                    width="100%"
                    height="200"
                    nonDownloadable={true}
                    handleLoadCounter={handleSetLoad}
                  />
                )}
              </Col>
              <Col span={24}>
                <div style={{ height: "1411px" }}>
                  {loadCount > 3 && (
                    <QuestionWithIframe
                      questionId={102}
                      width="100%"
                      height="1411"
                      handleLoadCounter={handleSetLoad}
                    />
                  )}
                </div>
                <div className="navButtonSelected">
                  <p>
                    Districts with highest
                    <br></br>
                    jump in scores
                  </p>
                </div>
              </Col>
              <Col span={24}>
                <div style={{ height: "1293px" }}>
                  {loadCount > 15 && (
                    <QuestionWithIframe
                      questionId={117}
                      width="100%"
                      height="1293"
                      handleLoadCounter={handleSetLoad}
                    />
                  )}
                </div>
                <div className="navButtonSelected">
                  <p>
                    Subject wise change in average <br /> score across SAs
                  </p>
                </div>
              </Col>
            </Row>
            <Row>
              <Col span={24}>
                <div style={{ height: "1299px" }}>
                  {loadCount > 19 && (
                    <QuestionWithIframe
                      questionId={103}
                      width="100%"
                      height="1299"
                      handleLoadCounter={handleSetLoad}
                    />
                  )}
                </div>
                <div className="navButtonSelected">
                  <p>
                    Districts with highest <br /> fall in scores
                  </p>
                </div>
              </Col>
              <Col span={24}>
                <div style={{ height: "864px" }}>
                  {loadCount > 23 && (
                    <QuestionWithIframe
                      questionId={106}
                      width="100%"
                      height="864"
                      handleLoadCounter={handleSetLoad}
                    />
                  )}
                </div>
                <div className="navButtonSelected">
                  <p>
                    Average Grade-wise Performance <br />
                    distribution (SA-1 & SA-2)
                  </p>
                </div>
              </Col>
            </Row>
          </Col>
          <Col span={3}>
            <Row>
              {/* <Col span={24}>
                <div>
                  <div className="NIPUNheading">
                    Class-wise Assessment Performance
                  </div>

                  <Col span={24} style={{ display: "flex" }}>
                    <Col span={12}>
                     {loadCount > 3 &&  
                    <QuestionWithIframe
                        questionId={120}
                        width="100%"
                        height="350"
                        handleLoadCounter={handleSetLoad}
                      />}
                      <Button className="navButtonSelected">Class 1</Button>

                      </Col>
                    <Col span={12}>
                     {loadCount > 3 &&  
                    <QuestionWithIframe
                        questionId={121}
                        width="100%"
                        height="350"
                        handleLoadCounter={handleSetLoad}
                      />}
                      <Button className="navButtonSelected">Class 2</Button>

                      </Col>
                  </Col>
                  <Col span={24}>
                   {loadCount > 3 &&  
                  <QuestionWithIframe
                      questionId={122}
                      width="100%"
                      height="350"
                      handleLoadCounter={handleSetLoad}
                    />}
                    <Button className="navButtonSelected">Class 3</Button>

                    </Col>
                </div>
              </Col> */}
            </Row>
            <Row>
              <Col span={24}>
                <div className="NIPUNheading">
                  Class-wise Assessment <br /> Performance
                </div>
              </Col>
              <Col span={24}>
                <div style={{ height: "900px" }}>
                  {loadCount > 5 && (
                    <QuestionWithIframe
                      questionId={104}
                      width="100%"
                      height="900"
                      handleLoadCounter={handleSetLoad}
                    />
                  )}
                </div>
                <div className="navButtonSelected">
                  <p>
                    Comparative Performance <br /> in SA-1 and SA-2 (Class 4)
                  </p>
                </div>
              </Col>
            </Row>
            <Row>
              <Col span={24}>
                <div style={{ height: "1057px" }}>
                  {loadCount > 9 && (
                    <QuestionWithIframe
                      questionId={105}
                      width="100%"
                      height="1057"
                      handleLoadCounter={handleSetLoad}
                    />
                  )}
                </div>
                <div className="navButtonSelected">
                  <p>
                    Comparative Performance
                    <br />
                    in SA-1 and SA-2 (Class 5)
                  </p>
                </div>
              </Col>
            </Row>
            <Row>
              <Col span={24}>
                <div style={{ height: "1293px" }}>
                  {loadCount > 15 && (
                    <QuestionWithIframe
                      questionId={107}
                      width="100%"
                      height="1293"
                      handleLoadCounter={handleSetLoad}
                    />
                  )}
                </div>
                <div className="navButtonSelected">
                  <p>
                    Comparative Performance <br /> in SA-1 and SA-2 (Class 6)
                  </p>
                </div>
              </Col>
            </Row>
            <Row>
              <Col span={24}>
                <div style={{ height: "1298px" }}>
                  {loadCount > 21 && (
                    <QuestionWithIframe
                      questionId={108}
                      width="100%"
                      height="1298"
                      handleLoadCounter={handleSetLoad}
                    />
                  )}
                </div>
                <div className="navButtonSelected">
                  <p>
                    Comparative Performance <br /> in SA-1 and SA-2 (Class 7)
                  </p>
                </div>
              </Col>
            </Row>
            <Row>
              <Col span={24}>
                <div style={{ height: "864px" }}>
                  {loadCount > 25 && (
                    <QuestionWithIframe
                      questionId={110}
                      width="100%"
                      height="864"
                      handleLoadCounter={handleSetLoad}
                    />
                  )}
                </div>
                <div className="navButtonSelected">
                  <p>
                    Comparative Performance <br /> in SA-1 and SA-2 (Class 8)
                  </p>
                </div>
              </Col>
            </Row>
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
                <div style={{ height: "900px" }}>
                  {loadCount > 5 && (
                    <QuestionWithIframe
                      questionId={111}
                      width="100%"
                      height="900"
                      handleLoadCounter={handleSetLoad}
                    />
                  )}
                </div>
                <div className="navButtonSelected">
                  <p>
                    Subject wise average score across <br /> SAs (Class 4)
                  </p>
                </div>
              </Col>
              <Col span={24}>
                <div style={{ height: "1057px" }}>
                  {loadCount > 11 && (
                    <QuestionWithIframe
                      questionId={112}
                      width="100%"
                      height="1057"
                      handleLoadCounter={handleSetLoad}
                    />
                  )}
                </div>
                <div className="navButtonSelected">
                  <p>
                    Subject wise average score across <br /> SAs (Class 5)
                  </p>
                </div>
              </Col>
              <Col span={24}>
                <div style={{ height: "1293px" }}>
                  {loadCount > 17 && (
                    <QuestionWithIframe
                      questionId={113}
                      width="100%"
                      height="1293"
                      handleLoadCounter={handleSetLoad}
                    />
                  )}
                </div>
                <div className="navButtonSelected">
                  <p>
                    Subject wise average score across <br /> SAs (Class 6)
                  </p>
                </div>
              </Col>
              <Col span={24}>
                <div style={{ height: "1298px" }}>
                  {loadCount > 21 && (
                    <QuestionWithIframe
                      questionId={111}
                      width="100%"
                      height="1298"
                      handleLoadCounter={handleSetLoad}
                    />
                  )}
                </div>
                <div className="navButtonSelected">
                  <p>
                    Subject wise average score across <br /> SAs (Class 7)
                  </p>
                </div>
              </Col>
              <Col span={24}>
                <div style={{ height: "864px" }}>
                  {loadCount > 25 && (
                    <QuestionWithIframe
                      questionId={115}
                      width="100%"
                      height="864"
                      handleLoadCounter={handleSetLoad}
                    />
                  )}
                </div>
                <div className="navButtonSelected">
                  <p>
                    Subject wise average score across <br /> SAs (Class 8)
                  </p>
                </div>
              </Col>
            </Row>
          </Col>
          <Col span={4}>
            <Col span={24}>
              <div className="NIPUNheading">
                Class-wise weakest Learning <br />
                Outcomes across SAs
              </div>
              <Col span={24}>
                <div style={{ height: "900px" }}>
                  {loadCount > 7 && (
                    <QuestionWithIframe
                      questionId={152}
                      width="100%"
                      height="900"
                      handleLoadCounter={handleSetLoad}
                    />
                  )}
                </div>
                <div className="navButtonSelected">
                  <p>
                    Weakest Learning Outcomes (Class <br />
                    4)
                  </p>
                </div>
              </Col>
              <Col span={24}>
                <div style={{ height: "1057px" }}>
                  {loadCount > 11 && (
                    <QuestionWithIframe
                      questionId={153}
                      width="100%"
                      height="1057"
                      handleLoadCounter={handleSetLoad}
                    />
                  )}
                </div>
                <div className="navButtonSelected">
                  <p>
                    Weakest Learning Outcomes (Class <br />
                    5)
                  </p>
                </div>
              </Col>
              <Col span={24}>
                <div style={{ height: "1293px" }}>
                  {loadCount > 17 && (
                    <QuestionWithIframe
                      questionId={154}
                      width="100%"
                      height="1293"
                      handleLoadCounter={handleSetLoad}
                    />
                  )}
                </div>
                <div className="navButtonSelected">
                  <p>
                    Weakest Learning Outcomes (Class <br /> 6)
                  </p>
                </div>
              </Col>
              <Col span={24}>
                <div style={{ height: "1298px" }}>
                  {loadCount > 23 && (
                    <QuestionWithIframe
                      questionId={155}
                      width="100%"
                      height="1298"
                      handleLoadCounter={handleSetLoad}
                    />
                  )}
                </div>
                <div className="navButtonSelected">
                  <p>
                    Weakest Learning Outcomes (Class <br /> 7)
                  </p>
                </div>
              </Col>
              <Col span={24}>
                <div style={{ height: "864px" }}>
                  {loadCount > 27 && (
                    <QuestionWithIframe
                      questionId={156}
                      width="100%"
                      height="864"
                      handleLoadCounter={handleSetLoad}
                    />
                  )}
                </div>
                <div className="navButtonSelected">
                  <p>
                    Weakest Learning Outcomes (Class <br /> 8)
                  </p>
                </div>
              </Col>
            </Col>
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
