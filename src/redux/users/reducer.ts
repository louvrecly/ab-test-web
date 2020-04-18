import { IUsersState } from './state';
import { IUsersAction } from './actions';

const initialState: IUsersState = {
  users: []
};

export const usersReducer = (
  state: IUsersState = initialState,
  action: IUsersAction
): IUsersState => {
  switch (action.type) {
    case 'LOAD_USERS':
      const { users } = action;
      return {
        ...state,
        users
      };
    default:
      return state;
  }
};
