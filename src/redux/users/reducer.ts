import { IUsersState } from 'redux/users/state';
import { IUsersAction } from 'redux/users/actions';

const initialState: IUsersState = {
  users: []
};

export const usersReducer = (
  state: IUsersState = initialState,
  action: IUsersAction
): IUsersState => {
  switch (action.type) {
    case 'GET_USERS':
      const { users } = action;
      return {
        ...state,
        users
      };
    default:
      return state;
  }
};
