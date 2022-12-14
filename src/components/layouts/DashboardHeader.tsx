import React, { FC, useEffect, useState } from "react";
import { Button, Col, Image, Row } from "antd";
import "./index.less";
import LeftLogo from "../../assets/header_Himachal_Pradesh_seal.png";
import LeftLogo2 from "../../assets/50 years.png";
import LeftLogo3 from "../../assets/Azadi_Ka_Amrit_Mahotsav.png";
import RightLogo from "../../assets/Profile.svg";
import { NavLink, useHistory } from "react-router-dom";

const DashboardHeader: FC = () => {
  const history = useHistory();

  const handleLogout = () => {
    localStorage.removeItem("user");
    sessionStorage.removeItem("user");
    window.location.href = "/";
  };

  const pathname = window.location.pathname;
  console.warn(localStorage.getItem("user"), "localStorage");

  return (
    <div key={+new Date()} className="dashboard-header">
      <Row gutter={10} justify={"space-between"}>
        <Col span={4}>
          <NavLink to={"/"}>
            <Row gutter={10} align="bottom">
              <Col>
                <Image src={LeftLogo} height={"50px"} preview={false} />
              </Col>
              <Col>
                <Image src={LeftLogo2} height={"50px"} preview={false} />
              </Col>
              <Col>
                <Image src={LeftLogo3} height={"50px"} preview={false} />
              </Col>
            </Row>
          </NavLink>
        </Col>
        <Col span={8}>
          <NavLink to={"/"}>
            <Row align={"middle"}>
              <Col
                span={24}
                style={{
                  textAlign: "center",
                  color: "#014C3D",
                  font: "normal normal 700 normal 36px/40px Mukta",
                }}
              >
                एकीकृत विद्या समीक्षा डैशबोर्ड
              </Col>
            </Row>
            <Row align={"middle"}>
              <Col
                span={24}
                style={{
                  textAlign: "center",
                  font: "normal normal 500 normal 18px/24px Mukta",
                }}
              >
                समग्र शिक्षा, हिमाचल प्रदेश
              </Col>
            </Row>
          </NavLink>
        </Col>

        <Col
          span={4}
          style={{
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column" }}>
            {pathname === "/login" ? null : (
              <>
                <Image src={RightLogo} height={"50px"} preview={false} />
                {localStorage.getItem("user") && (
                  <Button
                    style={{
                      display: "flex",
                      justifyContent: "flex-end",
                      marginTop: "2px",
                      height: "28px",
                      fontSize: "12px",
                    }}
                    onClick={handleLogout}
                  >
                    <span>Log Out</span>
                  </Button>
                )}
              </>
            )}
          </div>
        </Col>

        {/* <Col>
        <NavLink to={"/"}>
          <Row gutter={10}>
            <Col>
              <Image src={RightLogo} height={"50px"} preview={false} />
            </Col>
            <Col>
              User Manual
              <br />
              उपयोगकर्ता पुस्तिका
            </Col>
          </Row>
        </NavLink>
      </Col> */}
      </Row>
    </div>
  );
};

export default DashboardHeader;
