import { AudioRecorder, AudioData } from 'utils/audioRecorder';

export interface IAudiosState {
  recorder: AudioRecorder | null;
  audio: AudioData | undefined;
  isRecording: boolean;
}
