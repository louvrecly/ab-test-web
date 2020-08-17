import { IComponentsState } from 'redux/components/state';
import { IComponentsAction } from 'redux/components/actions';

const initialState: IComponentsState = {
  showRecordButton: true,
  showPlayList: false,
  drawerState: {
    top: false,
    right: false,
    bottom: false,
    left: false
  },
  embeddedRecordButton: false
};

export function componentsReducer(
  state: IComponentsState = initialState,
  action: IComponentsAction
) {
  switch (action.type) {
    case 'SET_SHOW_RECORD_BUTTON_STATE':
      const { showRecordButton } = action;
      return {
        ...state,
        showRecordButton
      };
    case 'SET_SHOW_PLAY_LIST_STATE':
      const { showPlayList } = action;
      return {
        ...state,
        showPlayList
      };
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
    case 'EMBED_RECORD_BUTTON':
      const { embeddedRecordButton } = action;
      return {
        ...state,
        embeddedRecordButton
      };
    default:
      return state;
  }
}
