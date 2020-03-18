import React, { useEffect, useRef } from 'react';
import L from 'leaflet';
import classes from './Map.module.scss';

interface IMapProps {
  markersData: [number, number][];
}

const Map: React.FC<IMapProps> = (props: IMapProps) => {
  const mapRef: React.MutableRefObject<L.Map | null> = useRef(null);
  const layerRef: React.MutableRefObject<L.LayerGroup | null> = useRef(null);
  const divIcon: L.DivIcon = L.divIcon({ className: classes.icon });

  useEffect(() => {
    mapRef.current = L.map('map', {
      center: [22.2988, 114.1722],
      zoom: 12,
      zoomSnap: 0.1,
      zoomDelta: 0.5,
      zoomControl: false,
      doubleClickZoom: false,
      layers: [
        L.tileLayer(
          'https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png',
          {
            className: classes['tile-layer'],
            attribution:
              '&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
          }
        )
      ]
    });
  }, []);

  useEffect(() => {
    layerRef.current = L.layerGroup().addTo(mapRef.current as L.Map);
  }, []);

  useEffect(() => {
    (layerRef.current as L.LayerGroup).clearLayers();
    props.markersData.forEach(marker => {
      L.marker(L.latLng(marker), { icon: divIcon })
        .on('click', event => {
          (mapRef.current as L.Map).flyTo(L.latLng(marker));
        })
        .addTo(layerRef.current as L.LayerGroup);
    });
  });

  return <div id="map" style={{ height: '100%' }} />;
};

export default Map;
