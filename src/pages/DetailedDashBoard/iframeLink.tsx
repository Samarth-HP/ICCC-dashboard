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

const iframeLink: FC = () => {

  return (
   <iframe
   src="https://samarthhp-metabase.in/public/dashboard/dd1f4b28-7e22-4ed4-ab56-b03be809b261?quarter=3"
   width="100%"
  height="100%"
   >

   </iframe>
  );
};
export default iframeLink;
