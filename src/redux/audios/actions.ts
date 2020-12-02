import { AudioRecorder, AudioData } from 'utils/audioRecorder';

export function setRecorder(recorder: AudioRecorder | null) {
  return {
    type: 'SET_RECORDER' as 'SET_RECORDER',
    recorder
  };
}

export function setAudio(audio: AudioData | null) {
  return {
    type: 'SET_AUDIO' as 'SET_AUDIO',
    audio
  };
}

export function setIsRecordingState(isRecording: boolean) {
  return {
    type: 'SET_IS_RECORDING_STATE' as 'SET_IS_RECORDING_STATE',
    isRecording
  };
}

type AudiosActionCreators =
  | typeof setRecorder
  | typeof setAudio
  | typeof setIsRecordingState;

export type IAudiosAction = ReturnType<AudiosActionCreators>;
