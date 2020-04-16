import { Thread } from 'models';

export function loadThreadsSuccess(threads: Array<Thread>) {
  return {
    type: 'LOAD_THREADS' as 'LOAD_THREADS',
    threads
  };
}

export function setActiveThread(activeThread?: Thread) {
  return {
    type: 'SET_ACTIVE_THREAD' as 'SET_ACTIVE_THREAD',
    activeThread
  };
}

export function toggleThreadPlaying() {
  return {
    type: 'TOGGLE_THREAD_PLAYING' as 'TOGGLE_THREAD_PLAYING'
  };
}

export function stopPlayingThread() {
  return {
    type: 'STOP_PLAYING_THREAD' as 'STOP_PLAYING_THREAD'
  };
}

export function failed(type: FAILED, msg: string) {
  return {
    type,
    msg
  };
}

type FAILED = 'LOAD_THREADS_FAILED';

type ThreadsActionCreators =
  | typeof loadThreadsSuccess
  | typeof setActiveThread
  | typeof toggleThreadPlaying
  | typeof stopPlayingThread
  | typeof failed;

export type IThreadsAction = ReturnType<ThreadsActionCreators>;
