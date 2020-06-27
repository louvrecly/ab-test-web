import React from 'react';
import { IconButton } from '@material-ui/core';
import { Thread } from 'models';
import { DrawerSide } from 'redux/components/state';
import { useHistory } from 'react-router-dom';
import { IRootState, ThunkResult } from 'store';
import { setAudio, setIsRecordingState } from 'redux/audios/actions';
import { setDrawerState } from 'redux/components/actions';
import { connect } from 'react-redux';
import { AudioData, AudioRecorder } from 'utils/audioRecorder';
import classes from './styles.module.scss';

interface IRecordButtonProps {
  recorder: AudioRecorder | undefined;
  isRecording: boolean;
  activeThread: Thread | undefined;
  setAudio: (audio: AudioData) => void;
  setIsRecordingState: (isRecording: boolean) => void;
  setDrawerState: (side: DrawerSide, open: boolean) => void;
}

const RecordButton: React.FC<IRecordButtonProps> = (
  props: IRecordButtonProps
) => {
  const history = useHistory();

  const startRecording = () => {
    if (props.recorder) {
      props.setDrawerState('bottom', true);
      props.recorder.start();
      props.setIsRecordingState(true);
    } else {
      console.log('recorder is not initialized!'); // tslint:disable-line
    }
  };

  const stopRecording = async () => {
    if (props.isRecording) {
      const audio = await props.recorder?.stop();
      props.setAudio(audio as AudioData);
      props.setIsRecordingState(false);
      const pathname = `/threads${
        props.activeThread ? `/${props.activeThread.id}` : ''
      }/new`;
      history.push(pathname);
    } else {
      console.log('no audio is being recorded'); // tslint:disable-line
    }
  };

  return (
    <div className={classes['record-button']}>
      <IconButton
        className={classes.button}
        aria-label="record"
        onMouseDown={startRecording}
        onMouseUp={stopRecording}
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
    setAudio: (audio: AudioData) => dispatch(setAudio(audio)),
    setIsRecordingState: (isRecording: boolean) =>
      dispatch(setIsRecordingState(isRecording)),
    setDrawerState: (side: DrawerSide, open: boolean) =>
      dispatch(setDrawerState(side, open))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RecordButton);
