import { IComponentsState } from 'redux/components/state';
import { IComponentsAction } from 'redux/components/actions';

const initialState: IComponentsState = {
  drawerState: {
    top: false,
    right: false,
    bottom: false,
    left: false
  }
};

export function componentsReducer(
  state: IComponentsState = initialState,
  action: IComponentsAction
) {
  switch (action.type) {
    case 'SET_DRAWER_STATE':
      const { side, open } = action;
      const { drawerState } = state;
      return {
        ...state,
        drawerState: {
          ...drawerState,
          [side]: open
        }
      };
    default:
      return state;
  }
}
