import { Dispatch } from 'redux';
import { ThreadJson } from 'models';
import { REACT_APP_API_SERVER } from 'variables';
import {
  IThreadsAction,
  loadThreadsSuccess,
  createThreadSuccess,
  failed
} from './actions';

export function loadThreads() {
  return async (dispatch: Dispatch<IThreadsAction>) => {
    const res = await fetch(`${REACT_APP_API_SERVER}/threads`, {
      method: 'GET'
    });
    const { isSuccess, data } = await res.json();

    if (isSuccess) {
      dispatch(loadThreadsSuccess(data));
    } else {
      dispatch(failed('LOAD_THREADS_FAILED', data));
    }
  };
}

export function createThread(newThread: ThreadJson) {
  return async (dispatch: Dispatch<IThreadsAction>) => {
    const res = await fetch(`${REACT_APP_API_SERVER}/threads`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json; charset=utf-8' },
      body: JSON.stringify(newThread)
    });
    const { isSuccess, data } = await res.json();

    if (isSuccess) {
      dispatch(createThreadSuccess(data));
      return data as ThreadJson;
    } else {
      dispatch(failed('CREATE_THREAD_FAILED', data));
      return null;
    }
  };
}
