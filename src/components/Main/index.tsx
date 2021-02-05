import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { connect } from 'react-redux';
import Map from 'components/Map';
import HeadNav from 'components/HeadNav';
import RecordButton from 'components/RecordButton';
import DrawerContainer from 'components/Drawer/Container';
import LeftDrawerContents from 'components/Drawer/Contents/Left';
import BottomDrawerContents from 'components/Drawer/Contents/Bottom';
import { IRootState, ThunkResult } from 'store';
import { DrawerSide } from 'redux/components/state';
import { loadThreads } from 'redux/threads/thunks';
import { loadUsers } from 'redux/users/thunks';
import { setRecorder } from 'redux/audios/actions';
import { setActiveThread } from 'redux/threads/actions';
import { setDrawerState, setShowRecordButtonState } from 'redux/components/actions';
import { ThreadJson } from 'models';
import { REACT_APP_URL_PREFIX } from 'variables';
import { audioRecorder, AudioRecorder } from 'utils/audioRecorder';
import classes from './styles.module.scss';

interface IMainProps {
  threads: Array<ThreadJson>;
  activeThread: ThreadJson | null;
  showRecordButton: boolean;
  loadThreads: () => void;
  loadUsers: () => void;
  setRecorder: (recorder: AudioRecorder | null) => void;
  setActiveThread: (thread: ThreadJson | null) => void;
  setShowRecordButtonState: (showRecordButton: boolean) => void;
  setDrawerState: (side: DrawerSide, open: boolean) => void;
}

const Main: React.FC<IMainProps> = (props: IMainProps) => {
  const location = useLocation();

  /* Define function to initialize recorder */
  const initializeRecorder = async () => {
    const recorder = await audioRecorder();
    props.setRecorder(recorder);
  };

  /* Initialize recorder, load threads and users on start */
  useEffect(() => {
    initializeRecorder();

    props.loadThreads();
    props.loadUsers();
  }, []); /* eslint-disable-line react-hooks/exhaustive-deps */

  /* Control bottom drawer depending on location and set active thread to null on main page */
  useEffect(() => {
    if (location.pathname === REACT_APP_URL_PREFIX) {
      props.setShowRecordButtonState(true);
      props.setDrawerState('bottom', false);
      if (props.activeThread) props.setActiveThread(null);
    } else {
      props.setDrawerState('bottom', true);
    }
  }, [location]); /* eslint-disable-line react-hooks/exhaustive-deps */

  return props.threads.length
    ? (
      <div className={classes.main}>
        <Map />

        <HeadNav />

        <DrawerContainer side="left">
          <LeftDrawerContents />
        </DrawerContainer>

        <DrawerContainer side="bottom" disableSwipe={props.activeThread === null}>
          <BottomDrawerContents />
        </DrawerContainer>

        <RecordButton showRecordButton={props.showRecordButton} />
      </div>
    )
    : <div className={classes.loading}>Loading...</div>;
};

const mapStateToProps = (state: IRootState) => {
  return {
    threads: state.threads.threads,
    activeThread: state.threads.activeThread,
    showRecordButton: state.components.showRecordButton
  };
};

const mapDispatchToProps = (dispatch: ThunkResult) => {
  return {
    loadThreads: () => dispatch(loadThreads()),
    loadUsers: () => dispatch(loadUsers()),
    setRecorder: (recorder: AudioRecorder | null) =>
      dispatch(setRecorder(recorder)),
    setActiveThread: (thread: ThreadJson | null) =>
      dispatch(setActiveThread(thread)),
    setShowRecordButtonState: (showRecordButton: boolean) =>
      dispatch(setShowRecordButtonState(showRecordButton)),
    setDrawerState: (side: DrawerSide, open: boolean) =>
      dispatch(setDrawerState(side, open))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
