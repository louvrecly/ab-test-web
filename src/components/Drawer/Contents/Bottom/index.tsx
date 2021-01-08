import React from 'react';
import { Route, Switch } from 'react-router-dom';
import TimerBar from 'components/TimerBar';
import VoiceForm from 'components/VoiceForm';
import ThreadPanel from 'components/ThreadPanel';
import { ThreadJson } from 'models';
import { REACT_APP_URL_PREFIX } from 'variables';

interface IDrawerContentsProps {
  isRecording: boolean,
  activeThread: ThreadJson | null
}

const BottomDrawerContents: React.FC<IDrawerContentsProps> = (props: IDrawerContentsProps) => {
  return (
    <div>
      {props.isRecording ? (
        <TimerBar limit={props.activeThread ? 900 : 9900} />
      ) : (
        <Switch>
          <Route
            path={`${REACT_APP_URL_PREFIX}/threads/new`}
            children={<VoiceForm thread={props.activeThread} />}
          />

          <Route
            path={`${REACT_APP_URL_PREFIX}/threads/:threadId/new`}
            children={<VoiceForm thread={props.activeThread} />}
          />

          <Route path={`${REACT_APP_URL_PREFIX}/`} component={ThreadPanel} />
        </Switch>
      )}
    </div>
  );
};

export default BottomDrawerContents;
