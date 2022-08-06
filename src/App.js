import React, { useState, useEffect, useRef } from "react";
import "./App.css";
import "@tomtom-international/web-sdk-maps/dist/maps.css";
import * as tt from "@tomtom-international/web-sdk-maps";

function App() {
  const mapElement = useRef();
  const [mapLongitude, setMapLongitude] = useState(-121.91599);
  const [mapLatitude, setMapLatitude] = useState(37.36765);
  const [mapZoom, setMapZoom] = useState(13);
  const [map, setMap] = useState({});

  useEffect(() => {
    let map = tt.map({
      key: process.env.REACT_APP_TOM_TOM_API_KEY,
      container: mapElement.current,
      stylesVisibility: {
        trafficIncidents: true,
        trafficFlow: true,
      },
      center: [mapLongitude, mapLatitude],
      zoom: mapZoom,
    });
    setMap(map);
    return () => map.remove();
  }, [mapLongitude, mapLatitude]);
  return (
    <div className="App">
      <div ref={mapElement} className="mapDiv" />
      <div className="search-bar">
        <h1>Where to?</h1>
        <input
          type="text"
          id="longitude"
          className="longitude"
          placeholder="Put in Longitude"
          onChange={(e) => {
           setMapLongitude(e.target.value);
          }}
        />
        <input
          type="text"
          id="latitude"
          className="latitude"
          placeholder="Put in latitude"
          onChange={(e) => {
          setMapLatitude(e.target.value);
          }}
        />
      </div>
    </div>
  );
}

export default App;
