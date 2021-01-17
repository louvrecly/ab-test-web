import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Map from 'components/Map';
import HeadNav from 'components/HeadNav';
import RecordButton from 'components/RecordButton';
import DrawerContainer from 'components/Drawer/Container';
import BottomDrawerContents from 'components/Drawer/Contents/Bottom';
import { IRootState, ThunkResult } from 'store';
import { DrawerState } from 'redux/components/state';
import { loadThreads } from 'redux/threads/thunks';
import { loadUsers } from 'redux/users/thunks';
import { setRecorder } from 'redux/audios/actions';
import { ThreadJson } from 'models';
import { audioRecorder, AudioRecorder } from 'utils/audioRecorder';
import classes from './styles.module.scss';

interface IMainProps {
  drawerState: DrawerState;
  activeThread: ThreadJson | null;
  showRecordButton: boolean;
  isRecording: boolean;
  loadThreads: () => void;
  loadUsers: () => void;
  setRecorder: (recorder: AudioRecorder | null) => void;
}

const Main: React.FC<IMainProps> = (props: IMainProps) => {
  /* define function to initialize recorder */
  const initializeRecorder = async () => {
    const recorder = await audioRecorder();
    props.setRecorder(recorder);
  };

  /* initialize recorder, load threads and users on start */
  useEffect(() => {
    initializeRecorder();

    props.loadThreads();
    props.loadUsers();
  }, []); /* eslint-disable-line react-hooks/exhaustive-deps */

  return (
    <div className={classes.main}>
      <Map />

      <HeadNav />

      {props.showRecordButton && <RecordButton />}

      <DrawerContainer side="left">
        <p>drawer contents</p>
      </DrawerContainer>

      <DrawerContainer side="bottom" disableSwipe={props.activeThread === null}>
        <BottomDrawerContents
          isRecording={props.isRecording}
          activeThread={props.activeThread}
        />
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
  return {
    loadThreads: () => dispatch(loadThreads()),
    loadUsers: () => dispatch(loadUsers()),
    setRecorder: (recorder: AudioRecorder | null) =>
      dispatch(setRecorder(recorder))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
