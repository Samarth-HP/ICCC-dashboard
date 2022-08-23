import React from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  Polygon,
  SVGOverlay,
} from "react-leaflet";
import MarkerClusterGroup from "react-leaflet-markercluster";
import L from "leaflet";
import config from "./config.json";
import bounds from "./bounds.json";
import MapBound from "./MapBound";
import "./Map.css";
import MapOverlays from "./MapOverlays";
import red_marker from "../../assets/Map_marker_red.svg";
import green_marker from "../../assets/Map_marker_green.svg";
import blue_marker from "../../assets/Map_marker_blue.svg";
import yellow_marker from "../../assets/Map_marker_yellow.svg";

export default function MapComponent() {
  const center = config.markers.postions[0].position || [28.7041, 77.1025];
  const byGeoJson = config.bounds?.byGeoJson?.length;
  const byBbox = config.bounds?.byBbox?.length;

  const tempBounds = [
    [76.715049743652401, 31.588310241699446],
    [76.716567993164119, 31.585119247436467],
  ];
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
        {(byGeoJson || byBbox) && <MapBound />}
        {/* <MapBound /> */}
        {byGeoJson && <MapOverlays />}
        {!byGeoJson && //
          (config.markers.shouldClusterMarkers ? (
            // <MarkerClusterGroup>
            <div>
              {config.markers.postions.map((item) => {
                let markerColor = blue_marker;
                if (item.color == "red") {
                  markerColor = red_marker;
                } else if (item.color == "yellow") {
                  markerColor = yellow_marker;
                } else if (item.color == "blue") {
                  markerColor = blue_marker;
                } else if (item.color == "green") {
                  markerColor = green_marker;
                }
                const iconPerson = new L.Icon({
                  // iconUrl: new URL(`${item.icon}`),
                  // iconRetinaUrl: new URL(`${item.icon}`),
                  iconUrl: markerColor,
                  iconRetinaUrl: markerColor,
                  iconSize: new L.Point(30, 50),
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
              {config.markers.postions.map((item) => {
                const iconPerson = new L.Icon({
                  // iconUrl: new URL(`${item.icon}`),
                  // iconRetinaUrl: new URL(`${item.icon}`),
                  iconSize: new L.Point(30, 50),
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
                <label style={{...item,color: "black"}}>{item.label}</label>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
