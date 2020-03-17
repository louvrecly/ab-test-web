import React, { useEffect } from 'react';
import L from 'leaflet';

interface IMapProps {
  children: React.ReactNode;
}

const Map: React.FC<IMapProps> = (props: IMapProps) => {
  useEffect(() => {
    L.map('map', {
      center: [22.2988, 114.1722],
      zoom: 12,
      zoomSnap: 0.1,
      zoomDelta: 0.5,
      doubleClickZoom: false,
      layers: [
        L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
          attribution:
            '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        })
      ]
    });
  }, []);

  return <div id="map">{props.children}</div>;
};

export default Map;
