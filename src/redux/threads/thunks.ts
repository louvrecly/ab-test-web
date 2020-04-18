import { Dispatch } from 'redux';
import { IThreadsAction, loadThreadsSuccess, failed } from './actions';

const { REACT_APP_API_SERVER } = process.env;

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
