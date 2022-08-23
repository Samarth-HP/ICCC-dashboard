// import { Map } from "leaflet";
import { useMap, Rectangle, Polygon } from "react-leaflet";
import { useEffect, useMemo, useState } from "react";
import { bounds } from "./config.json";

const innerBounds = bounds.byGeoJson.map((item) => {
  return [item[1], item[0]];
});
const outerBounds = [
  [50.505, -29.09],
  [52.505, 29.09],
];

const redColor = { color: "red" };
const whiteColor = { color: "white" };

const MapBound = () => {
  const [bounds, setBounds] = useState(innerBounds);
  const map = useMap();

  useEffect(() => {
    innerBounds.length && map.fitBounds(innerBounds);
  });

  const innerHandlers = useMemo(
    () => ({
      click() {
        setBounds(innerBounds);
        map.fitBounds(innerBounds);
      },
    }),
    [map]
  );
  const outerHandlers = useMemo(
    () => ({
      click() {
        setBounds(outerBounds);
        map.fitBounds(outerBounds);
      },
    }),
    [map]
  );

  return (
    <>
      <Polygon
        positions={innerBounds}
        bounds={outerBounds}
        eventHandlers={outerHandlers}
        pathOptions={bounds === outerBounds ? redColor : whiteColor}
      />
      <Polygon
        positions={innerBounds}
        bounds={innerBounds}
        eventHandlers={innerHandlers}
        pathOptions={bounds === innerBounds ? redColor : whiteColor}
      />
    </>
  );
};

export default MapBound;
