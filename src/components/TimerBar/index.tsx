import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { setIsRecordingState } from 'redux/audios/actions';
import { IRootState, ThunkResult } from 'store';
import classes from './styles.module.scss';

interface ITimerBarProps {
  limit: number;
  setIsRecordingState: (isRecording: boolean) => void;
}

const TimerBar: React.FC<ITimerBarProps> = (props: ITimerBarProps) => {
  const [centisecond, setCentisecond] = useState<number>(0);

  /* Set interval timer */
  const timer = setInterval(() => {
    if (centisecond >= props.limit) return props.setIsRecordingState(false);

    setCentisecond(centisecond + 1);
  }, 10);

  /* Display the second and the centisecond separately */
  const displayDigits = (number: number, startIndex: number, endIndex?: number) => number.toString().padStart(4, '0').substring(startIndex, endIndex);

  /* Clear interval timer before TimerBar unmounts */
  useEffect(() => () => clearInterval(timer));

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
  return {};
};

const mapDispatchToProps = (dispatch: ThunkResult) => {
  return {
    setIsRecordingState: (isRecording: boolean) => dispatch(setIsRecordingState(isRecording))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TimerBar);
