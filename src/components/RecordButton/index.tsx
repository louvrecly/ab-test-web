import React, { useState } from 'react';
import clsx from 'clsx';
import { useHistory, useLocation } from 'react-router-dom';
import { connect } from 'react-redux';
import { IconButton } from '@material-ui/core';
import { IRootState, ThunkResult } from 'store';
import { setAudio, setIsRecordingState } from 'redux/audios/actions';
import { setShowRecordButtonState } from 'redux/components/actions';
import { ThreadJson } from 'models';
import { REACT_APP_URL_PREFIX } from 'variables';
import { AudioData, AudioRecorder } from 'utils/audioRecorder';
import { useDidUpdateEffect } from 'utils/customHooks';
import { startRecording, stopRecording } from './Bloc';
import classes from './styles.module.scss';

interface IRecordButtonProps {
  recorder: AudioRecorder | null;
  isRecording: boolean;
  activeThread: ThreadJson | null;
  showRecordButton: boolean;
  setAudio: (audio: AudioData | null) => void;
  setIsRecordingState: (isRecording: boolean) => void;
  setShowRecordButtonState: (showRecordButton: boolean) => void;
}

const RecordButton: React.FC<IRecordButtonProps> = (
  props: IRecordButtonProps
) => {
  const [latestTapTime, setLatestTapTime] = useState<number>(0);
  const history = useHistory();
  const location = useLocation();

  /* Determine if the touch event is a double tap */
  const checkDoubleTap = (now: number) => now - latestTapTime < 600;

  /* Toggle isRecording state */
  const toggleRecording = () => {
    if (!props.isRecording) {
      const pathname = `${REACT_APP_URL_PREFIX}/threads${
        props.activeThread
        ? `/${props.activeThread.id}`
        : ''
      }/new`;
      history.push(pathname);
    } else {
      props.setIsRecordingState(false);
    }
  };

  /* Call toggleRecording when if isDoubleTap is true */
  const handleTouch = (event: React.TouchEvent<HTMLButtonElement>) => {
    event.preventDefault();
    const now = new Date().getTime();
    const isDoubleTap = checkDoubleTap(now);
    setLatestTapTime(now);

    if (isDoubleTap) return toggleRecording();
  };

  /* Disable context menu from long press event in mobile or tablet devices */
  const disableContextMenu = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => event.preventDefault();

  /* Capture audio data from audio recorder and save it to the store */
  const captureAudio = async () => {
    const audio = await stopRecording(props.recorder);

    /* Check if the recording is cancelled due to closing the bottom drawer */
    if (audio && location.pathname !== REACT_APP_URL_PREFIX) {
      props.setAudio(audio as AudioData);
      props.setShowRecordButtonState(false);
    }
  };

  /* Call startRecording or stopRecording on update in props.isRecording */
  useDidUpdateEffect(() => {
    if (props.isRecording) startRecording(props.recorder);
    else captureAudio();
  }, [props.isRecording]);

  return (
    <div className={clsx({
      [classes['record-button']]: true,
      [classes.show]: props.showRecordButton
    })}>
      <IconButton
        id="record"
        className={classes.button}
        aria-label="record"
        onDoubleClick={toggleRecording}
        onTouchStart={handleTouch}
        onContextMenu={disableContextMenu}
      >
        9up
      </IconButton>
    </div>
  );
};

const mapStateToProps = (state: IRootState) => {
  return {
    recorder: state.audios.recorder,
    isRecording: state.audios.isRecording,
    activeThread: state.threads.activeThread
  };
};

const mapDispatchToProps = (dispatch: ThunkResult) => {
  return {
    setAudio: (audio: AudioData | null) => dispatch(setAudio(audio)),
    setIsRecordingState: (isRecording: boolean) =>
      dispatch(setIsRecordingState(isRecording)),
    setShowRecordButtonState: (showRecordButton: boolean) =>
      dispatch(setShowRecordButtonState(showRecordButton))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RecordButton);
