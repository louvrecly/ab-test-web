import { IAudiosState } from './state';
import { IAudiosAction } from './actions';

const initialState: IAudiosState = {
  recorder: null,
  audio: undefined,
  isRecording: false
};

export const audiosReducer = (
  state: IAudiosState = initialState,
  action: IAudiosAction
): IAudiosState => {
  switch (action.type) {
    case 'SET_RECORDER':
      const { recorder } = action;
      return {
        ...state,
        recorder
      };
    case 'SET_AUDIO':
      const { audio } = action;
      return {
        ...state,
        audio
      };
    case 'SET_IS_RECORDING_STATE':
      const { isRecording } = action;
      return {
        ...state,
        isRecording
      };
    default:
      return state;
  }
};
