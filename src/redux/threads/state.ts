import { Thread } from 'models';

export interface IThreadsState {
  threads: Array<Thread>;
  activeThread: Thread | undefined;
  threadPlaying: boolean;
}
