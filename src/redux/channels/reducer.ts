import { IChannelsState } from './state';
import { IChannelsActions } from './actions';

const initialState: IChannelsState = {
  channel: '吹水台'
};

export const channelsReducer = (
  state: IChannelsState = initialState,
  action: IChannelsActions
): IChannelsState => {
  switch (action.type) {
    case 'SET_CHANNEL':
      const { channel } = action;
      return {
        ...state,
        channel
      };
    default:
      return state;
  }
};
