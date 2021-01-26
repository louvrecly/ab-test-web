import React from 'react';
import clsx from 'clsx';
import { Button } from '@material-ui/core';
import { IRootState, ThunkResult } from 'store';
import { setIsRecordingState } from 'redux/audios/actions';
import { setShowRecordButtonState } from 'redux/components/actions';
import { connect } from 'react-redux';
import classes from './styles.module.scss';

interface IRecordButtonProps {
  setIsRecordingState: (isRecording: boolean) => void;
  setShowRecordButtonState: (showRecordButton: boolean) => void;
}

const RecordButton: React.FC<IRecordButtonProps> = (props: IRecordButtonProps) => {
  const triggerRecording = () => {
    props.setShowRecordButtonState(true);
    props.setIsRecordingState(true);
  };

  /* Disable context menu from long press event in mobile or tablet devices */
  const disableContextMenu = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => event.preventDefault();

  return (
    <div className={clsx(classes['record-button'], classes.embedded)}>
      <Button
        id="record"
        className={classes.button}
        aria-label="record"
        onClick={triggerRecording}
        onContextMenu={disableContextMenu}
      >
        開始錄
      </Button>
    </div>
  );
};

const mapStateToProps = (state: IRootState) => {
  return {};
};

const mapDispatchToProps = (dispatch: ThunkResult) => {
  return {
    setIsRecordingState: (isRecording: boolean) =>
      dispatch(setIsRecordingState(isRecording)),
    setShowRecordButtonState: (showRecordButton: boolean) =>
      dispatch(setShowRecordButtonState(showRecordButton))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RecordButton);
