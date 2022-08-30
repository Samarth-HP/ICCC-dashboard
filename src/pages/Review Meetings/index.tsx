import React, { FC, useEffect, useState } from "react";
import { Card, Col, Layout, Row, Divider, Image, Select } from "antd";
import { ArrowRightOutlined } from "@ant-design/icons";
import "./index.css";
import { Content } from "antd/es/layout/layout";
import Title from "antd/es/typography/Title";
import { NavLink } from "react-router-dom";
import MapComponent from "../../components/MapComponent/MapComponent.jsx";
import BreadcrumbItem from "antd/lib/breadcrumb/BreadcrumbItem";
import config from "./config.json";
import API_SERVICE from "../../services/api-service";

const ReviewMeeting: FC = () => {
  const monthArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  const yearArr = ["2022-23"];
  const [selectedButton, setSelectedButton] = useState(1);
  const [districtValueData, setDistrictValueData] = useState([]);
  const [blockValueData, setBlockValueData] = useState();
  const [marker, setMarker] = useState("Districts");
  const [district, setDistrict] = useState([]);
  const [monthDropdown, setMonthDropdown] = useState(monthArr);
  const [yearDropdown, setYearDropdown] = useState(yearArr);
  const onDistrictChange = async (value: any) => {
    let districtData: any = [];
    let blockData: any = [];
    const params: any = {
      district: value,
    };
    console.log(params,'parm');
    
    console.log(value);
    districtData = await API_SERVICE.getDistrictAttendanceBoundary(params);
    blockData = await API_SERVICE.getBlockAttendanceBoundary(params);

    setDistrictValueData(
      districtData.data.rows.filter((item: any) => {
        return item.district === value;
      })
    );
    setBlockValueData(blockData.data);

    setSelectedButton(value);
  };
  console.log(districtValueData,'district');
  console.log(blockValueData,'block');

  const getDistrictAttendanceData = async (District: any) => {
    let data: any = [];
    const params: any = {
      district: "SIRMAUR",
    };
    data = await API_SERVICE.getDistrictAttendanceBoundary(params);
    //
    //  console.log(data.data.rows,'ksjfkdj')
    setDistrict(
      data.data.rows.map((item: any) => {
        return item.district;
      })
    );
  };

  useEffect(() => {
    getDistrictAttendanceData("District");
  }, []);

  return (
    <Layout className={"layout-wrapper home-wrapper"}>
      <Content style={{ padding: "10px", backgroundColor: "#FFFFFF" }}>
        {/* <Row><BreadcrumbItem></BreadcrumbItem></Row> */}
        <Row style={{ display: "flex", justifyContent: "center" }}>
          <Col span={4}>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <h3 className="h3">District</h3>
              <Select
                onSelect={onDistrictChange}
                className="select"
                placeholder={"Choose District"}
              >
                {district.map((obj: any, i: number) => {
                  return (
                    <Select.Option key={i} value={obj}>
                      {obj}{" "}
                    </Select.Option>
                  );
                })}
              </Select>
            </div>
          </Col>
          <Col offset={1} span={4}>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <h3 className="h3">Year</h3>
              <Select onSelect={onDistrictChange} placeholder={"Choose Year"}>
                {yearDropdown.map((obj: any, i: number) => {
                  return (
                    <Select.Option key={i} value={obj}>
                      {obj}{" "}
                    </Select.Option>
                  );
                })}
              </Select>
            </div>
          </Col>
          <Col offset={1} span={4}>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <h3 className="h3">Month</h3>
              <Select onSelect={onDistrictChange} placeholder={"Choose Month"}>
                {monthDropdown.map((obj: any, i: number) => {
                  return (
                    <Select.Option key={i} value={obj}>
                      {obj}{" "}
                    </Select.Option>
                  );
                })}
              </Select>
            </div>
          </Col>
        </Row>
        <Row>
          <Col span={24}>
            <h2 className="h2">State-wise status of Block Review Meetings</h2>
          </Col>
        </Row>
        <Row>
          <Col span={24}>
            <div style={{ width: "100%", border: "1px solid black" }}>
              <MapComponent
                config={config}
                markers={config.markers}
              ></MapComponent>
            </div>
          </Col>
        </Row>
        <Row>
          <Col span={24}>
            <h2 className="h2">Block-wise status of Block Review Meetings</h2>
          </Col>
        </Row>
        <Row>
          <Col span={24}>
            <h2 className="h2">
              District-wise status of Block Review Meetings
            </h2>
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

export default ReviewMeeting;
