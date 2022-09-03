import React, { FC, useEffect, useState } from "react";
import { Card, Col, Layout, Row, Image, Button, Select, Input } from "antd";

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
import MapComponent from "../../../components/MapComponent/MapComponent";
import config from "./config.json";
import API_SERVICE from "../../../services/api-service";
import QuestionWithIframe from "../../../components/QuestionWIthIframe";

const { Search } = Input;

const SchoolStatisticsAndEnrolment: FC = (props: any) => {
  const [marker, setMarker] = useState("Districts");
  const [markerData, setMarkerData] = useState(props.markerData);

  const handleSearchByUDISE = async (val: string) => {
    const params = {
      udise: val,
    };
    // const data = await API_SERVICE.searchSchoolData(params);
    // console.log('data', data);
    // const data = await API_SERVICE.searchSchoolData(params);
    const res = await API_SERVICE.getSchoolMarkerData(params);
    const data = res.data.rows.find((item: any) => {
      return item?.Udise_Code == val;
    });

    const formattedData = [
      {
        icon: "https://unpkg.com/leaflet@1.8.0/dist/images/marker-icon-2x.png",
        color: "purple",
        tooltipCSS: {
          color: "#ff0000",
        },
        tooltip: "This is the marker tooltip",
        position: [data.latitude, data.longitude],
        district: data?.district,
        block: data?.block,
        school: data?.school_name,
        ...data,
      },
    ];

    setMarkerData({
      shouldClusterMarkers: true,
      postions: formattedData,
    });
  };

  useEffect(() => {
    if (props.markerData) {
      setMarkerData(props.markerData);
    }
  }, [props.markerData]);

  return (
    <Layout>
      <Content>
        <Row>
          <Col span={24}>
            <Row>
              <Col span={12}>
                <QuestionWithIframe questionId={29} width="100%" height="200" nonDownloadable={true} />
              </Col>
              <Col span={12}>
              <QuestionWithIframe questionId={33} width="100%" height="200" nonDownloadable={true} />
              </Col>
            </Row>
            <Row>
              <Col span={12}>
              <QuestionWithIframe questionId={40} width="100%" height="200" nonDownloadable={true} />
              </Col>
              <Col span={12}>
              <QuestionWithIframe questionId={34} width="100%" height="200" nonDownloadable={true} />
              </Col>
            </Row>
          </Col>
        </Row>
        <Row style={{ display: "flex" }}>
          <Col span={24}>
            <div className="NIPUNheading">School Statistics</div>
          </Col>

          {/* <Col span={12}>
              <div className="NIPUNheading">Student Enrolment</div>
            </Col> */}
        </Row>
        <Row>
          <Col span={12}>
          <QuestionWithIframe questionId={30} width="100%" height="200" />
            <Button className="navButtonSelected">
              <p>Category Wise Number of Schools</p>
            </Button>
          </Col>
          <Col span={12}>
          <QuestionWithIframe questionId={32} width="100%" height="200" />
            <Button className="navButtonSelected">
            <p>Session wise Number of Schools</p>
            </Button>
          </Col>
        </Row>
        <Row>
          <Col span={24}>
          <QuestionWithIframe questionId={61} width="100%" height="200" />
            <Button className="navButtonSelected">
            <p>District wise, Category wise, Number of Schools</p>
            </Button>
          </Col>
        </Row>
        <Row>
          <Col span={24}>
          <QuestionWithIframe questionId={72} width="100%" height="200" />
            <Button className="navButtonSelected">
            <p>Month-wise Review Meeting Compliance</p>
            </Button>
          </Col>
        </Row>
        <Row style={{ display: "flex" }}>
          <Col span={24}>
            <div className="NIPUNheading">Student Enrolment</div>
          </Col>
        </Row>
        <Row>
          <Col span={12}>
          <QuestionWithIframe questionId={38} width="100%" height="200" />
            <div className="navButtonSelected">
              {/* Enrolment slab wise school distribution */}
              <p>District-wise Enrolment by Level of Education</p>
            </div>
          </Col>

          <Col span={12}>
          <QuestionWithIframe questionId={35} width="100%" height="200" />
            <div className="navButtonSelected">
            <p>Student Enrolment by Level of Education</p>
            </div>
          </Col>
        </Row>

        <Row style={{ display: "flex" }}>
          <Col span={12}>
          <QuestionWithIframe questionId={36} width="100%" height="200" nonDownloadable={true}  />
          </Col>
          <Col span={12}>
          <QuestionWithIframe questionId={37} width="100%" height="200" nonDownloadable={true}/>
          </Col>
        </Row>
        <Row style={{ display: "flex" }}>
          <Col span={12}>
          <QuestionWithIframe questionId={43} width="100%" height="300" />
            <div className="navButtonSelected">
            <p>Pupil-Teacher ratio across level of education</p>
            </div>
          </Col>
          <Col span={12}>
          <QuestionWithIframe questionId={53} width="100%" height="300" />
            <Button className="navButtonSelected">
            <p>Grade-wise Enrolment distribution</p>
            </Button>
          </Col>
        </Row>
        <Row>
          <Col span={24}>
          <QuestionWithIframe questionId={54} width="100%" height="200" />
            <Button className="navButtonSelected">
            <p>Stream-wise Enrolment distribution</p>
            </Button>
          </Col>
        </Row>
        <Row>
          {/* <Col span={4}>
            <Select defaultValue={"SA-1"} style={{ width: "100%" }}>
              <Select.Option value={"SA-1"}>{"SA-1"}</Select.Option>
              <Select.Option value={"SA-2"}>{"SA-2"}</Select.Option>
            </Select>
          </Col> */}
          <Col span={6}>
            <Button
              className={
                marker == "Districts" ? "navButtonSelected" : "navButton"
              }
              onClick={() => {
                props.getMarkerData("Districts");
                setMarker("Districts");
              }}
            >
              <p>Districts</p>
            </Button>
          </Col>
          <Col span={6}>
            <Button
              className={marker == "Blocks" ? "navButtonSelected" : "navButton"}
              onClick={() => {
                props.getMarkerData("Blocks");
                setMarker("Blocks");
              }}
            >
              <p>Blocks</p>
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
          <Col span={6}>
            <Button
              className={
                marker == "Schools" ? "navButtonSelected" : "navButton"
              }
              onClick={() => {
                props.getMarkerData("Schools");
                setMarker("Schools");
              }}
            >
              <p>Schools</p>
            </Button>
          </Col>
          <Col span={6}>
            <Search
              //@ts-ignore
              onSearch={(val: any) => {
                handleSearchByUDISE(val);
                // console.log(val);
                setMarker("Schools");
              }}
              placeholder="Search UDISE"
            />
          </Col>
        </Row>
        <Row>
          <Col span={24}>
            <MapComponent config={config} markers={markerData} />
          </Col>
        </Row>
      </Content>
    </Layout>
  );
};

export default SchoolStatisticsAndEnrolment;
