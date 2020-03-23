import { IThreadsState } from 'redux/threads/state';
import { IThreadsAction } from 'redux/threads/actions';

const initialState: IThreadsState = {
  threads: []
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
    default:
      return state;
  }
};
