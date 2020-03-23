import {
  compose,
  createStore,
  combineReducers,
  applyMiddleware,
  Store
} from 'redux';
import { createBrowserHistory } from 'history';
import {
  RouterState,
  connectRouter,
  routerMiddleware
} from 'connected-react-router';
import thunk, { ThunkDispatch } from 'redux-thunk';
import logger from 'redux-logger';
import { IThreadsState } from 'redux/threads/state';
import { IThreadsAction } from 'redux/threads/actions';
import { threadsReducer } from 'redux/threads/reducer';

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: any;
    getEventListeners: (element: any) => Array<any>;
  }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const history = createBrowserHistory();

export interface IRootState {
  threads: IThreadsState;
  router: RouterState;
}

type IRootAction = IThreadsAction;

const rootReducer = combineReducers<IRootState>({
  threads: threadsReducer,
  router: connectRouter(history)
});

export type ThunkResult = ThunkDispatch<IRootState, null, IRootAction>;

const store: Store<IRootState, IRootAction> = createStore(
  rootReducer,
  composeEnhancers(
    applyMiddleware(logger),
    applyMiddleware(thunk),
    applyMiddleware(routerMiddleware(history))
  )
);

export default store;
