import React, { useEffect, useRef } from 'react';
import { connect } from 'react-redux';
import L from 'leaflet';
import { Thread } from 'models';
import { IRootState, ThunkResult } from 'store';
import { urlTemplate, attribution, options } from './constant';
import classes from './styles.module.scss';
import { setActiveThread } from 'redux/threads/actions';

interface IMapProps {
  threads: Array<Thread>;
  setActiveThread: (thread?: Thread) => void;
}

const Map: React.FC<IMapProps> = (props: IMapProps) => {
  const mapRef: React.MutableRefObject<L.Map | null> = useRef(null);
  const layerRef: React.MutableRefObject<L.LayerGroup | null> = useRef(null);
  const markerRef: React.MutableRefObject<L.Marker | null> = useRef(null);

  /* initialize map and add tile layer */
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

  /* create layer group */
  useEffect(() => {
    layerRef.current = L.layerGroup().addTo(mapRef.current as L.Map);
  }, []);

  /* create popup and markers */
  useEffect(() => {
    (layerRef.current as L.LayerGroup).clearLayers();
    const icon: L.DivIcon = L.divIcon({ className: classes.icon });

    props.threads.forEach(thread => {
      const position = L.latLng([
        (thread.location as any)._latitude,
        (thread.location as any)._longitude
      ]);

      const popup: L.Popup = L.popup({
        className: classes.popup,
        closeButton: false,
        pane: 'shadowPane' /* avoid masking other markers */
      });

      L.marker(position, { icon })
        .bindPopup(popup)
        .on('popupopen', (event: L.LeafletEvent) => {
          markerRef.current = event.target as L.Marker;
          props.setActiveThread(thread);
          (mapRef.current as L.Map).flyTo(position);
        })
        .on('popupclose', () => {
          markerRef.current = null;
          props.setActiveThread();
        })
        .addTo(layerRef.current as L.LayerGroup);
    });
  }, [props]);

  return <div id="map" className={classes.map} />;
};

const mapStateToProps = (state: IRootState) => {
  return {
    threads: state.threads.threads
  };
};

const mapDispatchToProps = (dispatch: ThunkResult) => {
  return {
    setActiveThread: (thread?: Thread) => dispatch(setActiveThread(thread))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Map);
