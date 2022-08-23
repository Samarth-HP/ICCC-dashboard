import React, { FC, useState } from "react";
import { Card, Col, Layout, Row, Divider, Image, Select } from "antd";
import { ArrowRightOutlined } from "@ant-design/icons";
import "./index.css";
import { Content } from "antd/es/layout/layout";
import Title from "antd/es/typography/Title";
import { NavLink } from "react-router-dom";
import MapComponent from "../../components/MapComponent/MapComponent.jsx";
import BreadcrumbItem from "antd/lib/breadcrumb/BreadcrumbItem";
import config from "./config.json";

const ReviewMeeting: FC = () => {
  const [selectedButton, setSelectedButton] = useState(1);
  const [marker, setMarker] = useState("Districts");
  const onDistrictChange = (id: any) => {
    console.log(id);
    setSelectedButton(id);
  };
  const onBlockChange = (id: any) => {
    console.log(id);
    setSelectedButton(id);
  };
  const onClusterChange = (id: any) => {
    console.log(id);
    setSelectedButton(id);
  };
  const onYearChange = (id: any) => {
    console.log(id);
    setSelectedButton(id);
  };
  const onMonthChange = (id: any) => {
    console.log(id);
    setSelectedButton(id);
  };
  return (
    <Layout className={"layout-wrapper home-wrapper"}>
      <Content style={{ padding: "10px", backgroundColor: "#FFFFFF" }}>
        {/* <Row><BreadcrumbItem></BreadcrumbItem></Row> */}
        <Row>
          <Col offset={2} span={3}>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <h3 className="h3">District</h3>
              <Select
                onChange={onDistrictChange}
                className="select"
                placeholder={"Choose District"}
              >
                <Select.Option value={"District1"}>{"District1"}</Select.Option>
                <Select.Option value={"District2"}>{"District2"}</Select.Option>
              </Select>
            </div>
          </Col>
          <Col offset={1} span={3}>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <h3 className="h3">Block</h3>
              <Select onChange={onBlockChange} placeholder={"Choose Block"}>
                <Select.Option value={"Block"}>{"Block"}</Select.Option>
              </Select>
            </div>
          </Col>
          <Col offset={1} span={3}>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <h3 className="h3">Cluster</h3>
              <Select onChange={onClusterChange} placeholder={"Choose Cluster"}>
                <Select.Option value={"Cluster"}>{"Cluster"}</Select.Option>
              </Select>
            </div>
          </Col>
          <Col offset={1} span={3}>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <h3 className="h3">Year</h3>
              <Select onChange={onYearChange} placeholder={"Choose Year"}>
                <Select.Option value={"Year"}>{"Year"}</Select.Option>
              </Select>
            </div>
          </Col>
          <Col offset={1} span={3}>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <h3 className="h3">Month</h3>
              <Select onChange={onMonthChange} placeholder={"Choose Month"}>
                <Select.Option value={"Month"}>{"Month"}</Select.Option>
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
            <div style={{ width: "100%" }}>
              <MapComponent config={config}></MapComponent>
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
