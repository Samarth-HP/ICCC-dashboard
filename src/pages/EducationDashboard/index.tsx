import React, { FC, useState, useEffect } from "react";
import { Card, Col, Layout, Row, Divider, Image, Select, Form } from "antd";
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
import API_SERVICE from "../../services/api-service";
import AdministrativeOverview from "./Administrative Overview";
import StudentAssessmentPerformanceGrade1_3 from "./Student Assessment Performance (Grade 1-3)";
import StudentAssessmentPerformanceGrade4_8 from "./Student Assessment Performance (Grade 4-8)";
import { useHistory } from "react-router-dom";

const sample_data = {
  schools: {
    GPS: 10601,
    GMS: 1947,
    GHS: 932,
    GSSS: 1868,
  },
};

const EducationPortal: FC = () => {
  const history = useHistory();
  const [selectedButton, setSelectedButton] = useState(2);
  const [marker, setMarker] = useState("Districts");
  const [markerData, setMarkerData] = useState({
    shouldClusterMarkers: true,
    postions: [],
  });
  const onButtonClick = (id: any) => {
    // console.log(id);
    setSelectedButton(id);
  };
  const onSetMarker = (id: any) => {
    // console.log(id);
    setMarker(id);
  };

  const formatMarkerData = (data: any) => {
    //
    const formattedData = data
      // .filter((item: any, index: number) => index <= 20000)
      .map((item: any, index: number) => {
        return {
          icon: "https://unpkg.com/leaflet@1.8.0/dist/images/marker-icon-2x.png",
          color: "purple",
          tooltipCSS: {
            color: "#ff0000",
          },
          tooltip: "This is the marker tooltip",
          position: [item.latitude, item.longitude],
          district: item?.district,
          block: item?.block,
          school: item?.school_name,
          ...item,
        };
      });
    setMarkerData({
      shouldClusterMarkers: true,
      postions: formattedData,
    });
  };
  const getMarkerData = async (marker: any) => {
    let data: any = [];
    const params: any = {
      district: "SIRMAUR",
    };
    if (marker === "Districts") {
      data = await API_SERVICE.getDistrictMarkerData(params);
    }

    if (marker === "Blocks") {
      data = await API_SERVICE.getBlockMarkerData(params);
    }

    if (marker === "Schools") {
      data = await API_SERVICE.getSchoolMarkerData(params);
    }

    if (marker === "Search") {
      data = await API_SERVICE.getSchoolMarkerData(params);
    }
    formatMarkerData(data.data.rows);
  };

  useEffect(() => {
    getMarkerData("Districts");
  }, []);

  return (
    <Layout className={"layout-wrapper home-wrapper"}>
      <Content style={{ padding: "10px" }}>
        <Row>
          <Col span={6}>
            <Button
              className={
                selectedButton == 2 ? "navButtonSelected" : "navButton"
              }
              onClick={() => {
                onButtonClick(2);
              }}
              style={{ fontSize: "16px",fontWeight:'bold'}}
            >
              Student Assessment Performance (Grade 4-8)
            </Button>
          </Col>
          <Col span={6}>
            <Button
              className={
                selectedButton == 1 ? "navButtonSelected" : "navButton"
              }
              onClick={() => {
                onButtonClick(1);
              }}
              style={{ fontSize: "16px",fontWeight:'bold'}}
            >
              Student Assessment Performance (Grade 1-3)
            </Button>
          </Col>
          <Col
            span={6}
            onClick={() => {
              onButtonClick(3);
            }}
          >
            <Button
              className={
                selectedButton == 3 ? "navButtonSelected" : "navButton"
              }
              style={{ fontSize: "16px",fontWeight:'bold'}}
            >
              Administrative Overview
            </Button>
          </Col>
          <Col style={{ display: "flex" }} span={6}>
            <div>
              <Button
                style={{
                  backgroundColor: "#014C3D",
                  color: "white",
                  textDecoration: "underline",
                  fontSize: "14px",
                  marginRight: "10px",
                  fontWeight:'bold'
                }}
                onClick={() => {
                  history.push("/detailed-dashboard");
                }}
              >
                VIEW DETAILED DASHBOARDS
              </Button>
            </div>

            <Select className="forSelect" defaultValue={"2022-2023"}>
              <Select.Option value={"2022-2023"}>{"2022-2023"}</Select.Option>
            </Select>

          </Col>
        </Row>
        <Row>
          {selectedButton == 1 && (
            <Col>
              <StudentAssessmentPerformanceGrade1_3
                markerData={markerData}
                getMarkerData={getMarkerData}
              />
            </Col>
          )}
          {selectedButton == 2 && (
            <Col>
              <StudentAssessmentPerformanceGrade4_8
                markerData={markerData}
                getMarkerData={getMarkerData}
              />
            </Col>
          )}
          {selectedButton == 3 && (
            <Col>
              <AdministrativeOverview
                //@ts-ignore
                markerData={markerData}
                getMarkerData={getMarkerData}
              />
            </Col>
          )}
        </Row>
      </Content>
    </Layout>
  );
};
export default EducationPortal;
