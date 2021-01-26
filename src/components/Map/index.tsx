import React, { useEffect, useRef, useState } from 'react';
import { useHistory } from 'react-router-dom';
import L from 'leaflet';
import { IRootState, ThunkResult } from 'store';
import { DrawerSide } from 'redux/components/state';
import {
  setDrawerState,
  setShowRecordButtonState,
  setShowPlayListState
} from 'redux/components/actions';
import { connect } from 'react-redux';
import { ThreadJson, LocationJson } from 'models';
import { REACT_APP_URL_PREFIX } from 'variables';
import { urlTemplate, attribution, options } from './constant';
import classes from './styles.module.scss';

interface IMapProps {
  activeThread: ThreadJson | null;
  threads: Array<ThreadJson>;
  geolocation: LocationJson | null;
  setDrawerState: (side: DrawerSide, open: boolean) => void;
  setShowRecordButtonState: (showRecordButton: boolean) => void;
  setShowPlayListState: (showPlayList: boolean) => void;
}

interface MarkersMap {
  [threadId: string]: L.Marker;
}

const Map: React.FC<IMapProps> = ({
  activeThread,
  threads,
  geolocation,
  setDrawerState, /* tslint:disable-line */
  setShowRecordButtonState, /* tslint:disable-line */
  setShowPlayListState /* tslint:disable-line */
}: IMapProps) => {
  const mapRef: React.MutableRefObject<L.Map | null> = useRef(null);
  const layerRef: React.MutableRefObject<L.LayerGroup | null> = useRef(null);
  const tempLayerRef: React.MutableRefObject<L.LayerGroup | null> = useRef(null);
  const markerRef: React.MutableRefObject<L.Marker | null> = useRef(null);

  const [markers, setMarkers] = useState<MarkersMap>({});
  const history = useHistory();

  /* Initialize map and add tile layer */
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

    /* Create layer group */
    layerRef.current = L.layerGroup().addTo(mapRef.current as L.Map);
    tempLayerRef.current = L.layerGroup().addTo(mapRef.current as L.Map);
  }, []);

  /* Create thread popups and markers */
  useEffect(() => {
    (layerRef.current as L.LayerGroup).clearLayers();
    const icon: L.DivIcon = L.divIcon({ className: classes.thread });

    threads.forEach(thread => {
      const position = L.latLng([
        thread.location._latitude,
        thread.location._longitude
      ]);

      const popup: L.Popup = L.popup({
        className: classes.popup,
        closeButton: false,
        pane: 'shadowPane' /* Avoid masking other markers */
      });

      const popupOpenHandler = () => {
        (mapRef.current as L.Map).flyTo(position);
        setShowPlayListState(false);
        setShowRecordButtonState(false);
        setDrawerState('bottom', true);

        const pathname = `${REACT_APP_URL_PREFIX}/threads/${thread.id}`;
        history.push(pathname);
      };

      const popupCloseHandler = () => {
        markerRef.current = null;
        setShowRecordButtonState(true);
        setDrawerState('bottom', false);
        const pathname = REACT_APP_URL_PREFIX as string;
        history.push(pathname);
      };

      const marker = L.marker(position, { icon })
        .bindPopup(popup)
        .on('popupopen', popupOpenHandler)
        .on('popupclose', popupCloseHandler)
        .addTo(layerRef.current as L.LayerGroup);

      setMarkers(prevMarkers => ({
        ...prevMarkers,
        [thread.id as string]: marker
      }));
    });
  }, [
    threads,
    history,
    setDrawerState,
    setShowRecordButtonState,
    setShowPlayListState
  ]);

  /* Create new thread marker */
  useEffect(() => {
    if (geolocation) {
      const icon: L.DivIcon = L.divIcon({ className: classes['new-thread'] });
      const position = L.latLng([
        geolocation._latitude,
        geolocation._longitude
      ]);

      markerRef.current = L.marker(position, { icon }).addTo(
        tempLayerRef.current as L.LayerGroup
      );

      (mapRef.current as L.Map).flyTo(position);
    } else if (tempLayerRef.current) {
      tempLayerRef.current.clearLayers();
    }
  }, [geolocation]);

  /* Open popup on activeThread changed */
  useEffect(() => {
    if (activeThread) {
      markerRef.current = markers[activeThread.id as string];

      const isPopupOpen = markerRef.current.isPopupOpen();
      if (!isPopupOpen) {
        markerRef.current.openPopup();
      }
    } else if (markerRef.current) {
      markerRef.current.closePopup();
    }
  }, [activeThread]); /* eslint-disable-line react-hooks/exhaustive-deps */

  return <div id="map" className={classes.map} />;
};

const mapStateToProps = (state: IRootState) => {
  return {
    activeThread: state.threads.activeThread,
    threads: state.threads.threads,
    drawerState: state.components.drawerState,
    geolocation: state.geolocation.geolocation
  };
};

const mapDispatchToProps = (dispatch: ThunkResult) => {
  return {
    setDrawerState: (side: DrawerSide, open: boolean) =>
      dispatch(setDrawerState(side, open)),
    setShowRecordButtonState: (showRecordButton: boolean) =>
      dispatch(setShowRecordButtonState(showRecordButton)),
    setShowPlayListState: (showPlayList: boolean) =>
      dispatch(setShowPlayListState(showPlayList))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Map);
