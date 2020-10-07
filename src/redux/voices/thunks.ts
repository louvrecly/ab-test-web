import { Dispatch } from 'redux';
import { VoiceJson } from 'models';
import { REACT_APP_API_SERVER } from 'variables';
import { IVoicesAction, loadVoicesSuccess, failed } from './actions';

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

export function createVoice(newVoice: VoiceJson, audioBlob: Blob) {
  const voiceString = JSON.stringify(newVoice);
  const formData = new FormData();
  formData.append('voice_string', voiceString);
  formData.append('audio_blob', audioBlob);

  return async (dispatch: Dispatch<IVoicesAction>) => {
    const res = await fetch(`${REACT_APP_API_SERVER}/voices`, {
      method: 'POST',
      body: formData
    });
    const { isSuccess, data } = await res.json();

    if (isSuccess) {
      return data as VoiceJson;
    } else {
      dispatch(failed('CREATE_VOICE_FAILED', data));
    }
  };
}
