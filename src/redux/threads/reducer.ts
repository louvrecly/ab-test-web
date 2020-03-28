import { IThreadsState } from 'redux/threads/state';
import { IThreadsAction } from 'redux/threads/actions';

const initialState: IThreadsState = {
  threads: [],
  activeThread: undefined
};

export const threadsReducer = (
  state: IThreadsState = initialState,
  action: IThreadsAction
): IThreadsState => {
  switch (action.type) {
    case 'GET_THREADS':
      const { threads } = action;
      return {
        ...state,
        threads
      };
    case 'SET_ACTIVE_THREAD':
      const { activeThread } = action;
      return {
        ...state,
        activeThread
      };
    default:
      return state;
  }
};
