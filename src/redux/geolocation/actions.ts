import { LocationJson } from 'models';

export function setGeolocation(geolocation: LocationJson | null) {
  return {
    type: 'SET_GEOLOCATION' as 'SET_GEOLOCATION',
    geolocation
  };
}

type GeolocationActionCreators = typeof setGeolocation;

export type IGeolocationAction = ReturnType<GeolocationActionCreators>;
