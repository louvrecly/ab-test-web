import { ThreadJson } from 'models';

export function loadThreadsSuccess(threads: Array<ThreadJson>) {
  return {
    type: 'LOAD_THREADS' as 'LOAD_THREADS',
    threads
  };
}

export function createThreadSuccess(newThread: ThreadJson) {
  return {
    type: 'CREATE_THREAD' as 'CREATE_THREAD',
    newThread
  };
}

export function setActiveThread(activeThread: ThreadJson | null) {
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

type FAILED = 'LOAD_THREADS_FAILED' | 'CREATE_THREAD_FAILED';

type ThreadsActionCreators =
  | typeof loadThreadsSuccess
  | typeof createThreadSuccess
  | typeof setActiveThread
  | typeof toggleThreadPlaying
  | typeof stopPlayingThread
  | typeof failed;

export type IThreadsAction = ReturnType<ThreadsActionCreators>;
