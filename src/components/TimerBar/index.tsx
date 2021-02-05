import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { setIsRecordingState } from 'redux/audios/actions';
import { IRootState, ThunkResult } from 'store';
import classes from './styles.module.scss';

interface ITimerBarProps {
  limit: number;
  isRecording: boolean;
  setIsRecordingState: (isRecording: boolean) => void;
}

const TimerBar: React.FC<ITimerBarProps> = (props: ITimerBarProps) => {
  const [centisecond, setCentisecond] = useState<number>(0);

  /* Display the second and the centisecond separately */
  const displayDigits = (number: number, startIndex: number, endIndex?: number) => number.toString().padStart(4, '0').substring(startIndex, endIndex);

  /* Set interval for updating centisecond state */
  useEffect(() => {
    const interval = setInterval(() => {
      if (centisecond >= props.limit) props.setIsRecordingState(false);
      else setCentisecond(prevValue => prevValue + 1);
    }, 10);

    /* Clear interval timer and set isRecordingState to false before TimerBar unmounts */
    return () => {
      clearInterval(interval);
      if (props.isRecording) props.setIsRecordingState(false);
    };
  }, []); /* eslint-disable-line react-hooks/exhaustive-deps */

  return (
    <div className={classes['timer-bar']}>
      <h2 className={classes.timer}>
        <span className={classes.second}>
          {displayDigits(centisecond, 0, 2)}
        </span>

        <span className={classes.colon}>:</span>

        <span className={classes.centisecond}>
          {displayDigits(centisecond, 2)}
        </span>
      </h2>
    </div>
  );
};

const mapStateToProps = (state: IRootState) => {
  return {
    isRecording: state.audios.isRecording
  };
};

const mapDispatchToProps = (dispatch: ThunkResult) => {
  return {
    setIsRecordingState: (isRecording: boolean) => dispatch(setIsRecordingState(isRecording))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TimerBar);
