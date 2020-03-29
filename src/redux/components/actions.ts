import { DrawerSide } from 'redux/components/state';

export function setDrawerState(side: DrawerSide, open: boolean) {
  return {
    type: 'SET_DRAWER_STATE' as 'SET_DRAWER_STATE',
    side,
    open
  };
}

type ComponentsActionCreators = typeof setDrawerState;

export type IComponentsAction = ReturnType<ComponentsActionCreators>;
