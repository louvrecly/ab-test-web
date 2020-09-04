import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HeadNav from 'components/HeadNav';
import RecordButton from 'components/RecordButton';
import DrawerContainer from 'components/DrawerContainer';
import ThreadPanel from 'components/ThreadPanel';
import TimerBar from 'components/TimerBar';
import VoiceForm from 'components/VoiceForm';
import { Thread } from 'models';
import { IRootState, ThunkResult } from 'store';
import { DrawerState } from 'redux/components/state';
import { connect } from 'react-redux';
import classes from './styles.module.scss';

const { REACT_APP_URL_PREFIX } = process.env;

interface IMainProps {
  drawerState: DrawerState;
  activeThread: Thread | undefined;
  showRecordButton: boolean;
  isRecording: boolean;
}

const Main: React.FC<IMainProps> = (props: IMainProps) => {
  return (
    <div className={classes.main}>
      <HeadNav />

      {props.showRecordButton && <RecordButton />}

      <DrawerContainer side="left">
        <p>drawer contents</p>
      </DrawerContainer>

      <DrawerContainer
        side="bottom"
        disableSwipe={props.activeThread === undefined}
      >
        {props.isRecording ? (
          <TimerBar />
        ) : (
          <Switch>
            <Route
              path={`${REACT_APP_URL_PREFIX}/threads/new`}
              component={VoiceForm}
            />

            <Route
              path={`${REACT_APP_URL_PREFIX}/threads/:id/new`}
              children={<VoiceForm thread={props.activeThread} />}
            />

            <Route path={`${REACT_APP_URL_PREFIX}/`} component={ThreadPanel} />
          </Switch>
        )}
      </DrawerContainer>
    </div>
  );
};

const mapStateToProps = (state: IRootState) => {
  return {
    drawerState: state.components.drawerState,
    activeThread: state.threads.activeThread,
    showRecordButton: state.components.showRecordButton,
    isRecording: state.audios.isRecording
  };
};

const mapDispatchToProps = (dispatch: ThunkResult) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
