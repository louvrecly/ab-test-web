export function setUser(user: firebase.User | null) {
  return {
    type: 'SET_USER' as 'SET_USER',
    user
  };
}

type AuthActionCreators = typeof setUser;

export type IAuthAction = ReturnType<AuthActionCreators>;
