import React, { useEffect, useMemo, useState } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  Polygon,
  SVGOverlay,
  Circle,
} from "react-leaflet";
import { MenuOutlined } from "@ant-design/icons";
import MarkerClusterGroup from "react-leaflet-cluster";
import L from "leaflet";
import MapBound from "./MapBound";
import "./Map.css";
import MapOverlays from "./MapOverlays";
import red_marker from "../../assets/Map_marker_red.svg";
import green_marker from "../../assets/Map_marker_green.svg";
import blue_marker from "../../assets/Map_marker_blue.svg";
import purple_marker from "../../assets/Map_marker_purple.svg";
import yellow_marker from "../../assets/Map_marker_yellow.svg";
import { Button, Col, Popover, Tooltip } from "antd";
import API_SERVICE from "../../services/api-service";

export default function MapComponent({
  config,
  markers,
  type = 1,
  at = "SA1",
}) {
  const eventHandlers = () => ({
    click() {
      console.log("CLicked");
      getToolTipData();
    },
  });

  const center = markers?.postions[0]?.position || [28.7041, 77.1025];
  const byGeoJson = config.bounds?.byGeoJson?.length;
  const byBbox = config.bounds?.byBbox?.length;
  const [toolTipData, setToolTipData] = useState("");

  const tempBounds = [
    [76.715049743652401, 31.588310241699446],
    [76.716567993164119, 31.585119247436467],
  ];
  const content = (
    <div>
      <div>Download XLS</div>
      <div>Download CSV</div>
      <div>Download PNG Image</div>
    </div>
  );

  const getDistrictAttendance = async (val) => {
    const params = {
      district: val,
    };
    return await API_SERVICE.getDistrictAttendance(params);
  };
  const getDistrictEnrolment = async (val) => {
    const params = {
      district: val,
    };
    return await API_SERVICE.getDistrictEnrolment(params);
  };
  const getDistrictPTR = async (val) => {
    const params = {
      district: val,
    };
    return await API_SERVICE.getDistrictPTR(params);
  };
  const getDistrictCWSN = async (val) => {
    const params = {
      district: val,
    };
    return await API_SERVICE.getDistrictCWSN(params);
  };

  const getBlockAttendance = async (val) => {
    const params = {
      block: val,
    };
    return await API_SERVICE.getBlockAttendance(params);
  };
  const getBlockEnrolment = async (val) => {
    const params = {
      block: val,
    };
    return await API_SERVICE.getBlockEnrolment(params);
  };
  const getBlockPTR = async (val) => {
    const params = {
      block: val,
    };
    return await API_SERVICE.getBlockPTR(params);
  };
  const getBlockCWSN = async (val) => {
    const params = {
      block: val,
    };
    return await API_SERVICE.getBlockCWSN(params);
  };

  const getSchoolAttendance = async (val) => {
    const params = {
      school_name: val,
    };
    return await API_SERVICE.getSchoolAttendance(params);
  };
  const getSchoolEnrolment = async (val) => {
    const params = {
      school_name: val,
    };
    return await API_SERVICE.getSchoolEnrolment(params);
  };
  const getSchoolPTR = async (val) => {
    const params = {
      school_name: val,
    };
    return await API_SERVICE.getSchoolPTR(params);
  };
  const getSchoolCWSN = async (val) => {
    const params = {
      school_name: val,
    };
    return await API_SERVICE.getSchoolCWSN(params);
  };
  // type default 1 end

  const getStudentAssesmentDistrict1 = async (val) => {
    const params = {
      district: val,
      assessment_type_v2: at,
    };
    return await API_SERVICE.getStudentAssesmentDistrict1(params);
  };

  const getStudentAssesmentDistrict2 = async (val) => {
    const params = {
      district: val,
      assessment_type_v2: at,
    };
    return await API_SERVICE.getStudentAssesmentDistrict2(params);
  };

  const getStudentAssesmentDistrict3 = async (val) => {
    const params = {
      district: val,
      assessment_type_v2: at,
    };
    return await API_SERVICE.getStudentAssesmentDistrict3(params);
  };

  const getStudentAssesmentDistrict4 = async (val) => {
    const params = {
      district: val,
      assessment_type_v2: at,
    };
    return await API_SERVICE.getStudentAssesmentDistrict4(params);
  };
  const getStudentAssesmentDistrict5 = async (val) => {
    const params = {
      district: val,
      assessment_type_v2: at,
    };
    return await API_SERVICE.getStudentAssesmentDistrict5(params);
  };

  const getStudentAssesmentBlock1 = async (val) => {
    const params = {
      block: val,
      assessment_type_v2: at,
    };
    return await API_SERVICE.getStudentAssesmentBlock1(params);
  };
  const getStudentAssesmentBlock2 = async (val) => {
    const params = {
      block: val,
      assessment_type_v2: at,
    };
    return await API_SERVICE.getStudentAssesmentBlock2(params);
  };

  const getStudentAssesmentBlock3 = async (val) => {
    const params = {
      block: val,
      assessment_type_v2: at,
    };
    return await API_SERVICE.getStudentAssesmentBlock3(params);
  };
  const getStudentAssesmentBlock4 = async (val) => {
    const params = {
      block: val,
      assessment_type_v2: at,
    };
    return await API_SERVICE.getStudentAssesmentBlock4(params);
  };
  const getStudentAssesmentBlock5 = async (val) => {
    const params = {
      block: val,
      assessment_type_v2: at,
    };
    return await API_SERVICE.getStudentAssesmentBlock5(params);
  };

  const getStudentAssesmentSchool1 = async (val) => {
    const params = {
      school_name: val,
      assessment_type_v2: at,
    };
    return await API_SERVICE.getStudentAssesmentSchool1(params);
  };
  const getStudentAssesmentSchool2 = async (val) => {
    const params = {
      school_name: val,
      assessment_type_v2: at,
    };
    return await API_SERVICE.getStudentAssesmentSchool2(params);
  };

  const getStudentAssesmentSchool3 = async (val) => {
    const params = {
      school_name: val,
      assessment_type_v2: at,
    };
    return await API_SERVICE.getStudentAssesmentSchool3(params);
  };
  const getStudentAssesmentSchool4 = async (val) => {
    const params = {
      school_name: val,
      assessment_type_v2: at,
    };
    return await API_SERVICE.getStudentAssesmentSchool4(params);
  };
  const getStudentAssesmentSchool5 = async (val) => {
    const params = {
      school_name: val,
      assessment_type_v2: at,
    };
    return await API_SERVICE.getStudentAssesmentSchool5(params);
  };
  // type dynamic 2 end

  const getToolTipData = async (district, block, school) => {
    const promiseArray = [];
    if (district) {
      if (type == 2) {
        promiseArray.push(getStudentAssesmentDistrict1(district));
        promiseArray.push(getStudentAssesmentDistrict2(district));
        promiseArray.push(getStudentAssesmentDistrict3(district));
        promiseArray.push(getStudentAssesmentDistrict4(district));
        promiseArray.push(getStudentAssesmentDistrict5(district));
      } else {
        promiseArray.push(getDistrictAttendance(district));
        promiseArray.push(getDistrictEnrolment(district));
        promiseArray.push(getDistrictPTR(district));
        promiseArray.push(getDistrictCWSN(district));
      }
    } else if (block) {
      if (type == 2) {
        promiseArray.push(getStudentAssesmentBlock1(block));
        promiseArray.push(getStudentAssesmentBlock2(block));
        promiseArray.push(getStudentAssesmentBlock3(block));
        promiseArray.push(getStudentAssesmentBlock4(block));
        promiseArray.push(getStudentAssesmentBlock5(block));
      } else {
        promiseArray.push(getBlockAttendance(block));
        promiseArray.push(getBlockEnrolment(block));
        promiseArray.push(getBlockPTR(block));
        promiseArray.push(getBlockCWSN(block));
      }
    } else {
      if (type == 2) {
        promiseArray.push(getStudentAssesmentSchool1(school));
        promiseArray.push(getStudentAssesmentSchool2(school));
        promiseArray.push(getStudentAssesmentSchool3(school));
        promiseArray.push(getStudentAssesmentSchool4(school));
        promiseArray.push(getStudentAssesmentSchool5(school));
      } else {
        promiseArray.push(getSchoolAttendance(school));
        promiseArray.push(getSchoolEnrolment(school));
        promiseArray.push(getSchoolCWSN(school));
        promiseArray.push(getSchoolPTR(school));
      }
    }

    const resData = await Promise.all(promiseArray);

    if (type == 2) {
      const temp = {
        Academic_Year: resData[0]?.data?.rows[0]?.academic_year,
      };
      setToolTipData(`Academic Year : ${temp.Academic_Year}`);
    } else {
      const temp = {
        Attendance: resData[0]?.data?.rows[0]?.PercAttendance,
        Enrolment: resData[1]?.data?.rows[0]?.total_students,
        PTR: resData[2]?.data?.rows[0]?.Ratio,
        CWSN: resData[3]?.data?.rows[0]?.total_cwsn_students,
      };
      setToolTipData(
        `Attendence:${temp.Attendance}\n CWSN:${temp.CWSN}\n Enrolment:${temp.Enrolment}\n PTR:${temp.PTR}`
      );
    }
  };

  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        flexDirection:
          config.legend.position.split("-")[0] == "bottom"
            ? "column"
            : "column-reverse",
      }}
    >
      <MapContainer
        bounds={tempBounds}
        className="markercluster-map"
        center={center}
        zoom={8}
        maxZoom={18}
        style={{ height: "40vh" }}
        zoomControl={config.map.zoomControl}
        scrollWheelZoom={config.map.scrollWheelZoom}
        dragging={config.map.dragging}
        doubleClickZoom={config.map.doubleClickZoom}
      >
        {!byGeoJson && (
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        )}
        {/* {byGeoJson && (
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        )} */}
        {(byGeoJson || byBbox) && <MapBound bounds={config.bounds} />}
        {/* <MapBound /> */}
        {byGeoJson && <MapOverlays overlays={config.overlays} />}
        {!byGeoJson && //
          (markers?.shouldClusterMarkers ? (
            <MarkerClusterGroup>
              {/* <div> */}
              {markers?.postions.map((item) => {
                let markerColor = blue_marker;
                if (item.color == "red") {
                  markerColor = red_marker;
                } else if (item.color == "yellow") {
                  markerColor = yellow_marker;
                } else if (item.color == "blue") {
                  markerColor = blue_marker;
                } else if (item.color == "green") {
                  markerColor = green_marker;
                } else if (item.color == "purple") {
                  markerColor = purple_marker;
                }
                const iconPerson = new L.Icon({
                  // iconUrl: new URL(`${item.icon}`),
                  // iconRetinaUrl: new URL(`${item.icon}`),
                  iconUrl: markerColor,
                  iconRetinaUrl: markerColor,
                  iconSize: new L.Point(20, 30),
                  // onclick: getToolTipData,
                  // eventHandlers: { eventHandlers },
                  // className: "leaflet-div-icon",
                });
                return (
                  <Marker position={item.position} icon={iconPerson}>
                    <Popup
                      onOpen={() => {
                        getToolTipData(item.district, item.block, item.school);
                      }}
                    >
                      {toolTipData}
                    </Popup>
                  </Marker>
                );
              })}
              {/* </div> */}
            </MarkerClusterGroup>
          ) : (
            //
            <div>
              {markers?.postions.map((item) => {
                let markerColor = blue_marker;
                if (item.color == "red") {
                  markerColor = red_marker;
                } else if (item.color == "yellow") {
                  markerColor = yellow_marker;
                } else if (item.color == "blue") {
                  markerColor = blue_marker;
                } else if (item.color == "green") {
                  markerColor = green_marker;
                } else if (item.color == "purple") {
                  markerColor = purple_marker;
                }
                const iconPerson = new L.Icon({
                  // iconUrl: new URL(`${item.icon}`),
                  // iconRetinaUrl: new URL(`${item.icon}`),
                  iconUrl: markerColor,
                  iconRetinaUrl: markerColor,
                  iconSize: new L.Point(20, 30),
                  // onclick: getToolTipData,
                  // eventHandlers: { eventHandlers },
                  // className: "leaflet-div-icon",
                });
                return (
                  <Marker position={item.position} icon={iconPerson}>
                    <Popup
                      onOpen={() => {
                        getToolTipData(item.district, item.block, item.school);
                      }}
                    >
                      {toolTipData}
                    </Popup>
                  </Marker>
                );
              })}
            </div>
          ))}
      </MapContainer>
      {config.legend.display && (
        <div
          style={{
            display: config.legend.display ? "flex" : "none",
            width: "100%",
            justifyContent:
              config.legend.position.split("-")[1] == "right"
                ? "flex-end"
                : "flex-start",
          }}
        >
          {config.legend.labels.map((item) => {
            return (
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    width: "50px",
                    height: 20,
                    backgroundColor: item.color,
                  }}
                />
                <label style={{ ...item, color: "black" }}>{item.label}</label>
              </div>
            );
          })}

          <div
            style={{
              display: "flex",
              alignItems: "center",
              flexDirection: "row-reverse",
              width: "100%",
              marginRight: "5px",
              cursor: "pointer",
            }}
          >
            <Popover placement="bottom" content={content} trigger="click">
              <MenuOutlined />
            </Popover>
          </div>
        </div>
      )}
    </div>
  );
}
