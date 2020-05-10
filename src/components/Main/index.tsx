import React from 'react';
import HeadNav from 'components/HeadNav';
import RecordButton from 'components/RecordButton';
import DrawerContainer from 'components/DrawerContainer';
import ThreadPanel from 'components/ThreadPanel';
import TimerBar from 'components/TimerBar';
import { Thread } from 'models';
import { IRootState, ThunkResult } from 'store';
import { DrawerState } from 'redux/components/state';
import { connect } from 'react-redux';
import classes from './styles.module.scss';

interface IMainProps {
  drawerState: DrawerState;
  activeThread: Thread | undefined;
  showRecordButton: boolean;
  showPlayList: boolean;
  isRecording: boolean;
}

const Main: React.FC<IMainProps> = (props: IMainProps) => {
  return (
    <div className={classes.main}>
      <HeadNav title="吹水台" />

      {(props.showRecordButton || props.showPlayList) && (
        <RecordButton isAbsolute={true} />
      )}

      <DrawerContainer side="left">
        <p>drawer contents</p>
      </DrawerContainer>

      <DrawerContainer
        side="bottom"
        disableSwipe={props.activeThread === undefined}
      >
        <ThreadPanel />
      </DrawerContainer>

      {props.isRecording && <TimerBar />}
    </div>
  );
};

const mapStateToProps = (state: IRootState) => {
  return {
    drawerState: state.components.drawerState,
    activeThread: state.threads.activeThread,
    showRecordButton: state.components.showRecordButton,
    showPlayList: state.components.showPlayList,
    isRecording: state.audios.isRecording
  };
};

const mapDispatchToProps = (dispatch: ThunkResult) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
