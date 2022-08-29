import React, {FC, useEffect, useState} from "react";
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

const { Search } = Input;

const SchoolStatisticsAndEnrolment: FC = (props: any) => {
  const [marker, setMarker] = useState("Districts");
  const [markerData, setMarkerData] = useState(props.markerData);


  const handleSearchByUDISE = async (val: string) => {
    const params = {
      udise: val
    }
    const data = await API_SERVICE.searchSchoolData(params);
    console.log('data', data);
  }

  useEffect(() => {
    if (props.markerData) {
      setMarkerData(props.markerData);
    }
  }, [props.markerData])

  return (
    <Layout>
      <Content>
        <Row>
          <Col span={24}>
            <Row>
              <Col span={12}>
                <iframe
                  src="http://167.71.234.32:3000/public/question/5b7445a3-7080-4809-a155-1f80c8ec11d5"
                  frameBorder="0"
                  width="100%"
                  height="200"
                  allowTransparency
                ></iframe>
              </Col>
              <Col span={12}>
                <iframe
                  src="http://167.71.234.32:3000/public/question/a5f088e7-ab7f-4597-90ed-f08601603341"
                  frameBorder="0"
                  width="100%"
                  height="200"
                  allowTransparency
                ></iframe>
              </Col>
            </Row>
            <Row>
              <Col span={12}>
                <iframe
                  src="http://167.71.234.32:3000/public/question/d3262f4f-6ff9-445d-8ad6-8011031b4f9d"
                  frameBorder="0"
                  width="100%"
                  height="200"
                  allowTransparency
                ></iframe>
              </Col>
              <Col span={12}>
                <iframe
                  src="http://167.71.234.32:3000/public/question/405d95a9-16c0-4a92-bbcf-3d3f41e1752e"
                  frameBorder="0"
                  width="100%"
                  height="200"
                  allowTransparency
                ></iframe>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row style={{ display: "flex" }}>
          <Col span={12}>
            <div className="NIPUNheading">School Statistics</div>
          </Col>
          <Col span={12}>
            <div className="NIPUNheading">Student Enrolment</div>
          </Col>
        </Row>
        <Row>
          <Col span={12}>
            <iframe
              src="http://167.71.234.32:3000/public/question/261ab950-e796-4607-b681-76936092cdc6"
              frameBorder="0"
              width="100%"
              height="200"
              allowTransparency
            ></iframe>
            <Button className="navButtonSelected">
              Category Wise Number of Schools
            </Button>
          </Col>
          <Col span={12}>
            <iframe
              src="http://167.71.234.32:3000/public/question/814c83b4-dd3e-45cc-9235-ca7d50437311"
              frameBorder="0"
              width="100%"
              height="200"
              allowTransparency
            ></iframe>
            <Button className="navButtonSelected">
              Student Enrolment by Level of Education
            </Button>
          </Col>
        </Row>
        <Row>
          <Col span={24}>
            <iframe
              src="http://167.71.234.32:3000/public/question/8cfd8bb3-a219-4594-b731-e15ca3e064cb"
              frameBorder="0"
              width="100%"
              height="250"
              allowTransparency
            ></iframe>
            <Button className="navButtonSelected">
              Month-wise Review Meeting Compliance
            </Button>
          </Col>
        </Row>
        <Row>
          <Col span={12}>
            <iframe
              src="http://167.71.234.32:3000/public/question/429feda3-a836-462e-aefe-b48aae083b43"
              frameBorder="0"
              width="100%"
              height="200"
              allowTransparency
            ></iframe>
            <Button className="navButtonSelected">
              Enrolment slab wise school distribution
            </Button>
          </Col>
          <Col span={12}>
            <iframe
              src="http://167.71.234.32:3000/public/question/8e440682-721e-4f1f-8ff7-0e121bff537f"
              frameBorder="0"
              width="100%"
              height="200"
              allowTransparency
            ></iframe>
            <Button className="navButtonSelected">
              Session wise Number of Schools
            </Button>
          </Col>
        </Row>
        <Row>
          <Col span={24}>
            <iframe
              src="http://167.71.234.32:3000/public/question/eb03fa6b-d7e3-45fa-beed-f816d89155dd"
              frameBorder="0"
              width="100%"
              height="200"
              allowTransparency
            ></iframe>
            <Button className="navButtonSelected">
              District-wise Enrolment by Level of Education
            </Button>
          </Col>
        </Row>
        <Row style={{ display: "flex" }}>
          <Col span={12}>
            <iframe
              src="http://167.71.234.32:3000/public/question/2d25967e-479a-4950-a7d5-952c564b9ac7"
              frameBorder="0"
              width="100%"
              height="200"
              allowTransparency
            ></iframe>
          </Col>
          <Col span={12}>
            <iframe
              src="http://167.71.234.32:3000/public/question/fde69400-048e-4fae-ae27-a98d20e14432"
              frameBorder="0"
              width="100%"
              height="200"
              allowTransparency
            ></iframe>
          </Col>
        </Row>
        <Row style={{ display: "flex" }}>
          <Col span={12}>
            <iframe
              src="http://167.71.234.32:3000/public/question/9f041846-f970-452a-a7e0-13c037054954"
              frameBorder="0"
              width="100%"
              height="300"
              allowTransparency
            ></iframe>
            <Button className="navButtonSelected">
              Pupil-Teacher ratio across level of education
            </Button>
          </Col>
          <Col span={12}>
            <iframe
              src="http://167.71.234.32:3000/public/question/4ee28061-c30c-436e-b27b-b07de37fecf8"
              frameBorder="0"
              width="100%"
              height="300"
              allowTransparency
            ></iframe>
            <Button className="navButtonSelected">
              Grade-wise Enrolment distribution
            </Button>
          </Col>
        </Row>
        <Row>
          <Col span={24}>
            <iframe
              src="http://167.71.234.32:3000/public/question/0b4eb048-a442-40ad-a214-2e3a03020db3"
              frameBorder="0"
              width="100%"
              height="200"
              allowTransparency
            ></iframe>
            <Button className="navButtonSelected">
              Stream-wise Enrolment distribution
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
              Districts
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
              Blocks
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
              Schools
            </Button>
          </Col>
          <Col span={6}>
            <Search
              //@ts-ignore
              onSearch={(val: any) => {
                handleSearchByUDISE(val);
                console.log(val);
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
