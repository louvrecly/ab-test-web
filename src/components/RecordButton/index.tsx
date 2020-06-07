import React from 'react';
import { IconButton } from '@material-ui/core';
// import { AudioData, AudioRecorder } from 'utils/audioRecorder';
import { DrawerSide } from 'redux/components/state';
import { IRootState, ThunkResult } from 'store';
// import { setAudio, setIsRecordingState } from 'redux/audios/actions';
import { setIsRecordingState } from 'redux/audios/actions';
import { setDrawerState } from 'redux/components/actions';
import { connect } from 'react-redux';
import classes from './styles.module.scss';
import { useHistory } from 'react-router-dom';

interface IRecordButtonProps {
  // recorder: AudioRecorder | undefined;
  isRecording: boolean;
  // setAudio: (audio: AudioData) => void;
  setIsRecordingState: (isRecording: boolean) => void;
  setDrawerState: (side: DrawerSide, open: boolean) => void;
}

const RecordButton: React.FC<IRecordButtonProps> = (
  props: IRecordButtonProps
) => {
  const history = useHistory();

  const startRecording = () => {
    props.setDrawerState('bottom', true);
    props.setIsRecordingState(true);
    // if (props.recorder) {
    //   props.recorder.start();
    //   props.setIsRecordingState(true);
    // } else {
    //   console.log('recorder is not initialized!'); // tslint:disable-line
    // }
  };

  const stopRecording = async () => {
    if (props.isRecording) {
      // const audio = await props.recorder?.stop();
      // props.setAudio(audio as AudioData);
      props.setIsRecordingState(false);
      history.push('/threads/new');
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
    // recorder: state.audios.recorder,
    isRecording: state.audios.isRecording
  };
};

const mapDispatchToProps = (dispatch: ThunkResult) => {
  return {
    // setAudio: (audio: AudioData) => dispatch(setAudio(audio)),
    setIsRecordingState: (isRecording: boolean) =>
      dispatch(setIsRecordingState(isRecording)),
    setDrawerState: (side: DrawerSide, open: boolean) =>
      dispatch(setDrawerState(side, open))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RecordButton);
