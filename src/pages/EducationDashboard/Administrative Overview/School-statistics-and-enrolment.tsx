import React, { FC, useEffect, useState } from "react";
import {
  Card,
  Col,
  Layout,
  Row,
  Image,
  Button,
  Select,
  Input,
  Spin,
} from "antd";

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
import API_SERVICE from "../../../services/api-service";
import QuestionWithIframe from "../../../components/QuestionWIthIframe";
import parameters from "../../../services/parameters";
import boyIcon from "../../../assets/boyIcon.svg";
import girlIcon from "../../../assets/girlIcon.svg";

const { Search } = Input;

const SchoolStatisticsAndEnrolment: FC = (props: any) => {
  const [marker, setMarker] = useState("Districts");
  const [loadCount, setLoadCount] = useState(0);
  const [searchUdiseLoader, setSearchUdiseLoader] = useState(0);
  const [markerData, setMarkerData] = useState(props.markerData);
  const [inputValue, setInputValue] = useState("");
  const [config, setConfig] = useState([]);

  const [loading, setLoading] = useState(true);

  const handleSearchByUDISE = async (val: string) => {
    if (val) {
      setSearchUdiseLoader(1);
    }
    const params = {
      udise: val,
    };
    // const data = await API_SERVICE.searchSchoolData(params);
    // console.log('data', data);
    // const data = await API_SERVICE.searchSchoolData(params);
    const res = await API_SERVICE.getSchoolMarkerData(params);

    const data = res.data.rows.find((item: any) => {
      setSearchUdiseLoader(0);
      return item?.Udise_Code == val;
    });
    if (data == undefined) {
      setSearchUdiseLoader(0);
      return alert("Invalid Udise");
    }

    const formattedData = [
      {
        icon: "https://unpkg.com/leaflet@1.8.0/dist/images/marker-icon-2x.png",
        color: "black",
        tooltipCSS: {
          color: "black",
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
  const getConfig = () => {
    if (config.length) {
      return;
    }

    fetch("/adminOverviewConfig.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (configJson) {
        setLoading(false);
        setConfig(configJson);
      });
  };

  useEffect(() => {
    getConfig();
    if (props.markerData) {
      setMarkerData(props.markerData);
    }
  }, [props.markerData]);
  if (loading) return <>Loading</>;
  const handleSetLoad = () => {
    // setLoadCount(loadCount + 1);
    setLoadCount((prev: any) => {
      return ++prev;
    });
  };

  return (
    <Layout>
      <Content>
        <Row>
          <Col span={24}>
            <Row>
              <Col style={{ display: "flex" }} span={24}>
                <QuestionWithIframe
                  handleLoadCounter={handleSetLoad}
                  questionId={29}
                  width="17%"
                  height="200"
                  nonDownloadable={true}
                />
                {loadCount > 0 && (
                  <QuestionWithIframe
                    handleLoadCounter={handleSetLoad}
                    questionId={33}
                    width="40%"
                    height="200"
                    nonDownloadable={true}
                  />
                )}

                {loadCount > 1 && (
                  <QuestionWithIframe
                    handleLoadCounter={handleSetLoad}
                    questionId={40}
                    width="23%"
                    height="200"
                    nonDownloadable={true}
                  />
                )}
                {loadCount > 2 && (
                  <QuestionWithIframe
                    handleLoadCounter={handleSetLoad}
                    questionId={34}
                    width="20%"
                    height="200"
                    nonDownloadable={true}
                  />
                )}
              </Col>

              <Col span={24}>
                <div className="NIPUNheading">School Statistics</div>
              </Col>

              {/* <Col span={12}>
              <div className="NIPUNheading">Student Enrolment</div>
            </Col> */}
            </Row>
          </Col>

          <Col span={24}>
            <div style={{ height: "550px" }}>
              {loadCount > 3 && (
                <QuestionWithIframe
                  handleLoadCounter={handleSetLoad}
                  questionId={30}
                  width="100%"
                  height="550"
                />
              )}
            </div>
            <div className="navButtonSelected">
              <p>Category Wise Number of Schools</p>
            </div>
          </Col>

          <Col span={24}>
            <div style={{ height: "610px" }}>
              {loadCount > 4 && (
                <QuestionWithIframe
                  handleLoadCounter={handleSetLoad}
                  questionId={32}
                  width="100%"
                  height="610"
                />
              )}
            </div>
            <div className="navButtonSelected">
              <p style={{ lineHeight: "2.6" }}>
                Session wise Number of Schools
              </p>
            </div>
          </Col>

          <Col span={24}>
            <div style={{ height: "626px" }}>
              {loadCount > 5 && (
                <QuestionWithIframe
                  handleLoadCounter={handleSetLoad}
                  questionId={61}
                  width="100%"
                  height="626"
                />
              )}
            </div>
            <div className="navButtonSelected">
              <p style={{ lineHeight: "2.6" }}>
                District wise, Category wise, Number of Schools
              </p>
            </div>
          </Col>

          <Col span={24}>
            <div className="NIPUNheading">Student Enrolment</div>
          </Col>

          <Col span={24}>
            <div style={{ height: "609px" }}>
              {loadCount > 6 && (
                <QuestionWithIframe
                  handleLoadCounter={handleSetLoad}
                  questionId={38}
                  width="100%"
                  height="609"
                />
              )}
            </div>
            <div className="navButtonSelected">
              {/* Enrolment slab wise school distribution */}
              <p style={{ lineHeight: "2.5" }}>
                District-wise Enrolment by Level of Education
              </p>
            </div>
          </Col>

          <Col span={24}>
            <div style={{ height: "650px" }}>
              {loadCount > 7 && (
                <QuestionWithIframe
                  handleLoadCounter={handleSetLoad}
                  questionId={35}
                  width="100%"
                  height="650"
                />
              )}
            </div>
            <div className="navButtonSelected">
              <p style={{ lineHeight: "2.5" }}>
                Student Enrolment by Level of Education
              </p>
            </div>
          </Col>

          <Col style={{ display: "flex" }} span={12}>
            <Col>
              <img src={boyIcon} alt="" />
            </Col>
            <Col span={18}>
              <div style={{ height: "200px" }}>
                {loadCount > 8 && (
                  <QuestionWithIframe
                    handleLoadCounter={handleSetLoad}
                    questionId={36}
                    width="100%"
                    height="200"
                    nonDownloadable={true}
                  />
                )}
              </div>
            </Col>
          </Col>
          <Col style={{ display: "flex" }} span={12}>
            <Col>
              <img src={girlIcon} alt="" />
            </Col>
            <Col span={18}>
              <div style={{ height: "200px" }}>
                {loadCount > 9 && (
                  <QuestionWithIframe
                    handleLoadCounter={handleSetLoad}
                    questionId={37}
                    width="100%"
                    height="200"
                    nonDownloadable={true}
                  />
                )}
              </div>
            </Col>
          </Col>

          <Col span={24}>
            <div style={{ height: "900px" }}>
              {loadCount > 10 && (
                <QuestionWithIframe
                  handleLoadCounter={handleSetLoad}
                  questionId={43}
                  width="100%"
                  height="900"
                />
              )}
            </div>
            <div className="navButtonSelected">
              <p style={{ lineHeight: "2.5" }}>
                Pupil-Teacher Ratio Across Level of Education
              </p>
            </div>
          </Col>
          <Col span={24}>
            <div style={{ height: "1215px" }}>
              {loadCount > 11 && (
                <QuestionWithIframe
                  handleLoadCounter={handleSetLoad}
                  questionId={53}
                  width="100%"
                  height="1215"
                />
              )}
            </div>
            <div className="navButtonSelected">
              <p style={{ lineHeight: "2.5" }}>
                Grade-wise Enrolment Distribution
              </p>
            </div>
          </Col>

          <Col span={24}>
            <div style={{ height: "1000px" }}>
              {loadCount > 12 && (
                <QuestionWithIframe
                  handleLoadCounter={handleSetLoad}
                  questionId={54}
                  width="100%"
                  height="1000"
                />
              )}
            </div>
            <div className="navButtonSelected">
              <p style={{ lineHeight: "2.5" }}>
                Stream-wise Enrolment Distribution
              </p>
            </div>
          </Col>

          <Col span={6}>
            <Button
              style={{ height: "50px" }}
              className={
                marker == "Districts" ? "navButtonSelected" : "navButton"
              }
              onClick={() => {
                props.getMarkerData("Districts");
                setMarker("Districts");
                setInputValue("");
              }}
            >
              <p style={{ lineHeight: "1.2" }}>Districts</p>
            </Button>
          </Col>
          <Col span={6}>
            <Button
              style={{ height: "50px" }}
              className={marker == "Blocks" ? "navButtonSelected" : "navButton"}
              onClick={() => {
                props.getMarkerData("Blocks");
                setMarker("Blocks");
                setInputValue("");
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
          <Col span={searchUdiseLoader === 1 ? 5 : 6}>
            <Search
              //@ts-ignore
              value={inputValue}
              onChange={(e) => {
                setInputValue(e.target.value);
              }}
              onSearch={(val: any) => {
                handleSearchByUDISE(val);
                console.log(val);
                setMarker("Schools");
              }}
              placeholder="Search UDISE"
            />
          </Col>

          {searchUdiseLoader == 1 && (
            <Col style={{ display: "flex", alignItems: "center" }} span={1}>
              <Spin style={{ marginLeft: "12px" }} />
            </Col>
          )}

          <Col span={24}>
            {/* <Spin tip="Loading..."> */}
            {props.active && (
              <MapComponent type={3} config={config} markers={markerData} />
            )}
            {/* </Spin> */}
          </Col>
        </Row>
      </Content>
    </Layout>
  );
};

export default SchoolStatisticsAndEnrolment;
