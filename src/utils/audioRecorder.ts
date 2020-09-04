export interface AudioData {
  audioBlob: Blob;
  audioUrl: string;
}

export interface AudioRecorder {
  start: () => void;
  stop: () => Promise<AudioData>;
}

export const audioRecorder = () =>
  new Promise(async (resolve: (audioRecorder: AudioRecorder) => void) => {
    const stream: MediaStream = await navigator.mediaDevices.getUserMedia({
      audio: true
    });
    const mediaRecorder: MediaRecorder = new MediaRecorder(stream);
    let audioChunk: Blob | undefined;

    const dataAvailableHandler = (event: BlobEvent) => {
      audioChunk = event.data;
    };

    mediaRecorder.addEventListener(
      'dataavailable',
      dataAvailableHandler as EventListenerOrEventListenerObject
    );

    const start = () => mediaRecorder.start();

    const stop = () =>
      new Promise((resolve: (audioData: AudioData) => void) => {
        const stopHandler: EventListenerOrEventListenerObject = () => {
          const audioBlob = new Blob([audioChunk as Blob]);
          const audioUrl = URL.createObjectURL(audioBlob);
          const audioData: AudioData = { audioBlob, audioUrl };
          resolve(audioData);
        };

        mediaRecorder.addEventListener('stop', stopHandler);

        mediaRecorder.stop();
      });

    const audioRecorder: AudioRecorder = { start, stop };
    resolve(audioRecorder);
  });
