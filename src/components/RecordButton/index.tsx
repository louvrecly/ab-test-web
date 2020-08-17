import React from 'react';
import clsx from 'clsx';
import { IconButton } from '@material-ui/core';
import { Thread } from 'models';
import { DrawerSide } from 'redux/components/state';
import { useHistory, useLocation } from 'react-router-dom';
import { IRootState, ThunkResult } from 'store';
import { setAudio, setIsRecordingState } from 'redux/audios/actions';
import {
  setDrawerState,
  setShowRecordButtonState,
  embedRecordButton
} from 'redux/components/actions';
import { connect } from 'react-redux';
import { AudioData, AudioRecorder } from 'utils/audioRecorder';
import classes from './styles.module.scss';

interface IRecordButtonProps {
  recorder: AudioRecorder | undefined;
  isRecording: boolean;
  activeThread: Thread | undefined;
  showRecordButton: boolean;
  embeddedRecordButton: boolean;
  setAudio: (audio?: AudioData) => void;
  setIsRecordingState: (isRecording: boolean) => void;
  setDrawerState: (side: DrawerSide, open: boolean) => void;
  setShowRecordButtonState: (showRecordButton: boolean) => void;
  embedRecordButton: (embeddedRecordButton: boolean) => void;
}

const RecordButton: React.FC<IRecordButtonProps> = (
  props: IRecordButtonProps
) => {
  const history = useHistory();
  const location = useLocation();

  const startRecording = () => {
    if (props.recorder) {
      props.setDrawerState('bottom', true);
      props.recorder.start();
      props.setIsRecordingState(true);
      props.embedRecordButton(false);
    } else {
      console.log('recorder is not initialized!'); /* tslint:disable-line */
    }
  };

  const stopRecording = async () => {
    if (props.isRecording) {
      const audio = await props.recorder?.stop();
      props.setAudio(audio as AudioData);
      props.setIsRecordingState(false);
      const pathname = `${location.pathname}/new`;
      history.push(pathname);
      props.setShowRecordButtonState(false);
    } else {
      console.log('no audio is being recorded'); /* tslint:disable-line */
    }
  };

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
        onMouseDown={startRecording}
        onMouseUp={stopRecording}
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
      dispatch(embedRecordButton(embeddedRecordButton))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RecordButton);
