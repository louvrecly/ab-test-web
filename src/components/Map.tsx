import React, { useEffect, useRef } from 'react';
import L from 'leaflet';

interface IMapProps {
  markersData: [number, number][];
}

const Map: React.FC<IMapProps> = (props: IMapProps) => {
  const mapRef: React.MutableRefObject<L.Map | null> = useRef(null);
  const layerRef: React.MutableRefObject<L.LayerGroup | null> = useRef(null);

  useEffect(() => {
    mapRef.current = L.map('map', {
      center: [22.2988, 114.1722],
      zoom: 12,
      zoomSnap: 0.1,
      zoomDelta: 0.5,
      zoomControl: false,
      doubleClickZoom: false,
      layers: [
        L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
          attribution:
            '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        })
      ]
    });
  }, []);

  useEffect(() => {
    layerRef.current = L.layerGroup().addTo(mapRef.current as L.Map);
  }, []);

  useEffect(() => {
    (layerRef.current as L.LayerGroup).clearLayers();
    props.markersData.forEach(marker => {
      L.marker(L.latLng(marker)).addTo(layerRef.current as L.LayerGroup);
    });
  });

  return <div id="map" />;
};

export default Map;
