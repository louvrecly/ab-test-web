import { IThreadsState } from './state';
import { IThreadsAction } from './actions';
import { ThreadJson } from 'models';

const initialState: IThreadsState = {
  threads: [],
  activeThread: undefined,
  threadPlaying: false
};

export const threadsReducer = (
  state: IThreadsState = initialState,
  action: IThreadsAction
): IThreadsState => {
  switch (action.type) {
    case 'LOAD_THREADS': {
      const { threads } = action;
      return {
        ...state,
        threads
      };
    }
    case 'CREATE_THREAD': {
      const { newThread } = action;
      const threads: Array<ThreadJson> = state.threads.concat(newThread);
      return {
        ...state,
        threads
      };
    }
    case 'SET_ACTIVE_THREAD': {
      const { activeThread } = action;
      return {
        ...state,
        activeThread
      };
    }
    case 'TOGGLE_THREAD_PLAYING': {
      const threadPlaying = !state.threadPlaying;
      return {
        ...state,
        threadPlaying
      };
    }
    case 'STOP_PLAYING_THREAD': {
      return {
        ...state,
        threadPlaying: false
      };
    }
    default:
      return state;
  }
};
