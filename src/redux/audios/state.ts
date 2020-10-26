import { AudioRecorder, AudioData } from 'utils/audioRecorder';

export interface IAudiosState {
  recorder: AudioRecorder | null;
  audio: AudioData | null;
  isRecording: boolean;
}
