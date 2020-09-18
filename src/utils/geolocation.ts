function getGeolocation() {
  const { geolocation } = window.navigator;
  if (geolocation) {
    const getCurrentPositionPromise = () => {
      return new Promise(
        (resolve: PositionCallback, reject: PositionErrorCallback) => {
          geolocation.getCurrentPosition(resolve, reject);
        }
      );
    };
    return getCurrentPositionPromise();
  } else {
    console.log('Geolocation is not supported!'); /* tslint:disable-line */
  }
}

function positionToLocationJson(position: Position) {
  const {
    coords: { latitude, longitude }
  } = position;
  const location = {
    _latitude: latitude,
    _longitude: longitude
  };
  return location;
}

export async function getLocationJson() {
  const position = await getGeolocation();
  return position ? positionToLocationJson(position) : undefined;
}
