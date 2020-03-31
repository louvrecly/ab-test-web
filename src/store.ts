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
import { IUsersState } from 'redux/users/state';
import { IComponentsState } from 'redux/components/state';
import { IThreadsAction } from 'redux/threads/actions';
import { IUsersAction } from 'redux/users/actions';
import { IComponentsAction } from 'redux/components/actions';
import { threadsReducer } from 'redux/threads/reducer';
import { usersReducer } from 'redux/users/reducer';
import { componentsReducer } from 'redux/components/reducer';

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
  users: IUsersState;
  components: IComponentsState;
  router: RouterState;
}

type IRootAction = IThreadsAction | IUsersAction | IComponentsAction;

const rootReducer = combineReducers<IRootState>({
  threads: threadsReducer,
  users: usersReducer,
  components: componentsReducer,
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
