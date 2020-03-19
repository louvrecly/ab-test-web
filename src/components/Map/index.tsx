import React, { useEffect, useRef } from 'react';
import L from 'leaflet';
import classes from './Map.module.scss';
import { urlTemplate, attribution, options } from './constant';

interface IMapProps {
  markersData: [number, number][];
}

const Map: React.FC<IMapProps> = (props: IMapProps) => {
  const mapRef: React.MutableRefObject<L.Map | null> = useRef(null);
  const layerRef: React.MutableRefObject<L.LayerGroup | null> = useRef(null);

  const icon: L.DivIcon = L.divIcon({ className: classes.icon });
  const tileLayer: L.TileLayer = L.tileLayer(urlTemplate, {
    className: classes['tile-layer'],
    attribution
  });
  const mapOptions: L.MapOptions = { ...options, layers: [tileLayer] };
  const style: React.CSSProperties = { height: '100%' };

  useEffect(() => {
    mapRef.current = L.map('map', mapOptions);
  }, [mapOptions]);

  useEffect(() => {
    layerRef.current = L.layerGroup().addTo(mapRef.current as L.Map);
  }, []);

  useEffect(() => {
    (layerRef.current as L.LayerGroup).clearLayers();
    props.markersData.forEach(marker => {
      L.marker(L.latLng(marker), { icon })
        .on('click', () => {
          (mapRef.current as L.Map).flyTo(L.latLng(marker));
        })
        .addTo(layerRef.current as L.LayerGroup);
    });
  });

  return <div id="map" style={style} />;
};

export default Map;
