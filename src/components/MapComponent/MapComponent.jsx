import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
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
import district_marker from "../../assets/Map_Marker_District.svg";
import API_SERVICE from "../../services/api-service";
import { Spin } from "antd";

const default_toolTipData = {
  Attendance: "NA",
  Enrolment: "NA",
  PTR: "NA",
  CWSN: "NA",
};

export default function MapComponent({
  config,
  markers,
  type = 0,
  at = "SA1",
  ay = "2021-2022",
}) {
  const eventHandlers = () => ({
    click() {
      getToolTipData();
    },
  });

  const center = config?.markers?.postions[0]?.position || [28.7041, 77.1025];
  const byGeoJson = config.bounds?.byGeoJson?.length;
  const byBbox = config.bounds?.byBbox?.length;
  const [toolTipData, setToolTipData] = useState(default_toolTipData);

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

  const getStudentAssesmentDistrict2Grade48 = async (val) => {
    const params = {
      district: val,
      assessment_type_v2: at,
    };
    return await API_SERVICE.getStudentAssesmentDistrict2Grade48(params);
  };

  const getStudentAssesmentDistrict3Grade48 = async (val) => {
    const params = {
      district: val,
      assessment_type_v2: at,
    };
    return await API_SERVICE.getStudentAssesmentDistrict3Grade48(params);
  };

  const getStudentAssesmentDistrict4Grade48 = async (val) => {
    const params = {
      district: val,
      assessment_type_v2: at,
    };
    return await API_SERVICE.getStudentAssesmentDistrict4Grade48(params);
  };
  const getStudentAssesmentDistrict5Grade48 = async (val) => {
    const params = {
      district: val,
      assessment_type_v2: at,
    };
    return await API_SERVICE.getStudentAssesmentDistrict5Grade48(params);
  };

  const getStudentAssesmentBlock2Grade48 = async (val) => {
    const params = {
      block: val,
      assessment_type_v2: at,
    };
    return await API_SERVICE.getStudentAssesmentBlock2Grade48(params);
  };

  const getStudentAssesmentBlock3Grade48 = async (val) => {
    const params = {
      block: val,
      assessment_type_v2: at,
    };
    return await API_SERVICE.getStudentAssesmentBlock3Grade48(params);
  };
  const getStudentAssesmentBlock4Grade48 = async (val) => {
    const params = {
      block: val,
      assessment_type_v2: at,
    };
    return await API_SERVICE.getStudentAssesmentBlock4Grade48(params);
  };
  const getStudentAssesmentBlock5Grade48 = async (val) => {
    const params = {
      block: val,
      assessment_type_v2: at,
    };
    return await API_SERVICE.getStudentAssesmentBlock5Grade48(params);
  };

  const getStudentAssesmentSchool2Grade48 = async (val) => {
    const params = {
      school_name: val,
      assessment_type_v2: at,
    };
    return await API_SERVICE.getStudentAssesmentSchool2Grade48(params);
  };

  const getStudentAssesmentSchool3Grade48 = async (val) => {
    const params = {
      school_name: val,
      assessment_type_v2: at,
    };
    return await API_SERVICE.getStudentAssesmentSchool3Grade48(params);
  };
  const getStudentAssesmentSchool4Grade48 = async (val) => {
    const params = {
      school_name: val,
      assessment_type_v2: at,
    };
    return await API_SERVICE.getStudentAssesmentSchool4Grade48(params);
  };
  const getStudentAssesmentSchool5Grade48 = async (val) => {
    const params = {
      school_name: val,
      assessment_type_v2: at,
    };
    return await API_SERVICE.getStudentAssesmentSchool5Grade48(params);
  };

  const getStudentAssesmentBlock2Grade13 = async (val) => {
    const params = {
      block: val,
    };
    return await API_SERVICE.getStudentAssesmentBlock2Grade13(params);
  };

  const getStudentAssesmentBlock3Grade13 = async (val) => {
    const params = {
      block: val,
    };
    return await API_SERVICE.getStudentAssesmentBlock3Grade13(params);
  };
  const getStudentAssesmentBlock4Grade13 = async (val) => {
    const params = {
      block: val,
    };
    return await API_SERVICE.getStudentAssesmentBlock4Grade13(params);
  };
  const getStudentAssesmentBlock5Grade13 = async (val) => {
    const params = {
      block: val,
    };
    return await API_SERVICE.getStudentAssesmentBlock5Grade13(params);
  };

  const getStudentAssesmentDistrict2Grade13 = async (val) => {
    const params = {
      district: val,
    };
    return await API_SERVICE.getStudentAssesmentDistrict2Grade13(params);
  };
  const getStudentAssesmentDistrict3Grade13 = async (val) => {
    const params = {
      district: val,
    };
    return await API_SERVICE.getStudentAssesmentDistrict3Grade13(params);
  };
  const getStudentAssesmentDistrict4Grade13 = async (val) => {
    const params = {
      district: val,
    };
    return await API_SERVICE.getStudentAssesmentDistrict4Grade13(params);
  };
  const getStudentAssesmentDistrict5Grade13 = async (val) => {
    const params = {
      district: val,
    };
    return await API_SERVICE.getStudentAssesmentDistrict5Grade13(params);
  };

  const getStudentAssesmentSchool1Grade13 = async (val) => {
    const params = {
      assessment_type_v2: val,
    };
    return await API_SERVICE.getStudentAssesmentSchool1Grade13(params);
  };
  const getStudentAssesmentSchool2Grade13 = async (val) => {
    const params = {
      school_name: val,
    };
    return await API_SERVICE.getStudentAssesmentSchool2Grade13(params);
  };
  const getStudentAssesmentSchool3Grade13 = async (val) => {
    const params = {
      school_name: val,
    };
    return await API_SERVICE.getStudentAssesmentSchool3Grade13(params);
  };
  const getStudentAssesmentSchool4Grade13 = async (val) => {
    const params = {
      school_name: val,
    };
    return await API_SERVICE.getStudentAssesmentSchool4Grade13(params);
  };
  const getStudentAssesmentSchool5Grade13 = async (val) => {
    const params = {
      school_name: val,
    };
    return await API_SERVICE.getStudentAssesmentSchool5Grade13(params);
  };
  // type dynamic 2 end

  const emptyToolTip = async () => {
    setToolTipData(default_toolTipData);
  };

  const getToolTipData = async (district, block, school, ay, at) => {
    await emptyToolTip();
    const promiseArray = [];
    if (district) {
      console.log(district);
      if (type === 2) {
        promiseArray.push(getStudentAssesmentDistrict2Grade48(district));
        promiseArray.push(getStudentAssesmentDistrict3Grade48(district));
        promiseArray.push(getStudentAssesmentDistrict4Grade48(district));
        promiseArray.push(getStudentAssesmentDistrict5Grade48(district));
      } else if (type === 1) {
        promiseArray.push(getStudentAssesmentDistrict2Grade13(district));
        promiseArray.push(getStudentAssesmentDistrict3Grade13(district));
        promiseArray.push(getStudentAssesmentDistrict4Grade13(district));
        promiseArray.push(getStudentAssesmentDistrict5Grade13(district));
      }
    } else if (block) {
      if (type === 2) {
        promiseArray.push(getStudentAssesmentBlock2Grade48(block));
        promiseArray.push(getStudentAssesmentBlock3Grade48(block));
        promiseArray.push(getStudentAssesmentBlock4Grade48(block));
        promiseArray.push(getStudentAssesmentBlock5Grade48(block));
      } else if (type === 1) {
        promiseArray.push(getStudentAssesmentBlock2Grade13(block));
        promiseArray.push(getStudentAssesmentBlock3Grade13(block));
        promiseArray.push(getStudentAssesmentBlock4Grade13(block));
        promiseArray.push(getStudentAssesmentBlock5Grade13(block));
      }
    } else {
      console.log(school);
      if (type === 2) {
        promiseArray.push(getStudentAssesmentSchool2Grade48(school));
        promiseArray.push(getStudentAssesmentSchool3Grade48(school));
        promiseArray.push(getStudentAssesmentSchool4Grade48(school));
        promiseArray.push(getStudentAssesmentSchool5Grade48(school));
      } else if (type === 1) {
        promiseArray.push(getStudentAssesmentSchool2Grade13(school));
        promiseArray.push(getStudentAssesmentSchool3Grade13(school));
        promiseArray.push(getStudentAssesmentSchool4Grade13(school));
        promiseArray.push(getStudentAssesmentSchool5Grade13(school));
      }
    }

    const resData = await Promise.all(promiseArray);

    if (resData) {
      const getProcessed = async () => {
        return resData.filter((item) => item.data.rows.length)[0]?.data
          ?.rows[0];
      };

      const data = await getProcessed();

      if (data) {
        console.log(data);
        if (type === 1) {
          const {
            per_AverageScore,
            block,
            school_name,
            district,
            total_students,
          } = data;
          setToolTipData({
            color: "",
            type: 1,
            district: { label: "District", value: district },
            block: { label: "Block", value: block },
            school: { label: "School", value: school_name },
            per_AverageScore: {
              label: "Percentage Average",
              value: Math.round(per_AverageScore),
            },
            totalStudentEnrolled: {
              label: "Total Student Enrolled",
              value: total_students,
            },
            SA1: { label: "SA 1 Result", value: null },
            SA2: { label: "SA 2 Result", value: null },
            gradeWiseAvgResult: {
              label: "Grade Wise Average Results",
              grade1: { label: "Grade 1", value: null },
              grade2: { label: "Grade 3", value: null },
              grade3: { label: "Grade 4", value: null },
            },
            nipunStudent: {
              label: "Number of Nipun Students",
              value: null,
            },
            gradeWiseNipunStudent: {
              label: "Grade Wise Nipun Students",
              grade1: { label: "Grade 1", value: null },
              grade2: { label: "Grade 3", value: null },
              grade3: { label: "Grade 4", value: null },
            },
          });
        } else if (type === 2) {
          const { per_AverageScore, block, school_name, district } = data;
          setToolTipData({
            type: 2,
            academic_year: {
              label: "Academic Year",
              value: ay,
            },
            percentage_average: {
              label: "Percentage Average",
              value: Math.round(per_AverageScore),
            },
            SA1: { label: "SA1 Result", valaue: null },
            SA2: { label: "SA2 Result", valaue: null },
            district: { label: "District", value: district },
            block: { label: "Block", value: block },
            school: { label: "School", value: school_name },
            assesment_type: {
              label: "Assesment Type",
              value: at,
            },
            GradeWiseavgResult: {
              label: "Grade Wise Average Result",
              grade1: { label: "Grade 1", value: null },
              grade2: { label: "Grade 2", value: null },
              grade3: { label: "Grade 3", value: null },
              grade4: { label: "Grade 4", value: null },
              grade5: { label: "Grade 5", value: null },
            },
          });
        }
      }
    }
  };

  if (!config || (config && !config.legend)) return <div>Loading..</div>;

  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        flexDirection:
          config &&
          config.legend &&
          config.legend.position &&
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
        style={{ width:'100%',height: "100vh" }}
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
                } else if (item.color == "#259EA6" || item.color == "#259ea6") {
                  markerColor = district_marker;
                } else if (item.color == "#FF0000" || item.color == "#ff0000") {
                  markerColor = red_marker;
                } else {
                  markerColor = yellow_marker;
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
                  <Marker position={item?.position} icon={iconPerson}>
                    <Popup
                      className="tooltip-popup"
                      onOpen={() => {
                        getToolTipData(
                          item?.district,
                          item?.block,
                          item?.school,
                          item?.ay,
                          item?.at
                        );
                      }}
                    >
                      {toolTipData?.type == 2 ? (
                        <div>
                          <p>
                            {toolTipData?.district.value ||
                              toolTipData?.block.value ||
                              toolTipData?.school.value ||
                              "NA"}
                          </p>
                          <br />
                          <span>
                            <span> {toolTipData?.SA1?.label}</span> :{" "}
                            {toolTipData?.SA1?.value || "NA"}
                          </span>
                          <br />
                          <span>
                            <span> {toolTipData?.SA2?.label}</span> :{" "}
                            {toolTipData?.SA2?.value || "NA"}
                          </span>
                          <br />
                          <span>
                            <span
                              style={{
                                fontWeight: "bold",
                                textDecoration: "underline",
                              }}
                            >
                              {toolTipData?.GradeWiseavgResult?.label}
                            </span>
                            <br />
                            {toolTipData?.GradeWiseavgResult?.grade1?.label}
                          </span>{" "}
                          <span>
                            {toolTipData?.GradeWiseavgResult?.grade1?.value ||
                              "NA"}
                          </span>{" "}
                          |{" "}
                          <span>
                            {toolTipData?.GradeWiseavgResult?.grade2?.label}
                          </span>{" "}
                          <span>
                            {toolTipData?.GradeWiseavgResult?.grade2?.value ||
                              "NA"}
                          </span>{" "}
                          |{" "}
                          <span>
                            {toolTipData?.GradeWiseavgResult?.grade3?.label}
                          </span>{" "}
                          <span>
                            {toolTipData?.GradeWiseavgResult?.grade3?.value ||
                              "NA"}
                          </span>
                          <br />
                          <span>
                            {toolTipData?.GradeWiseavgResult?.grade4?.label}
                          </span>{" "}
                          <span>
                            {toolTipData?.GradeWiseavgResult?.grade4?.value ||
                              "NA"}
                          </span>{" "}
                          |{" "}
                          <span>
                            {toolTipData?.GradeWiseavgResult?.grade5?.label}
                          </span>
                          <span>
                            {toolTipData?.GradeWiseavgResult?.grade5?.value ||
                              "NA"}
                          </span>
                        </div>
                      ) : toolTipData?.type == 1 ? (
                        <>
                          <div>
                            <span>
                              {toolTipData?.district?.value ||
                                toolTipData?.block?.value ||
                                toolTipData?.school?.value}
                            </span>
                            <br />
                            <span>
                              <span>
                                {toolTipData?.totalStudentEnrolled?.label}
                              </span>{" "}
                              :{" "}
                              {toolTipData?.totalStudentEnrolled?.value || "NA"}
                            </span>
                            <br />
                            <span>
                              <span>{toolTipData?.SA1?.label} </span> :{" "}
                              {" " + toolTipData?.SA1?.value || "NA"}
                            </span>
                            <br />
                            <span>
                              <span>{toolTipData?.SA2?.label} </span> :{" "}
                              {" " + toolTipData?.SA2?.value || "NA"}
                            </span>
                            <br />
                            <span
                              style={{
                                textDecoration: "underline",
                                fontWeight: "bold",
                              }}
                            >
                              {toolTipData?.gradeWiseAvgResult.label}
                            </span>
                            <br />
                            <span>
                              {toolTipData?.gradeWiseAvgResult?.grade1?.label} :{" "}
                              {toolTipData?.gradeWiseAvgResult?.grade1?.value ||
                                "NA"}
                            </span>{" "}
                            |{" "}
                            <span>
                              {toolTipData?.gradeWiseAvgResult?.grade2?.label}:{" "}
                              {toolTipData?.gradeWiseAvgResult?.grade2?.value ||
                                "NA"}
                            </span>{" "}
                            |{" "}
                            <span>
                              {toolTipData?.gradeWiseAvgResult?.grade3?.label}:{" "}
                              {toolTipData?.gradeWiseAvgResult?.grade3?.value ||
                                "NA"}
                            </span>
                            <br />
                            <span>
                              <span
                                style={{
                                  textDecoration: "underline",
                                  fontWeight: "bold",
                                }}
                              >
                                {toolTipData?.nipunStudent?.label}
                              </span>{" "}
                              :{" "}
                              <span>
                                {toolTipData?.nipunStudent?.value || "NA"}
                              </span>
                            </span>
                            <br />
                            <span
                              style={{
                                textDecoration: "underline",
                                fontWeight: "bold",
                              }}
                            >
                              {toolTipData?.gradeWiseNipunStudent.label}
                            </span>
                            <br />
                            <span>
                              {
                                toolTipData?.gradeWiseNipunStudent?.grade1
                                  ?.label
                              }{" "}
                              :{" "}
                              {toolTipData?.gradeWiseNipunStudent?.grade1
                                ?.value || "NA"}
                            </span>{" "}
                            |{" "}
                            <span>
                              {
                                toolTipData?.gradeWiseNipunStudent?.grade2
                                  ?.label
                              }{" "}
                              :{" "}
                              {toolTipData?.gradeWiseNipunStudent?.grade2
                                ?.value || "NA"}
                            </span>{" "}
                            |{" "}
                            <span>
                              {
                                toolTipData?.gradeWiseNipunStudent?.grade3
                                  ?.label
                              }{" "}
                              :{" "}
                              {toolTipData?.gradeWiseNipunStudent?.grade3
                                ?.value || "NA"}
                            </span>
                            <p></p>
                          </div>
                        </>
                      ) : (
                        <>
                          {/* <div>
                            {item.district || item.block || item.school}
                          </div>
                          <div>
                            Attendence: {toolTipData.Attendance || "NA"}
                          </div>
                          <div>CWSN: {toolTipData.CWSN || "NA"}</div>
                          <div>Enrollment: {toolTipData.Enrolment || "NA"}</div>
                          <div>PTR: {toolTipData.PTR || "NA"}</div> */}
                          <div>
                            <Spin style={{ margin: "auto" }} />
                          </div>
                        </>
                      )}
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
            marginTop:'10px',
            // flexDirection: "column",
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
                    height: 25,
                    backgroundColor: item.color,
                    padding: "0px",
                  }}
                />
                <label style={{ ...item, color: "black",fontSize:'30px' }}>{item.label}</label>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
