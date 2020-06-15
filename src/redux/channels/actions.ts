export function setChannel(channel: string) {
  return {
    type: 'SET_CHANNEL' as 'SET_CHANNEL',
    channel
  };
}

type ChannelsActionsCreators = typeof setChannel;

export type IChannelsActions = ReturnType<ChannelsActionsCreators>;
