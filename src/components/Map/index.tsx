import React, { useEffect, useRef } from 'react';
import { connect } from 'react-redux';
import L from 'leaflet';
import { Thread } from 'models';
import { IRootState, ThunkResult } from 'store';
import { urlTemplate, attribution, options } from './constant';
import classes from './styles.module.scss';

interface IMapProps {
  threads: Array<Thread>;
}

const Map: React.FC<IMapProps> = (props: IMapProps) => {
  const mapRef: React.MutableRefObject<L.Map | null> = useRef(null);
  const layerRef: React.MutableRefObject<L.LayerGroup | null> = useRef(null);

  useEffect(() => {
    const container = L.DomUtil.get('map');
    if (container) {
      (container as any)._leaflet_id = null;
    }
    const tileLayer: L.TileLayer = L.tileLayer(urlTemplate, {
      className: classes['tile-layer'],
      attribution
    });
    const mapOptions: L.MapOptions = { ...options, layers: [tileLayer] };
    mapRef.current = L.map('map', mapOptions);
  }, []);

  useEffect(() => {
    layerRef.current = L.layerGroup().addTo(mapRef.current as L.Map);
  }, []);

  useEffect(() => {
    (layerRef.current as L.LayerGroup).clearLayers();
    const icon: L.DivIcon = L.divIcon({ className: classes.icon });

    props.threads.forEach(({ location }) => {
      const position = L.latLng([
        (location as any)._latitude,
        (location as any)._longitude
      ]);

      L.marker(position, { icon })
        .on('click', () => {
          (mapRef.current as L.Map).flyTo(position);
        })
        .addTo(layerRef.current as L.LayerGroup);
    });
  }, [props.threads]);

  return <div id="map" className={classes.map} />;
};

const mapStateToProps = (state: IRootState) => {
  return {
    threads: state.threads.threads
  };
};

const mapDispatchToProps = (dispatch: ThunkResult) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Map);
