import { ThreadJson } from 'models';

export interface IThreadsState {
  threads: Array<ThreadJson>;
  activeThread: ThreadJson | undefined;
  threadPlaying: boolean;
}
