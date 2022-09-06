import React, { FC } from "react";
import { Button, Col, Layout, Row, Input, Divider, Image } from "antd";
import {
  UserOutlined,
  LockOutlined,
  EyeInvisibleOutlined,
  EyeTwoTone,
  ArrowLeftOutlined,
} from "@ant-design/icons";
import "./index.css";
import { Content } from "antd/es/layout/layout";

import Classroom from "../../assets/ClassroomInputs.svg";
import TeacherTraining from "../../assets/TeacherTraining.svg";
import TeacherPerformance from "../../assets/TeacherPerformance.svg";
import StudentLearning from "../../assets/StudentLearning.svg";
import FooterRightLogo from "../../assets/footer_Samarth_Himachal_logo.png";
import Login_Img from "../../assets/Login_Img.png";
import Side_Img from "../../assets/image 135.png";
import { useHistory } from "react-router-dom";

const IframeLink = (showLink: any) => {
  const {
    match: { params },
  } = showLink;

  if (params.name === "mentoring") {
    return (
      <iframe
        src="https://samarthhp-metabase.in/public/dashboard/dd1f4b28-7e22-4ed4-ab56-b03be809b261?quarter=3"
        width="100%"
        height="100%"
      ></iframe>
    );
  } else if (params.name === "teacherTraining") {
    return (
      <iframe
        src="https://samarthhp-metabase.in/public/dashboard/9d384c44-561c-4191-9022-c8ed5397d9a2"
        width="100%"
        height="100%"
      ></iframe>
    );
  } else if (params.name === "Enrolment") {
    return (
      <iframe
        src="https://samarthhp-metabase.in/public/dashboard/e08ae997-520a-42a7-99e8-96a9483546e7"
        width="100%"
        height="100%"
      ></iframe>
    );
  } else if (params.name === "StudentAttendance") {
    return (
      <iframe
        src="https://samarthhp-metabase.in/public/dashboard/7310f340-ba25-44ed-a59f-59400bda2a11?date=2022-08-04"
        width="100%"
        height="100%"
      ></iframe>
    );
  } else if (params.name === "SchoolMonitoringVisits") {
    return (
      <iframe
        src="https://samarthhp-metabase.in/public/dashboard/ccbc316f-e5be-4e95-985d-744511d40884"
        width="100%"
        height="100%"
      ></iframe>
    );
  } else if (params.name === "ReviewMeetings") {
    return (
      <iframe
        src="https://samarthhp-metabase.in/public/dashboard/81073842-f423-4a7f-b473-93d89ded0e45"
        width="100%"
        height="100%"
      ></iframe>
    );
  } else if (params.name === "ReviewMeetingsScorecards") {
    return (
      <iframe
        src="https://samarthhp-metabase.in/public/dashboard/4ccde962-8c7a-4be6-a5d3-1f5d8ff1b3aa?month=May"
        width="100%"
        height="100%"
      ></iframe>
    );
  }

  return <></>;
};
export default IframeLink;
