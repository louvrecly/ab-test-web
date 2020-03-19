import L from 'leaflet';

export const urlTemplate: string =
  'https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png';

export const attribution: string =
  '&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors';

export const options: L.MapOptions = {
  center: [22.2988, 114.1722],
  zoom: 12,
  zoomSnap: 0.1,
  zoomDelta: 0.5,
  zoomControl: false,
  doubleClickZoom: false
};
