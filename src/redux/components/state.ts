export type DrawerSide = 'top' | 'right' | 'bottom' | 'left';

export interface DrawerState {
  top: boolean;
  right: boolean;
  bottom: boolean;
  left: boolean;
}

export interface VoiceFormData {
  channel?: string;
  threadTitle: string;
}

export interface IComponentsState {
  showRecordButton: boolean;
  showPlayList: boolean;
  drawerState: DrawerState;
}
