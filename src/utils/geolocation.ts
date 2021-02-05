import { LocationJson } from "models";

interface GeolocationPositionError {
  code: number,
  message: string
}

function positionToLocationJson(position: Position) {
  const {
    coords: { latitude, longitude }
  } = position;
  const location: LocationJson = {
    _latitude: latitude,
    _longitude: longitude
  };
  return location;
}

export function getGeolocation(saveLocationJson: (locationJson: LocationJson) => void) {
  const { geolocation } = window.navigator;
  if (geolocation) {
    let watchId: number;

    const onSuccess = (position: Position) => {
      const location = positionToLocationJson(position);
      saveLocationJson(location);
      geolocation.clearWatch(watchId);
    };
    const onError = ({ code, message }: GeolocationPositionError) => console.log(`ERROR(${code}): ${message}`);

    watchId = geolocation.watchPosition(onSuccess, onError);
    return watchId;
  } else {
    console.log('Geolocation is not supported!'); /* tslint:disable-line */
    return null;
  }
}

export function clearGeoLocationWatcher(watchId: number | null) {
  const { geolocation } = window.navigator;
  if (geolocation && watchId) geolocation.clearWatch(watchId);
}
