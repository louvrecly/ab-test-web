import { Dispatch } from 'redux';
import { IUsersAction, getUsersSuccess, failed } from 'redux/users/actions';

const { REACT_APP_API_SERVER } = process.env;

export function getUsers() {
  return async (dispatch: Dispatch<IUsersAction>) => {
    const res = await fetch(`${REACT_APP_API_SERVER}/users`, {
      method: 'GET'
    });
    const { isSuccess, data } = await res.json();

    if (isSuccess) {
      dispatch(getUsersSuccess(data));
    } else {
      dispatch(failed('GET_USERS_FAILED', data));
    }
  };
}
