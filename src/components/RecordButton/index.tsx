import React, { useState } from 'react';
import { useHistory, useLocation } from 'react-router';
import clsx from 'clsx';
import { IconButton } from '@material-ui/core';
import { ThreadJson, LocationJson } from 'models';
import { REACT_APP_URL_PREFIX } from 'variables';
import { DrawerSide } from 'redux/components/state';
import { IRootState, ThunkResult } from 'store';
import { setAudio, setIsRecordingState } from 'redux/audios/actions';
import {
  setDrawerState,
  setShowRecordButtonState,
  embedRecordButton
} from 'redux/components/actions';
import { setGeolocation } from 'redux/geolocation/actions';
import { connect } from 'react-redux';
import { AudioData, AudioRecorder } from 'utils/audioRecorder';
import { getLocationJson } from 'utils/geolocation';
import classes from './styles.module.scss';

interface IRecordButtonProps {
  recorder: AudioRecorder | undefined;
  isRecording: boolean;
  activeThread: ThreadJson | null;
  showRecordButton: boolean;
  embeddedRecordButton: boolean;
  setAudio: (audio?: AudioData) => void;
  setIsRecordingState: (isRecording: boolean) => void;
  setDrawerState: (side: DrawerSide, open: boolean) => void;
  setShowRecordButtonState: (showRecordButton: boolean) => void;
  embedRecordButton: (embeddedRecordButton: boolean) => void;
  setGeolocation: (geolocation: LocationJson | null) => void;
}

const RecordButton: React.FC<IRecordButtonProps> = (
  props: IRecordButtonProps
) => {
  const [latestTapTime, setLatestTapTime] = useState<number>(0);
  const history = useHistory();
  const location = useLocation();

  const startRecording = () => {
    if (props.recorder && !props.isRecording) {
      props.setGeolocation(null);
      const pathname = location.pathname.replace('/new', '');
      history.push(pathname);
      props.setDrawerState('bottom', true);
      props.recorder.start();
      props.setIsRecordingState(true);
      props.embedRecordButton(false);
    } else {
      console.log('recorder is not ready!'); /* tslint:disable-line */
    }
  };

  const stopRecording = async () => {
    if (props.isRecording) {
      const audio = await props.recorder?.stop();
      props.setAudio(audio as AudioData);
      props.setIsRecordingState(false);
      const pathname = `${
        props.activeThread
          ? location.pathname
          : `${REACT_APP_URL_PREFIX}/threads`
      }/new`;
      history.push(pathname);
      props.setShowRecordButtonState(false);

      const geolocation = await getLocationJson();
      props.setGeolocation(geolocation);
    } else {
      console.log('no audio is being recorded'); /* tslint:disable-line */
    }
  };

  const toggleRecording = () => {
    if (props.isRecording) {
      return stopRecording();
    } else {
      if (props.recorder) return startRecording();
    }
  };

  const checkDoubleTap = (now: number) => {
    return now - latestTapTime < 600;
  };

  const handleTouch = (event: React.TouchEvent<HTMLButtonElement>) => {
    event.preventDefault();
    const now = new Date().getTime();
    setLatestTapTime(now);
    const isDoubleTap = checkDoubleTap(now);
    if (isDoubleTap) {
      return toggleRecording();
    }
  };

  /* disable context menu from long press event in mobile or tablet devices */
  const disableContextMenu = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => event.preventDefault();

  return (
    <div
      className={clsx({
        [classes['record-button']]: true,
        [classes.floating]: !props.embeddedRecordButton
      })}
    >
      <IconButton
        id="record"
        className={classes.button}
        aria-label="record"
        onDoubleClick={toggleRecording}
        onTouchStart={handleTouch}
        onContextMenu={disableContextMenu}
      >
        {props.embeddedRecordButton ? '開始錄' : '9up'}
      </IconButton>
    </div>
  );
};

const mapStateToProps = (state: IRootState) => {
  return {
    recorder: state.audios.recorder,
    isRecording: state.audios.isRecording,
    activeThread: state.threads.activeThread,
    showRecordButton: state.components.showRecordButton,
    embeddedRecordButton: state.components.embeddedRecordButton
  };
};

const mapDispatchToProps = (dispatch: ThunkResult) => {
  return {
    setAudio: (audio?: AudioData) => dispatch(setAudio(audio)),
    setIsRecordingState: (isRecording: boolean) =>
      dispatch(setIsRecordingState(isRecording)),
    setDrawerState: (side: DrawerSide, open: boolean) =>
      dispatch(setDrawerState(side, open)),
    setShowRecordButtonState: (showRecordButton: boolean) =>
      dispatch(setShowRecordButtonState(showRecordButton)),
    embedRecordButton: (embeddedRecordButton: boolean) =>
      dispatch(embedRecordButton(embeddedRecordButton)),
    setGeolocation: (geolocation: LocationJson | null) =>
      dispatch(setGeolocation(geolocation))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RecordButton);
