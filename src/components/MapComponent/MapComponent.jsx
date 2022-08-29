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
import MarkerClusterGroup from "react-leaflet-markercluster";
import L from "leaflet";
// import config from "./config.json";
// import bounds from "./bounds.json";
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

export default function MapComponent({ config, markers }) {
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

  const getSchoolAttendance = async (val) => {
    const params = {
      school: val,
    };
    return await API_SERVICE.getSchoolAttendance(params);
  };

  const getSchoolEnrolment = async (val) => {
    
    const params = {
      school: val,
    };
    return await API_SERVICE.getSchoolEnrolment(params);
  };

  const getSchoolPTR = async (val) => {
    const params = {
      school: val,
    };
    return await API_SERVICE.getSchoolPTR(params);
  };

  const getSchoolCWSN = async (val) => {
    const params = {
      school: val,
    };
    return await API_SERVICE.getSchoolCWSN(params);
  };
  const getBlockAttendance = async (val) => {
    const params = {
      district: val,
    };
    return await API_SERVICE.getBlockAttendance(params);
  };
  const getBlockEnrolment = async (val) => {
    const params = {
      district: val,
    };
    return await API_SERVICE.getBlockEnrolment(params);
  };
  const getBlockPTR = async (val) => {
    const params = {
      district: val,
    };
    return await API_SERVICE.getBlockPTR(params);
  };
  const getBlockCWSN = async (val) => {
    const params = {
      district: val,
    };
    return await API_SERVICE.getBlockCWSN(params);
  };


  const getToolTipData = async (district, block, school) => {
    const promiseArray = [];
    if (district) {
      promiseArray.push(getDistrictAttendance(district));
      promiseArray.push(getDistrictEnrolment(district));
      promiseArray.push(getDistrictPTR(district));
      promiseArray.push(getDistrictCWSN(district));
    } 
    else if(block){
      promiseArray.push(getBlockAttendance(district));
      promiseArray.push(getBlockEnrolment(district));
      promiseArray.push(getBlockPTR(district));
      promiseArray.push(getBlockCWSN(district));
    } else{
      promiseArray.push(getSchoolAttendance(school));
      promiseArray.push(getSchoolEnrolment(school));
      promiseArray.push(getSchoolCWSN(school));
      promiseArray.push(getSchoolPTR(school));
    }

    const resData = await Promise.all(promiseArray);

    const temp = {
      Attendance: resData[0]?.data?.rows[0]?.PercAttendance,
      Enrolment: resData[1]?.data?.rows[0]?.total_students,
      PTR: resData[2]?.data?.rows[0]?.Ratio,
      CWSN: resData[3]?.data?.rows[0]?.total_cwsn_students,
    };
    console.log(temp,'oisjosj');
    setToolTipData(
      `Attendence:${temp.Attendance}\n CWSN:${temp.CWSN}\n Enrolment:${temp.Enrolment}\n PTR:${temp.PTR}`
    );
  };

  // useEffect(() => {
  //   const test = async () => {
  //     const data = await getDistrictEnrolment();
  //     const resdata = data.data;
  //     console.log(resdata);
  //     getDistrictEnrolment();
  //     getDistrictPTR();
  //     getDistrictPTR();
  //   };
  //   test();
  // });

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
            // <MarkerClusterGroup>
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
                    {/* <Circle
                      center={center}
                      eventHandlers={eventHandlers}
                      pathOptions={{ fillColor: "blue" }}
                      radius={200}
                    >
                      <Tooltip>{"clickedText"}</Tooltip> */}
                    {/* </Circle> */}
                    {/* <Tooltip> */}
                    {/* <div style={{ ...item.tooltipCSS }}>{item.tooltip}</div> */}
                    {/* </Tooltip> */}
                    {/* </Circle> */}
                    <Popup
                      // onOpen={getToolTipData(item.position)}
                      onOpen={() => {
                        // setToolTipData();
                        // getDistrictEnrolment();
                        getToolTipData(item.district, item.block, item.school);
                      }}
                    >
                      {toolTipData}
                    </Popup>
                    {/* <Tooltip>{"clickedText"}</Tooltip> */}
                  </Marker>
                );
              })}
            </div>
          ) : (
            // </MarkerClusterGroup>
            <div>
              {markers?.postions.map((item) => {
                const iconPerson = new L.Icon({
                  // iconUrl: new URL(`${item.icon}`),
                  // iconRetinaUrl: new URL(`${item.icon}`),
                  iconSize: new L.Point(10, 10),
                  // onclick: getToolTipData,
                  // className: "leaflet-div-icon",
                });
                console.log(item.icon);
                return (
                  <Marker position={item.position} icon={iconPerson}>
                    <Popup>
                      <div style={{ ...item.tooltipCSS }}>{item.tooltip}</div>
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
