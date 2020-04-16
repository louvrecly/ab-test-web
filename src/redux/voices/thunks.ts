import { Dispatch } from 'redux';
import { IVoicesAction, loadVoicesSuccess, failed } from './actions';

const { REACT_APP_API_SERVER } = process.env;

export function loadVoices(threadId: string) {
  return async (dispatch: Dispatch<IVoicesAction>) => {
    const res = await fetch(
      `${REACT_APP_API_SERVER}/voices?thread_id=${threadId}`,
      { method: 'GET' }
    );
    const { isSuccess, data } = await res.json();

    if (isSuccess) {
      dispatch(loadVoicesSuccess(data));
    } else {
      dispatch(failed('LOAD_VOICES_FAILED', data));
    }
  };
}
