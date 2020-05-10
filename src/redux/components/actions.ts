import { DrawerSide } from 'redux/components/state';

export function setShowRecordButtonState(showRecordButton: boolean) {
  return {
    type: 'SET_SHOW_RECORD_BUTTON_STATE' as 'SET_SHOW_RECORD_BUTTON_STATE',
    showRecordButton
  };
}

export function setShowPlayListState(showPlayList: boolean) {
  return {
    type: 'SET_SHOW_PLAY_LIST_STATE' as 'SET_SHOW_PLAY_LIST_STATE',
    showPlayList
  };
}

export function setDrawerState(side: DrawerSide, open: boolean) {
  return {
    type: 'SET_DRAWER_STATE' as 'SET_DRAWER_STATE',
    side,
    open
  };
}

type ComponentsActionCreators =
  | typeof setShowRecordButtonState
  | typeof setShowPlayListState
  | typeof setDrawerState;

export type IComponentsAction = ReturnType<ComponentsActionCreators>;
