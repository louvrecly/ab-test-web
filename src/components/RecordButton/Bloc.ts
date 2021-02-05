import { AudioRecorder } from "utils/audioRecorder";

/* Define startRecording procedures */
export const startRecording = (recorder: AudioRecorder | null) => {
  if (recorder) recorder.start();
  else console.log('recorder is not ready!');
};

/* Define stopRecording procedures */
export const stopRecording = (recorder: AudioRecorder | null) => {
  return recorder
    ? recorder.stop()
    : null;
};
