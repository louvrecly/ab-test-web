import { IAuthState } from "./state";
import { IAuthAction } from "./actions";

const initialState: IAuthState = {
  user: null
};

export const authReducer = (
  state: IAuthState = initialState,
  action: IAuthAction
): IAuthState => {
  switch (action.type) {
    case 'SET_USER':
      const { user } = action;
      return {
        ...state,
        user
      };
    default:
      return state;
  }
};
