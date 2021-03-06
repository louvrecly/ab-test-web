import L from 'leaflet';

const { REACT_APP_STADIA_MAP_API_KEY } = process.env;

const tsimShaTsuiLatLng: [number, number] = [22.2988, 114.1722];

export const urlTemplate: string = `https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png?api_key=${REACT_APP_STADIA_MAP_API_KEY}`;

export const attribution: string = `
  &copy; <a href="https://stadiamaps.com/">Stadia Maps</a>,
  &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a>
  &copy; <a href="http://openstreetmap.org">OpenStreetMap</a>
  contributors
`;

export const options: L.MapOptions = {
  center: tsimShaTsuiLatLng,
  zoom: 12,
  zoomSnap: 0.1,
  zoomDelta: 0.5,
  zoomControl: false,
  doubleClickZoom: false
};
