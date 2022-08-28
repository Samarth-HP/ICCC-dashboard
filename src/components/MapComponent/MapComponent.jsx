import React from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  Polygon,
  SVGOverlay,
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
import { Button, Col, Popover } from "antd";

export default function MapComponent({ config, markers }) {
  // console.log('markers?', markers?.postions[0]?.position);

  const center = markers?.postions[0]?.position || [28.7041, 77.1025];
  const byGeoJson = config.bounds?.byGeoJson?.length;
  const byBbox = config.bounds?.byBbox?.length;

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
                  // className: "leaflet-div-icon",
                });
                return (
                  <Marker position={item.position} icon={iconPerson}>
                    <Popup>
                      <div style={{ ...item.tooltipCSS }}>{item.tooltip}</div>
                    </Popup>
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
