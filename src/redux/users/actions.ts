import { User } from 'models';

export function loadUsersSuccess(users: Array<User>) {
  return {
    type: 'LOAD_USERS' as 'LOAD_USERS',
    users
  };
}

export function failed(type: FAILED, msg: string) {
  return {
    type,
    msg
  };
}

type FAILED = 'LOAD_USERS_FAILED';

type UsersActionCreators = typeof loadUsersSuccess | typeof failed;

export type IUsersAction = ReturnType<UsersActionCreators>;
