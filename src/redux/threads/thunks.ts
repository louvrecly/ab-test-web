import { Dispatch } from 'redux';
import {
  IThreadsAction,
  getThreadsSuccess,
  failed
} from 'redux/threads/actions';

const { REACT_APP_API_SERVER } = process.env;

export function getThreads() {
  return async (dispatch: Dispatch<IThreadsAction>) => {
    const res = await fetch(`${REACT_APP_API_SERVER}/threads`, {
      method: 'GET'
    });
    const { isSuccess, data } = await res.json();

    if (isSuccess) {
      dispatch(getThreadsSuccess(data));
    } else {
      dispatch(failed('GET_THREADS_FAILED', data));
    }
  };
}
