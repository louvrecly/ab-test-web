import { Voice } from 'models';

export function loadVoicesSuccess(voices: Array<Voice>) {
  return {
    type: 'LOAD_VOICES' as 'LOAD_VOICES',
    voices
  };
}

export function failed(type: FAILED, msg: string) {
  return {
    type,
    msg
  };
}

type FAILED = 'LOAD_VOICES_FAILED';

type VoicesActionCreators = typeof loadVoicesSuccess | typeof failed;

export type IVoicesAction = ReturnType<VoicesActionCreators>;
