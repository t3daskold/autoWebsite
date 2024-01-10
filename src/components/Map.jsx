import { GoogleMap, MarkerF } from "@react-google-maps/api";
import React, { useMemo } from "react";
import mapImage from '../assets/map.png'

const defaultOptions = {
  panControl: true,
  zoomControl: true,
  mapTypeControl: false,
  scaleControl: false,
  streetViewControl: true,
  rotateControl: true,
  clickableIcons: false,
  keyboardShortcuts: false,
  scrollwheel: false,
  zoom: 18,
  disableDoubleClickZoom: true,
  fullScreenControl: false,
};
export default function Map() {
  const mapRef = React.useRef(undefined);

  const onLoad = React.useCallback(function callback(map) {
    mapRef.current = map;
  }, []);

  const onUnmount = React.useCallback(function callback(map) {
    mapRef.current = undefined;
  }, []);
  const center = useMemo(() => ({ lat: 50.39642, lng: 30.48825 }), []);

  return (
    <img
      className="map-container"
      src={mapImage}
    >
    </img>
  );
}
