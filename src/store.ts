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
import { IVoicesState } from 'redux/voices/state';
import { IUsersState } from 'redux/users/state';
import { IAudiosState } from 'redux/audios/state';
import { IChannelsState } from 'redux/channels/state';
import { IComponentsState } from 'redux/components/state';
import { IThreadsAction } from 'redux/threads/actions';
import { IVoicesAction } from 'redux/voices/actions';
import { IUsersAction } from 'redux/users/actions';
import { IAudiosAction } from 'redux/audios/actions';
import { IChannelsActions } from 'redux/channels/actions';
import { IComponentsAction } from 'redux/components/actions';
import { threadsReducer } from 'redux/threads/reducer';
import { voicesReducer } from 'redux/voices/reducer';
import { usersReducer } from 'redux/users/reducer';
import { audiosReducer } from 'redux/audios/reducer';
import { channelsReducer } from 'redux/channels/reducer';
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
  voices: IVoicesState;
  users: IUsersState;
  audios: IAudiosState;
  channels: IChannelsState;
  components: IComponentsState;
  router: RouterState;
}

type IRootAction =
  | IThreadsAction
  | IVoicesAction
  | IUsersAction
  | IAudiosAction
  | IChannelsActions
  | IComponentsAction;

const rootReducer = combineReducers<IRootState>({
  threads: threadsReducer,
  voices: voicesReducer,
  users: usersReducer,
  audios: audiosReducer,
  channels: channelsReducer,
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
