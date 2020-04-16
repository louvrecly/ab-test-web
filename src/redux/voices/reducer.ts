import { IVoicesState } from './state';
import { IVoicesAction } from './actions';

const initialState: IVoicesState = {
  voices: []
};

export const voicesReducer = (
  state: IVoicesState = initialState,
  action: IVoicesAction
): IVoicesState => {
  switch (action.type) {
    case 'LOAD_VOICES':
      const { voices } = action;
      return {
        ...state,
        voices
      };
    default:
      return state;
  }
};
