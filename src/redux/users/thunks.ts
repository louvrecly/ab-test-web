import { Dispatch } from 'redux';
import { REACT_APP_API_SERVER } from 'variables';
import { IUsersAction, loadUsersSuccess, failed } from './actions';

export function loadUsers() {
  return async (dispatch: Dispatch<IUsersAction>) => {
    const res = await fetch(`${REACT_APP_API_SERVER}/users`, {
      method: 'GET'
    });
    const { isSuccess, data } = await res.json();

    if (isSuccess) {
      dispatch(loadUsersSuccess(data));
    } else {
      dispatch(failed('LOAD_USERS_FAILED', data));
    }
  };
}
