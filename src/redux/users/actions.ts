import { User } from 'models';

export function getUsersSuccess(users: Array<User>) {
  return {
    type: 'GET_USERS' as 'GET_USERS',
    users
  };
}

export function failed(type: FAILED, msg: string) {
  return {
    type,
    msg
  };
}

type FAILED = 'GET_USERS_FAILED';

type UsersActionCreators = typeof getUsersSuccess | typeof failed;

export type IUsersAction = ReturnType<UsersActionCreators>;
