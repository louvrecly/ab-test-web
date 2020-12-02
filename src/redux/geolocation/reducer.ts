import { IGeolocationState } from './state';
import { IGeolocationAction } from './actions';

const initialState: IGeolocationState = {
  geolocation: null
};

export const geolocationReducer = (
  state: IGeolocationState = initialState,
  action: IGeolocationAction
): IGeolocationState => {
  switch (action.type) {
    case 'SET_GEOLOCATION':
      const { geolocation } = action;
      return {
        ...state,
        geolocation
      };
    default:
      return state;
  }
};
