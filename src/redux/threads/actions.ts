import { Thread } from 'models';

export function getThreadsSuccess(threads: Array<Thread>) {
  return {
    type: 'GET_THREADS' as 'GET_THREADS',
    threads
  };
}

export function failed(type: FAILED, msg: string) {
  return {
    type,
    msg
  };
}

type FAILED = 'GET_THREADS_FAILED';

type ThreadsActionCreators = typeof getThreadsSuccess | typeof failed;

export type IThreadsAction = ReturnType<ThreadsActionCreators>;